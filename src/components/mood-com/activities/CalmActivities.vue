<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/icons/mood/calm.png" iconColor="bg-[#59ADBA]" message="You're feeling calm!" />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/icons/mood/calm-activities/drinking.png" description="Enjoy a warm cup of tea"/>
      <ActivityCard imgUrl="/icons/mood/calm-activities/mindfulness.png" description="Take a moment for mindfulness."/>
      <ActivityCard imgUrl="/icons/mood/calm-activities/reading.png" description="Read a book you love"/>
      <ActivityCard imgUrl="/icons/mood/calm-activities/walking.png" description="Go for a gentle walk."/>
    </div>
  </div>
</template>