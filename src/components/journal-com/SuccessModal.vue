<script setup>
  import '../../styles/journal.css';

  defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
    
    <div class="bg-white rounded-3xl p-6! w-80 flex flex-col items-center gap-6 shadow-2xl">
      
      <img src="/icons/journal/success.png" class="size-20">

      <p class="text-[#1B4965] text-xl text-center">
        Your journal has been added!
      </p>

      <button @click="$emit('close')" class="save-button">OK</button>
    </div>
  </div>
</template>