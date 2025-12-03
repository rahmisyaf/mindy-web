<script setup>
  import '../../../styles/journal.css';
  defineProps({
    mood: String,
    isActive: Boolean
  })
</script>

<template>
  <div class="button-mood" :class="{'is-selected' : isActive}">{{ mood }}</div>
</template>