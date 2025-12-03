<script setup>
  import '../styles/card.css'

  defineProps({
    bg: {type: String, default: "bg-white"},
    padding: { type: String, default: "" },
    rounded: { type: String, default: "" },
    borderThick: { type: String, default: ""},
    shadow: { type: String, default: "" },
    customClass:{ type: String, default: ""},
    hover: {type: Boolean, default: true}
  })
</script>

<template>
  <div :class="[
    'default-card',
    hover ? 'default-card-hover' : '',
    bg,
    padding,
    rounded,
    borderThick,
    shadow,
    customClass
  ]">
  <slot></slot>
  </div>
</template>