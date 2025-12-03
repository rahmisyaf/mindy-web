<script setup>
  import { ref, nextTick } from 'vue'
  import Hero from '../components/mood-com/Hero.vue';
  import MoodButtonLeft from '../components/mood-com/MoodButtonLeft.vue';
  import MoodButtonRight from '../components/mood-com/MoodButtonRight.vue';
  import ActivityRecommendation from '../components/mood-com/ActivityRecommendation.vue';
  import ChooseMood from '../components/mood-com/ChooseMood.vue';
  import Footer from '../components/Footer.vue';

  const selectedMood = ref(null)

  const recommendationRef = ref(null)

  const handleMoodSelection = async (mood) => {
    selectedMood.value = mood

    await nextTick()

    if (recommendationRef.value){
      recommendationRef.value.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
</script>

<template>
  <div class="page-wrapper-mood">
    <Hero/>
    <div class="moods-wrapper">
      <MoodButtonLeft bgColor="bg-[#5996BA]" imgUrl="/icons/mood/happy.png" moodName="Happy" @click="handleMoodSelection('Happy')" :isActive="selectedMood === 'Happy'"/>
      <MoodButtonRight bgColor="bg-[#59ADBA]" imgUrl="/icons/mood/calm.png" moodName="Calm" @click="handleMoodSelection('Calm')" :isActive="selectedMood === 'Calm'"/>
      <MoodButtonLeft bgColor="bg-[#6DB9E7]" imgUrl="/icons/mood/neutral.png" moodName="Neutral" @click="handleMoodSelection('Neutral')" :isActive="selectedMood === 'Neutral'"/>
      <MoodButtonRight bgColor="bg-[#4FABD0]" imgUrl="/icons/mood/anxious.png" moodName="Anxious" @click="handleMoodSelection('Anxious')" :isActive="selectedMood === 'Anxious'"/>
      <MoodButtonLeft bgColor="bg-[#71A8EA]" imgUrl="/icons/mood/sad.png" moodName="Sad" @click="handleMoodSelection('Sad')":isActive="selectedMood === 'Sad'"/>
      <MoodButtonRight bgColor="bg-[#6DC0D7]" imgUrl="/icons/mood/energetic.png" moodName="Energetic" @click="handleMoodSelection('Energetic')" :isActive="selectedMood === 'Energetic'"/>
    </div>
    <div ref="recommendationRef">
      <ActivityRecommendation :moodName="selectedMood"/>
    </div>
    <ChooseMood/>
  </div>
  <Footer/>
</template>