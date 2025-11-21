<script setup>
  import MoodButtonLeft from '../components/mood-com/MoodButtonLeft.vue';
  import MoodButtonRight from '../components/mood-com/MoodButtonRight.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="page-wrapper">
    <h1>ini mood-activity</h1>
    <div class="moods-wrapper">
      <MoodButtonLeft bgColor="bg-[#5996BA]" imgUrl="/icons/mood/happy.png" moodName="Happy"/>
      <MoodButtonRight bgColor="bg-[#59ADBA]" imgUrl="/icons/mood/calm.png" moodName="Calm"/>
      <MoodButtonLeft bgColor="bg-[#6DB9E7]" imgUrl="/icons/mood/neutral.png" moodName="Neutral"/>
      <MoodButtonRight bgColor="bg-[#4FABD0]" imgUrl="/icons/mood/anxious.png" moodName="Anxious"/>
      <MoodButtonLeft bgColor="bg-[#71A8EA]" imgUrl="/icons/mood/sad.png" moodName="Sad"/>
      <MoodButtonRight bgColor="bg-[#6DC0D7]" imgUrl="/icons/mood/energetic.png" moodName="Energetic"/>
    </div>
  </div>
  <Footer/>
</template>