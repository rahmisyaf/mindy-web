<script setup>
  import '../../styles/mood-and-activity.css';
  import Card from '../Card.vue';
</script>

<template>
  <Card bg="bg-[#73B5DD]/30" class="border-dashed border-[#5996BA]! items-center flex flex-col">
    <img src="/icons/mood/love.png" class="size-20 -rotate-15">
    <p class="text-xl text-center text-[#5996BA]">Pick a mood above to find activities that match how you feel today</p>
  </Card>
</template>