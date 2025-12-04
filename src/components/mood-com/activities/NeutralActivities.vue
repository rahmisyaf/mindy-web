<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/mindy-web/icons/mood/neutral.png" iconColor="bg-[#6DB9E7]" message="It's okay to feel neutral!" />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/mindy-web/icons/mood/neutral-activities/calling.png" description="Reach out to an old friend."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/neutral-activities/exercise.png" description="Boost your mood with a bit of exercise."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/neutral-activities/newthings.png" description="Explore a new activity."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/neutral-activities/watching.png" description="Relax with a good movie."/>
    </div>
  </div>
</template>