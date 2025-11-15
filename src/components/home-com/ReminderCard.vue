<script setup>
  import '../../styles/home.css'
  defineProps( {
    imgUrl: String,
    time: String,
    description: String
  })
</script>

<template>
  <div class="flex flex-col items-center w-50">
    <div class="bg-[#EFEFEF] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
      <img :src="imgUrl" class="h-8 w-8">
    </div>
    <div>
      <h1 class="time-text">{{ time }}</h1>
      <p class="desc-text">{{ description }}</p>
    </div>
  </div>
</template>