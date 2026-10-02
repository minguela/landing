<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ robots: false })

const config = useRuntimeConfig()
const mode = ref<'project' | 'blog'>('project')
const editor = ref('')
const status = ref('')
const records = ref<{ projects: Array<{ slug: string; locale: string; published: boolean; project: unknown }>; blogPosts: Array<{ slug: string; published: boolean; translations: unknown }> }>()
const busy = ref(false)

async function loadContent() {
  busy.value = true
  status.value = ''
  try {
    records.value = await $fetch<any>('/api/admin/content')
    status.value = 'Contenido cargado desde Neon.'
  } catch (error: any) {
    status.value = error?.data?.statusMessage || 'No se pudo cargar el contenido. Comprueba sesión, permisos y configuración.'
  } finally {
    busy.value = false
  }
}

function editProject(record: NonNullable<typeof records.value>['projects'][number]) {
  mode.value = 'project'
  editor.value = JSON.stringify(record, null, 2)
  status.value = `Editando ${record.slug} (${record.locale}).`
}

function editBlog(record: NonNullable<typeof records.value>['blogPosts'][number]) {
  mode.value = 'blog'
  editor.value = JSON.stringify(record, null, 2)
  status.value = `Editando ${record.slug}.`
}

async function saveContent() {
  busy.value = true
  status.value = ''
  try {
    const payload = JSON.parse(editor.value)
    const endpoint = mode.value === 'project' ? '/api/admin/content/project' : '/api/admin/content/blog'
    await $fetch(endpoint, { method: 'PUT', body: payload })
    status.value = 'Cambios guardados en Neon.'
    await loadContent()
  } catch (error: any) {
    status.value = error?.data?.statusMessage || error?.message || 'No se pudo guardar el contenido.'
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <main class="mx-auto min-h-screen max-w-6xl px-6 py-16 text-slate-100 sm:px-10">
    <header class="mb-10 flex items-center justify-between gap-5">
      <div>
        <p class="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Administración privada</p>
        <h1 class="mt-3 text-3xl font-semibold">Contenido de portfolio y blog</h1>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-400">La lectura pública sigue siendo anónima. Las escrituras exigen una sesión Clerk y el ID de usuario propietario configurado en el servidor.</p>
      </div>
      <UserButton v-if="config.public.clerkPublishableKey" />
    </header>

    <section v-if="!config.public.clerkPublishableKey" class="rounded-xl border border-amber-300/30 bg-amber-300/5 p-6 text-amber-100">
      Clerk no está configurado en este despliegue. Define la clave pública y privada de Clerk antes de activar el acceso.
    </section>
    <template v-else>
      <Show when="signed-out">
        <section class="rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <p class="mb-5 text-sm text-slate-300">Inicia sesión con Clerk. Sólo el ID incluido en la allowlist del servidor podrá editar.</p>
          <SignIn />
        </section>
      </Show>
      <Show when="signed-in">
        <section class="grid gap-8 lg:grid-cols-[20rem_1fr]">
          <aside class="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div class="flex items-center justify-between gap-3">
              <h2 class="font-semibold">Entradas Neon</h2>
              <button class="rounded bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 disabled:opacity-50" :disabled="busy" @click="loadContent">Cargar</button>
            </div>
            <p v-if="records?.projects.length" class="mb-2 mt-6 font-mono text-xs uppercase text-slate-500">Proyectos</p>
            <button v-for="project in records?.projects || []" :key="`${project.slug}:${project.locale}`" class="block w-full border-b border-white/5 py-2 text-left text-sm text-slate-300 hover:text-white" @click="editProject(project)">
              {{ project.slug }} <span class="text-slate-500">· {{ project.locale }} · {{ project.published ? 'publicado' : 'borrador' }}</span>
            </button>
            <p v-if="records?.blogPosts.length" class="mb-2 mt-6 font-mono text-xs uppercase text-slate-500">Artículos</p>
            <button v-for="post in records?.blogPosts || []" :key="post.slug" class="block w-full border-b border-white/5 py-2 text-left text-sm text-slate-300 hover:text-white" @click="editBlog(post)">
              {{ post.slug }} <span class="text-slate-500">· {{ post.published ? 'publicado' : 'borrador' }}</span>
            </button>
          </aside>
          <div class="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
              <label class="text-sm font-medium" for="content-json">JSON — {{ mode === 'project' ? 'proyecto/localización' : 'artículo bilingüe' }}</label>
              <div class="flex gap-2">
                <button class="rounded border border-white/15 px-3 py-2 text-xs" :aria-pressed="mode === 'project'" @click="mode = 'project'">Proyecto</button>
                <button class="rounded border border-white/15 px-3 py-2 text-xs" :aria-pressed="mode === 'blog'" @click="mode = 'blog'">Blog</button>
                <button class="rounded bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 disabled:opacity-50" :disabled="busy || !editor" @click="saveContent">Guardar</button>
              </div>
            </div>
            <textarea id="content-json" v-model="editor" rows="28" spellcheck="false" class="w-full rounded-lg border border-white/10 bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-200 focus:border-cyan-300 focus:outline-none" placeholder="Carga un registro o pega el objeto JSON validado por la API" />
            <p role="status" class="mt-3 min-h-6 text-sm text-slate-400">{{ status }}</p>
          </div>
        </section>
      </Show>
    </template>
  </main>
</template>
