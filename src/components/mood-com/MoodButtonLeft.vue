<script setup>
  import { ref } from 'process'
import '../../styles/mood-and-activity.css'
  defineProps({
    imgUrl: String,
    bgColor: String,
    moodName: String
  })

  const emit = defineEmits(["select"])
  const isSelected = ref(false)
</script>

<template>
  <div @click="emit('select', moodName)" class="mood-button-left" :class="{'is-active' : isSelected}" >
    <div :class="[bgColor]" class="mood-icon-bg">
      <img :src="imgUrl" class="h-12 w-12">
    </div>
    <p>{{ moodName }}</p>
  </div>
</template>