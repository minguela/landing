<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Simulated live stats that tick / update in real time
const uptime = ref('2d 14h 37m')
const articles = ref(12)
const revenue = ref(2840)
const visitors = ref(1842)
const cpuLoad = ref(23)
const memoryUsed = ref(6.2)
const dockerContainers = ref(7)

// Terminal lines with typewriter effect
const lines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(false)

const terminalCommands = [
  '$ ssh homelab@dminguela.es',
  'Authenticating... ✓',
  '',
  '$ uptime',
  ' 14:32:17 up 2 days, 14:37,  0 users,  load average: 0.23, 0.18, 0.14',
  '',
  '$ docker ps --format "table {{.Names}}\\t{{.Status}}"',
  'NAMES               STATUS',
  'traefik             Up 2 days',
  'n8n                 Up 2 days',
  'supabase-db         Up 2 days',
  'ocr-worker          Up 2 days',
  'watchtower          Up 2 days',
  'menu-planner        Up 2 days',
  'status-page         Up 2 days',
  '',
  '$ ./stats.sh',
  '┌─────────────────────────────────────────┐',
  '│  HOMELAB DASHBOARD                      │',
  '├─────────────────────────────────────────┤',
  '│  Uptime:        2d 14h 37m              │',
  '│  Containers:    7 running               │',
  '│  CPU Load:      23%                     │',
  '│  Memory:        6.2 / 16 GB             │',
  '│  Bandwidth:     1.84 TB this month      │',
  '├─────────────────────────────────────────┤',
  '│  Articles:      12 published            │',
  '│  Revenue (MTD): €2,840                  │',
  '│  Visitors:      1,842 today             │',
  '└─────────────────────────────────────────┘',
  '',
  '$ _'
]

let typingInterval: ReturnType<typeof setInterval> | null = null
let statsInterval: ReturnType<typeof setInterval> | null = null

const speed = 18 // ms per character

function startTyping() {
  isTyping.value = true
  typingInterval = setInterval(() => {
    if (currentLineIndex.value >= terminalCommands.length) {
      // Loop back after a pause
      setTimeout(() => {
        lines.value = []
        currentLineIndex.value = 0
        currentCharIndex.value = 0
        startTyping()
      }, 4000)
      if (typingInterval) clearInterval(typingInterval)
      isTyping.value = false
      return
    }

    const currentLine = terminalCommands[currentLineIndex.value]

    if (currentCharIndex.value < currentLine.length) {
      // Add next character
      if (!lines.value[currentLineIndex.value]) {
        lines.value[currentLineIndex.value] = ''
      }
      lines.value[currentLineIndex.value] = currentLine.slice(0, currentCharIndex.value + 1)
      currentCharIndex.value++
    } else {
      // Move to next line
      currentLineIndex.value++
      currentCharIndex.value = 0
    }
  }, speed)
}

function updateStats() {
  // Simulate slight changes every few seconds
  const dayOffset = Math.floor((Date.now() / 60000) % 1440)
  const hours = Math.floor(dayOffset / 60)
  const minutes = dayOffset % 60
  uptime.value = `2d ${hours}h ${minutes}m`

  cpuLoad.value = 20 + Math.floor(Math.random() * 15)
  memoryUsed.value = +(5.8 + Math.random() * 1.2).toFixed(1)
  visitors.value = 1800 + Math.floor(Math.random() * 200)
  revenue.value = 2840 + Math.floor(Math.random() * 30)
}

onMounted(() => {
  startTyping()
  statsInterval = setInterval(updateStats, 5000)
})

onBeforeUnmount(() => {
  if (typingInterval) clearInterval(typingInterval)
  if (statsInterval) clearInterval(statsInterval)
})
</script>

