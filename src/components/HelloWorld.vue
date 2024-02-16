<script setup lang="ts">
import IconCommunity from '@/components/icons/IconCommunity.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <div>{{ msg }}</div>
  <IconCommunity />
</template>

<style scoped lang="scss"></style>
