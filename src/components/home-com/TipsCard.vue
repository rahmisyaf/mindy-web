<script setup>
  import '../../style.css'
  defineProps({
    imgUrl: String,
    tipText: String
  })
</script>

<template>
  <div class="tips-wrapper group transition-all duration-300 
          hover:shadow-xl hover:scale-105">
    <img :src="imgUrl" class="tip-icon">
    <p class="tip-text">{{ tipText }}</p>
  </div>
</template>