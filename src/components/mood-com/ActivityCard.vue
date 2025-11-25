<script setup>
  import '../../styles/mood-and-activity.css'
  defineProps({
    imgUrl: String,
    description: String
  })
</script>

<template>
  <div class="activity-card">
    <img :src="imgUrl" class=" size-50 object-contain">
    <p>{{ description}}</p>
  </div>
</template>