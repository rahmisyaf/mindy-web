<script setup>
  import { ref } from 'vue';
  import Header from '../components/journal-com/Header.vue';
  import JournalCard from '../components/journal-com/JournalCard.vue';
  import Footer from '../components/Footer.vue';

  const journalList = ref([
    {
      id: 1,
      title: 'What a productive day',
      content: 'I managed to finish many tasks today. I’m feeling grateful and proud of myself.',
      mood: 'Happy',
      date: 'Thursday, October 16th 2025'
    },
    {
      id: 2,
      title: 'Feeling a bit low',
      content: 'It was raining all day and I felt a bit lonely...',
      mood: 'Sad',
      date: 'Wednesday, October 15th 2025'
    },
    {
      id: 3,
      title: 'Tried meditation',
      content: 'Finally tried the breathing exercise from Mindy app. It works!',
      mood: 'Calm',
      date: 'Tuesday, October 14th 2025'
    }
  ]);

  function saveToDatabase(newJournalData){
    journalList.value.unshift(newJournalData);

    console.log("ADD data success", journalList.value);
  }
</script>

<template>
  <div class="page-wrapper">
    <Header @add-new-entry="saveToDatabase"/>
    <JournalCard
      v-for="item in journalList"
      :key="item.id"
      :title="item.title"
      :mood="item.mood"
      :content="item.content"
      :date="item.date"
    />
  </div>
  <Footer/>
</template>