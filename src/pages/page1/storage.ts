import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDateStore = defineStore('date-store', () => {
  const currDate = ref(new Date())
  function $reset() {
    currDate.value = new Date()
  }

  return { currDate, $reset }
})
