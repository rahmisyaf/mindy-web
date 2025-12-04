<script setup>
import '../../styles/education.css'
import Card from '../Card.vue';
import ReadButton from './ReadButton.vue';

  defineProps({
    id: Number,
    title: String,
    desc: String,
    time: Number
  })
</script>

<template>
  <Card bg="bg-[#DBF0FF]" class="hover:shadow-xl">
    <p class="text-xl">{{ title }}</p>
    <p class="text-[#1B4965]">{{ desc }}</p>
    <div class="flex justify-between">
      <div class="flex gap-1 items-center">
        <img src="/icons/education/time.png" class="size-4 shrink-0 object-contain">
        <p class="text-sm text-[#5996BA]">{{ time }} mins</p>
      </div>
      <ReadButton>
        <router-link :to="`/education/${id}`"> Read ➡</router-link>
      </ReadButton>
    </div>
  </Card>
</template>

