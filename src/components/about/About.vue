<script setup lang="ts">
import Calendar from 'primevue/calendar'
import { useDateStore } from '@/components/about/storage'

const date = useDateStore()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <Calendar v-model="date.currDate" />
</template>

<style scoped lang="scss"></style>
