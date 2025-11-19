<script setup>
  import '../../styles/about.css'
  defineProps({
    imgUrl: String,
    valueTitle: String,
    valueText: String
  })
</script>

<template>
  <div class="values-wrapper group transition-all duration-300 
          hover:shadow-xl hover:scale-105">
    <div class="value-icon">
      <img :src="imgUrl" class="h-8 w-8">
    </div>
    <p class="value-title">{{ valueTitle }}</p>
    <p class="value-text">{{ valueText }}</p>
  </div>
</template>