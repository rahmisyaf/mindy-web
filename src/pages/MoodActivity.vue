<script setup>
  import { ref } from 'vue'
  import Hero from '../components/mood-com/Hero.vue';
  import MoodButtonLeft from '../components/mood-com/MoodButtonLeft.vue';
  import MoodButtonRight from '../components/mood-com/MoodButtonRight.vue';
  import ActivityRecommendation from '../components/mood-com/ActivityRecommendation.vue';
  import Footer from '../components/Footer.vue';

  const selectedMood = ref(null)
</script>

<template>
  <div class="page-wrapper">
    <Hero/>
    <div class="moods-wrapper">
      <MoodButtonLeft bgColor="bg-[#5996BA]" imgUrl="/icons/mood/happy.png" moodName="Happy" @click="selectedMood = 'Happy'"/>
      <MoodButtonRight bgColor="bg-[#59ADBA]" imgUrl="/icons/mood/calm.png" moodName="Calm" @click="selectedMood = 'Calm'"/>
      <MoodButtonLeft bgColor="bg-[#6DB9E7]" imgUrl="/icons/mood/neutral.png" moodName="Neutral" @click="selectedMood = 'Neutral'"/>
      <MoodButtonRight bgColor="bg-[#4FABD0]" imgUrl="/icons/mood/anxious.png" moodName="Anxious" @click="selectedMood = 'Anxious'"/>
      <MoodButtonLeft bgColor="bg-[#71A8EA]" imgUrl="/icons/mood/sad.png" moodName="Sad" @click="selectedMood = 'Sad'"/>
      <MoodButtonRight bgColor="bg-[#6DC0D7]" imgUrl="/icons/mood/energetic.png" moodName="Energetic" @click="selectedMood = 'Energetic'"/>
    </div>
    <ActivityRecommendation :moodName="selectedMood"/>
  </div>
  <Footer/>
</template>