<script setup>
import {ref} from 'vue';
  import '../../styles/journal.css';
  import Card from '../Card.vue';
  import InputField from './small-com/InputField.vue';
  import ButtonMood from './small-com/ButtonMood.vue';
  import CancelButton from './small-com/CancelButton.vue';
  import SaveButton from './small-com/SaveButton.vue';

  const moods = ["happy", "calm", "neutral", "anxious", "sad", "energetic"];
  
  const emit = defineEmits(['submit-data','close']);
  
  const currentMood = ref('');
  const title = ref('');
  const content = ref('');

  function handleSave(){
    // if(!title.value || !content.value) return;

    const newData = {
      id: Date.now(),
      title: title.value,
      content: content.value,
      mood: currentMood.value,
      date: new Date().toLocaleDateString()
    };

    emit('submit-data', newData);

    emit('close');
  }

  function handleClose(){
    emit('close');
  }
</script>

<template>
  <Card class="flex flex-col gap-5">
    <div class="flex gap-5">
      <img src="/icons/journal/write.png" class="size-6">
      <p class="text-[#5FA8D3] text-xl">Write A Journal</p>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-[#5FA8D3] text-xl">Title</p>
      <InputField height="h-8" name="title" placeholder="Give the title of your journal..." />
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-[#5FA8D3] text-xl">How are you feeling today?</p>
      <div class="moods-button-wrapper">
        <ButtonMood v-for="item in moods" :key="item" :mood="item" :isActive="currentMood === item" @click="currentMood = item"/>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-[#5FA8D3] text-xl">Write your journal</p>
      <InputField height="h-30" name="title" placeholder="Share everything that comes to your mind..." />
    </div>
    <div class="flex justify-center gap-10">
      <CancelButton @click="handleClose"/>
      <SaveButton @click="handleSave"/>
    </div>
  </Card>
</template>