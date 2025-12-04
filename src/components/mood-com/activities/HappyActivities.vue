<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/mindy-web/icons/mood/happy.png" iconColor="bg-[#5996BA]" message="You're feeling happy!" />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/mindy-web/icons/mood/happy-activities/sharejoy.jpeg" description="Share your joy with loved ones."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/happy-activities/handwrite.jpg" description="Capture your happy moments in your journal."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/happy-activities/music.png" description="Enjoy your favorite music."/>
      <ActivityCard imgUrl="/mindy-web/icons/mood/happy-activities/reward.png" description="Treat yourself with a small reward."/>
    </div>
  </div>
</template>