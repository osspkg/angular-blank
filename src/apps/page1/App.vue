<script setup lang="ts">
import LogoSVG from '@/assets/logo.svg'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" :src="LogoSVG" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
