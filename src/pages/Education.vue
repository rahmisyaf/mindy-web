<script setup>
  import { articlesData } from '../data/articles';
  import Hero from '../components/education-com/Hero.vue';
  import ArticleCard from '../components/education-com/ArticleCard.vue';
  import ReadButton from '../components/education-com/ReadButton.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="page-wrapper-edu">
    <Hero/>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
      <ArticleCard 
        v-for="item in articlesData"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :desc="item.desc"
        :time="item.time"
      >
      </ArticleCard>
    </div>
  </div>
  <Footer/>
</template>