<script setup>
  import MoodMessage from '../MoodMessage.vue';
  import ActivityCard from '../ActivityCard.vue';
</script>

<template>
  <div class="message-and-activities-wrapper">
    <MoodMessage imgUrl="/icons/mood/sad.png" iconColor="bg-[#71A8EA]" message="No... you're feeling sad..." />
    <div class="activities-wrapper">
      <ActivityCard imgUrl="/icons/mood/sad-activities/calling.png" description="Talk to someone you trust."/>
      <ActivityCard imgUrl="/icons/mood/sad-activities/handwrite.jpg" description="Write down your feelings in a journal."/>
      <ActivityCard imgUrl="/icons/mood/sad-activities/music.png" description="Listen to uplifting music."/>
      <ActivityCard imgUrl="/icons/mood/sad-activities/validate.png" description="Give yourself permission to feel what you feel."/>
    </div>
  </div>
</template>