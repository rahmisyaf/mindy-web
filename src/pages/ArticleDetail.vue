<script setup>
  import { articlesData } from '../data/articles';
  import Card from '../components/Card.vue';
  import BackButton from '../components/education-com/BackButton.vue';

  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute();
  const articleId = Number(route.params.id);

  const currentArticle = computed(() =>{
    return articlesData.find(a => a.id === articleId);
  })
</script>

<template>
  <div class="page-wrapper-edu">
    <BackButton>
      <router-link to="/education">← Back to Articles</router-link>
    </BackButton>
    <Card bg="bg-[#DBF0FF]" v-if="currentArticle">
      <p class="text-2xl"> {{ currentArticle.title }}</p>
      <br>
      <p class="text-[#1B4965] text-justify"> {{ currentArticle.content }} </p>
    </Card>
  </div>
</template>