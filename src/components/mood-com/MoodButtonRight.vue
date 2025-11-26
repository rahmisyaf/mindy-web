<script setup>
  import '../../styles/mood-and-activity.css'
  defineProps({
    imgUrl: String,
    bgColor: String,
    moodName: String,
    isActive: Boolean
  })

  const emit = defineEmits(["select"])
</script>

<template>
  <div @click="emit('select', moodName)" class="mood-button-right" :class="{'is-active' : isActive}">
    <div :class="[bgColor]" class="mood-icon-bg" >
      <img :src="imgUrl" class="h-12 w-12">
    </div>
    <p>{{ moodName }}</p>
  </div>
</template>