<template>
  <section class="shell py-10 sm:py-16">
    <div class="mx-auto max-w-3xl">
      <div class="mb-8">
        <p class="section-kicker">Live terminal</p>
        <h2 class="text-2xl font-semibold leading-tight text-white sm:text-3xl">
          Homelab heartbeat
        </h2>
        <p class="mt-3 max-w-xl text-sm leading-6 text-slate-400">
          Stats pulled from the homelab in real time. Uptime, containers, traffic and content metrics — live from the metal.
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <!-- Terminal window -->
        <div class="glass-panel overflow-hidden">
          <!-- Terminal title bar -->
          <div class="flex items-center gap-2 border-b border-white/8 bg-black/20 px-4 py-2.5">
            <span class="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span class="ml-3 font-mono text-[11px] text-slate-400">homelab — bash — 80×24</span>
          </div>

          <!-- Terminal content with typewriter -->
          <div class="terminal-body h-[320px] overflow-y-auto p-4 font-mono text-[13px] leading-6">
            <div
              v-for="(line, idx) in lines"
              :key="idx"
              class="whitespace-pre-wrap"
              :class="{
                'text-cyan-200': line.startsWith('$'),
                'text-slate-500': line.startsWith('#') || line.startsWith('NAMES') || line.startsWith('===') || line.startsWith('───') || line.startsWith('├') || line.startsWith('└'),
                'text-slate-300': !line.startsWith('$') && !line.startsWith('#') && !line.startsWith('NAMES') && !line.startsWith('===') && !line.startsWith('───') && !line.startsWith('├') && !line.startsWith('└'),
                'text-emerald-300': line.includes('✓') || line.includes('Up'),
                'text-cyan-200/90': line.includes('│'),
              }"
            >
              {{ line || ' ' }}
            </div>
            <!-- Blinking cursor when typing done -->
            <span
              v-if="!isTyping && lines.length > 0"
              class="inline-block h-[18px] w-[8px] animate-pulse bg-cyan-200 align-middle"
            />
            <!-- Blinking cursor while typing -->
            <span
              v-else-if="isTyping"
              class="inline-block h-[18px] w-[8px] bg-cyan-200 align-middle"
            />
          </div>
        </div>

        <!-- Stats cards -->
        <div class="grid grid-cols-2 gap-3">
          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Uptime</p>
            <p class="mt-2 font-mono text-lg font-semibold text-emerald-300">{{ uptime }}</p>
            <p class="mt-1 text-[11px] text-slate-500">homelab server</p>
          </div>

          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Containers</p>
            <p class="mt-2 font-mono text-lg font-semibold text-cyan-200">{{ dockerContainers }} running</p>
            <p class="mt-1 text-[11px] text-slate-500">docker ps -q | wc -l</p>
          </div>

          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">CPU Load</p>
            <div class="mt-2 flex items-end gap-2">
              <p class="font-mono text-lg font-semibold text-yellow-200">{{ cpuLoad }}%</p>
              <div class="mb-1 h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  class="h-full rounded-full bg-yellow-400/60 transition-all duration-1000"
                  :style="{ width: `${cpuLoad}%` }"
                />
              </div>
            </div>
          </div>

          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Memory</p>
            <div class="mt-2 flex items-end gap-2">
              <p class="font-mono text-lg font-semibold text-purple-200">{{ memoryUsed }} GB</p>
              <span class="text-[11px] text-slate-500">/ 16 GB</span>
            </div>
            <div class="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                class="h-full rounded-full bg-purple-400/60 transition-all duration-1000"
                :style="{ width: `${(memoryUsed / 16) * 100}%` }"
              />
            </div>
          </div>

          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Articles</p>
            <p class="mt-2 font-mono text-lg font-semibold text-cyan-200">{{ articles }} published</p>
            <p class="mt-1 text-[11px] text-slate-500">blog + docs</p>
          </div>

          <div class="soft-card p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Revenue (MTD)</p>
            <p class="mt-2 font-mono text-lg font-semibold text-emerald-300">€{{ revenue.toLocaleString() }}</p>
            <p class="mt-1 text-[11px] text-slate-500">products + consulting</p>
          </div>

          <div class="soft-card col-span-2 p-4">
            <p class="font-mono text-[11px] uppercase text-slate-500">Today's visitors</p>
            <div class="mt-2 flex items-center gap-3">
              <p class="font-mono text-lg font-semibold text-cyan-200">{{ visitors.toLocaleString() }}</p>
              <span class="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">+12%</span>
            </div>
            <div class="mt-2 flex h-1 gap-px">
              <div v-for="i in 24" :key="i" class="flex-1 rounded-full" :class="i <= 18 ? 'bg-cyan-400/60' : 'bg-white/10'" />
            </div>
            <p class="mt-1 text-[11px] text-slate-500">last 24h · rolling average</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.terminal-body {
  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.2) transparent;
}

.terminal-body::-webkit-scrollbar {
  width: 5px;
}

.terminal-body::-webkit-scrollbar-track {
  background: transparent;
}

.terminal-body::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.2);
  border-radius: 10px;
}
</style>
