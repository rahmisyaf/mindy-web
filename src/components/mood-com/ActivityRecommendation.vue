<script setup>
  import HappyActivities from './activities/HappyActivities.vue';

  const props = defineProps({
    moodName: String
  })
</script>

<template>
  <div v-if="moodName === 'Happy'">
    <HappyActivities/>
  </div>
</template>