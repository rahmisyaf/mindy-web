<script setup >
  import '../styles/about-me.css'
  import Footer from '../components/Footer.vue';
  import Card from '../components/Card.vue';
  import { skill } from '../data/skill.ts';

</script>

<template>
  <div class="about-me-wrapper">
    <div class="flex gap-6"> 
      <div class="flex flex-col text-center md:text-justify gap-3 md:max-w-3xl">
        <h5 class="name">Rahmi Syafitri</h5>
        <h1 class="nim">11231085 - Informatika - ITK</h1>
        <p>Hi! I’m Rahmi, an Informatics student at the Kalimantan Institute of Technology who enjoys exploring how software and data systems work in real-world contexts. I’m currently developing my skills in web development and database systems, and I’ve been learning how to build simple web applications using Vue and React. Through my coursework, I’ve also gained foundational experience in SQL, including writing queries, working with stored procedures, transactions, and triggers. I’m enthusiastic about growing as a developer, learning from professionals, and contributing to projects that apply technology to solve real problems</p>
      </div>
      <div>
        <img src="../mindy-web/icons/about-me/cat.png" class="hidden md:block size-10">
      </div>
    </div>
    <div class="skill-wrapper">
      <Card 
        v-for="item in skill"
        :skilltitle="item.skilltite"
        :desc="item.desc"
      > <p class="text-center">{{ item.skilltitle }}</p>
      <p class="text-center">{{ item.desc }}</p>
      </Card>
    </div>
  </div>
  <Footer/>
</template>