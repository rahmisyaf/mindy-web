<script setup>
  import { ref } from 'vue';
  import '../../styles/journal.css';
  import AddJournalButton from './AddJournalButton.vue';
  import WritingCard from './WritingCard.vue';

  const showWritingCard = ref(false);

  function AddJournal() {
    showWritingCard.value = true
  }

  const emit = defineEmits(['add-new-entry']);

  function onDataReceived (dataFromWritingCard){
    emit('add-new-entry', dataFromWritingCard);

    // showWritingCard.value = false;
  }
</script>

<template>
  <div class="header-container">
    <div class="flex gap-3">
      <div class="icon-wrapper">
        <img src="/icons/journal/book.png" class="book-icon">
      </div>
      <div>
        <p class="text-xl">Daily Journal</p>
        <p class="text-[#1B4965] text-xl">Express your thoughts and emotions</p>
      </div>
    </div>
    <AddJournalButton @click="AddJournal()"/>
  </div>
  <WritingCard v-if="showWritingCard" @close="showWritingCard = false" @submit-data="onDataReceived"/>
</template>