<script setup>
  import HappyActivities from './activities/HappyActivities.vue';
  import CalmActivities from './activities/CalmActivities.vue';
  import NeutralActivities from './activities/NeutralActivities.vue';
  import AnxiousActivities from './activities/AnxiousActivities.vue';
  import SadActivities from './activities/SadActivities.vue';
  import EnergeticActivities from './activities/EnergeticActivities.vue';

  const props = defineProps({
    moodName: String
  })
</script>

<template>
  <div v-if="moodName === 'Happy'">
    <HappyActivities/>
  </div>
  <div v-if="moodName === 'Calm'">
    <CalmActivities/>
  </div>
  <div v-if="moodName === 'Neutral'">
    <NeutralActivities/>
  </div>
  <div v-if="moodName === 'Anxious'">
    <AnxiousActivities/>
  </div>
  <div v-if="moodName === 'Sad'">
    <SadActivities/>
  </div>
  <div v-if="moodName === 'Energetic'">
    <EnergeticActivities/>
  </div>
</template>