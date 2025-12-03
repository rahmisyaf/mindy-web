<script setup>
  import '../../../styles/journal.css';
  defineProps({
    name: String,
    placeholder: String,
    height: String
  })
</script>

<template>
  <div>
    <textarea class="input-field" :class="height" type="text" :name="name" :placeholder=placeholder></textarea>
  </div>
</template>