<script setup>
  import '../../styles/mood-and-activity.css'

  defineProps({
    imgUrl: String,
    iconColor: String,
    message: String
  })
</script>

<template>
  <div class="mood-message">
    <div class="icon-and-text">
      <div :class="[iconColor]" class="mood-icon-bg">
        <img :src="imgUrl" class="h-12 w-12">
      </div>
      <p class="text-2xl text-[#1B4965]">{{ message }}</p>
    </div>
    <p class="text-xl">Here are a few activities that might help you feel better:</p>
  </div>
</template>