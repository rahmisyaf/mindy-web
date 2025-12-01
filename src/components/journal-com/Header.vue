<script setup>
  import '../../styles/journal.css';
  import AddJournalButton from './AddJournalButton.vue';
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
    <AddJournalButton/>
  </div>
</template>