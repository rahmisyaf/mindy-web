  <script setup>
    import '../../styles/journal.css';
    import Card from '../Card.vue';

    defineProps({
      id: Number,
      title: String,
      content: String,
      mood: String,
      date: String
    });

    defineEmits(['delete-journal'])
  </script>

  <template>
    <Card class="flex flex-col gap-3">
      <div class="flex justify-between items-start">
        <div class="flex gap-3 items-start w-full pr-4">
          <p class="text-[#5996BA] text-xl leading-tight">{{ title }}</p>
          <div class="bg-[#73B5DD] text-center text-[#1B4965] rounded-full px-4 py-1 w-fit h-fit shrink-0 flex justify-center items-center" style="padding: 4px 12px;">
            <span class=" leading-none">{{ mood }}</span>
          </div>
        </div>
        <div class="shrink-0">
          <img src="/icons/journal/trash.png" 
          class="size-6 cursor-pointer hover:opacity-75 transition"
          @click="$emit('delete-journal', id)">
        </div>
      </div>
      <div class="flex gap-2">
          <img src="/icons/journal/calendar.png" class="size-5">
          <p class="text-[#1B4965] text-sm">{{ date }}</p>
      </div>
      <p class="text-[#1B4965] text-xl leading-relaxed whitespace-pre-wrap">{{ content }}</p>
    </Card>
  </template>