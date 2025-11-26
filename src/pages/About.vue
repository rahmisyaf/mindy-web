<script setup>
  import Hero from '../components/about- com/Hero.vue';
  import Card from '../components/Card.vue';
  import ValueCard from '../components/about- com/ValueCard.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="about-wrapper">
    <Hero/>
    <Card bg="bg-[#DBF0FF]">
      <p class="text-2xl">Why Mindy Exists?</p>
      <div class="why-mindy-exists">
        <p>In the midst of modern life's busyness, we often forget to care for our emotional well-being. Stress, anxiety, and complex feelings can build up without us realizing it.</p>
        <br>
        <p>Mindy is here as your virtual companion — helping you become more aware of your emotions. Through journaling, you can express your thoughts and feelings freely, without fear of being judged.Through mood tracking, you can recognize your emotional patterns and receive activity recommendations to help you feel better.</p>
        <br>
        <p>We believe that small daily steps can lead to meaningful, long-term improvements in mental health. Mindy is your safe space to begin that journey.</p>
      </div>
    </Card>
    <br>
    <h1 class="our-values">Our Values</h1>
    <div class="main-values-wrapper">
      <ValueCard imgUrl="../icons/about/love.png" valueTitle="Care" valueText="We believe mental health is just as important as physical health"/>
      <ValueCard imgUrl="../icons/about/shield.png" valueTitle="Privacy" valueText="Your journal entries and mood data are securely and privately stored"/>
      <ValueCard imgUrl="../icons/about/goal.png" valueTitle="Purpose" valueText="We aim to help you understand and manage your emotions more mindfully"/>
      <ValueCard imgUrl="../icons/about/people.png" valueTitle="Support" valueText="We provide tools to accompany you on your mental wellness journey"/>
    </div>
    <br>
      <Card bg="bg-[#FBE6E6]">
        <p class="text-center text-xl">🩵 Important Note</p>
        <p class="text-center">MindCare is a self-care companion, not a substitute for professional counseling or therapy. If you’re struggling with serious mental health concerns, please reach out to a qualified mental health professional.</p>
      </Card>
  </div>
  <Footer/>
</template>