<script setup lang="ts">
import type { Project } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{
  project: Project
  locale?: 'en' | 'es'
}>()
</script>

<template>
  <div class="project-artifact" :class="'artifact-' + project.artifact" aria-hidden="true">
    <div class="artifact-toolbar">
      <span />
      <p>{{ project.name }}</p>
      <b>{{ project.slug }}</b>
    </div>

    <div v-if="project.artifact === 'journey'" class="journey-artifact">
      <div class="journey-map">
        <svg viewBox="0 0 320 210" role="presentation">
          <path d="M18 172 C74 132 72 54 132 76 S211 170 302 35" />
          <circle cx="18" cy="172" r="7" />
          <circle cx="132" cy="76" r="7" />
          <circle cx="220" cy="133" r="7" />
          <circle cx="302" cy="35" r="7" />
        </svg>
        <span class="map-tag map-tag-a">DAY 01</span>
        <span class="map-tag map-tag-b">DAY 04</span>
      </div>
      <div class="journey-agenda">
        <div v-for="step in 4" :key="step">
          <b>0{{ step }}</b>
          <span><i /><i /></span>
        </div>
      </div>
    </div>

    <div v-else-if="project.artifact === 'handoff'" class="handoff-artifact">
      <div class="handoff-list">
        <span v-for="row in 4" :key="row"><i /><b /></span>
      </div>
      <div class="handoff-route"><span>LIST</span><b>→</b><span>REVIEW</span><b>→</b><span>CART</span></div>
      <div class="handoff-cart">
        <span v-for="row in 3" :key="row"><i /><b /></span>
      </div>
    </div>

    <div v-else-if="project.artifact === 'pipeline'" class="pipeline-artifact">
      <div class="pipeline-node"><span>01</span><b>DOC</b></div>
      <i />
      <div class="pipeline-node"><span>02</span><b>OCR</b></div>
      <i />
      <div class="pipeline-node"><span>03</span><b>PLAN</b></div>
      <div class="pipeline-output">
        <span v-for="row in 5" :key="row" :style="{ width: (100 - row * 7) + '%' }" />
      </div>
    </div>

    <div v-else-if="project.artifact === 'evidence'" class="evidence-artifact">
      <div class="evidence-source">
        <b>SOURCE / 04</b>
        <span v-for="row in 4" :key="row" />
      </div>
      <div class="evidence-score">
        <b>82</b>
        <span>VERDICT</span>
      </div>
      <div class="evidence-bars">
        <span v-for="(width, row) in [88, 72, 94, 61]" :key="row"><i :style="{ width: width + '%' }" /></span>
      </div>
    </div>

    <div v-else-if="project.artifact === 'filesystem'" class="filesystem-artifact">
      <div class="filesystem-tree">
        <p>/ archive</p>
        <p>↳ / projects</p>
        <p>↳ ↳ field-notes.md</p>
        <p>↳ ↳ sources</p>
        <p>↳ / exports</p>
      </div>
      <div class="filesystem-meta">
        <span>INDEXED</span>
        <b>FILESYSTEM</b>
        <i />
        <i />
        <i />
      </div>
    </div>

    <div v-else class="timeline-artifact">
      <div v-for="(month, row) in ['JAN', 'APR', 'JUL', 'OCT']" :key="month">
        <b>{{ month }}</b>
        <span><i :style="{ width: (42 + row * 14) + '%' }" /></span>
        <em>{{ row % 2 ? 'ACTIVE' : 'NEXT' }}</em>
      </div>
    </div>
  </div>
</template>
