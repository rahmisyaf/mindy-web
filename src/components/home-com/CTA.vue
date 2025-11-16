<script setup>
  import '../../styles/home.css'
  import '../../styles/buttons.css'
  defineProps({
    bgColor: String,
    imgUrl: String,
    title: String,
    desc: String,
    path: String
  })
</script>

<template>
  <div class="cta-card" :style="{ backgroundColor: bgColor}">
    <div class="">
      <img :src="imgUrl" class="h-10 w-10 -rotate-15">
    </div>
    <div>
      <h1 class="">{{ title }}</h1>
      <p class="text-[#1B4965]">{{ desc }}</p>
    </div>
      <button @click="$router.push(path)" class="cta-button">Get Started ➝</button>
  </div>
</template>