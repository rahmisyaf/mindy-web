<script setup>
  import '../../../styles/journal.css';
  defineProps({
    name: String,
    placeholder: String,
    height: String,
    modelValue: String
  })

  defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <textarea 
      class="input-field" 
      :class="height" type="text" 
      :name="name" 
      :placeholder=placeholder 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>