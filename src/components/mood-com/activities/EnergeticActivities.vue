<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/mindy-web/icons/mood/energetic.png" iconColor="bg-[#6DC0D7]" message="WOW! you're feeling energetic!" />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/mindy-web/icons/mood/energetic-activities/cleaning.png" description="Use your energy to tidy up your space."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/energetic-activities/exercise.png" description="Move your body with some exercise."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/energetic-activities/newthings.png" description="Try something new today."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/energetic-activities/planning.png" description="Plan a small goal to focus your energy."/>
    </div>
  </div>
</template>