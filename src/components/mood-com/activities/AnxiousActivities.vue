<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/mindy-web/icons/mood/anxious.png" iconColor="bg-[#4FABD0]" message="Oh no! You're feeling anxious..." />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/mindy-web/icons/mood/anxious-activities/breathing.gif" description="Follow this inhale-exhale to calm your anxiety"/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/anxious-activities/grounding.png" description="Do the 5-4-3-2-1 Grounding Technique."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/anxious-activities/exercise.png" description="Release the tension with some light exercise."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/anxious-activities/nosocmed.png" description="Take a short break from social media."/>
    </div>
  </div>
</template>