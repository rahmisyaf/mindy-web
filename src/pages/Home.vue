<script setup>
  import '../styles/home.css'
  import Hero from '../components/home-com/Hero.vue';
  import ReminderCard from '../components/home-com/ReminderCard.vue';  
</script>

<template>
  <Hero/>
  <div class="reminder-card-wrapper">
    <div class="reminder-card">
      <div class="clock-daily">
        <img src="/icons/home/clock.png" class="w-7 h-7 pt-10">
        <h1 class="daily-reminder-text">Daily Reminder</h1>
      </div>
      <div class="flex flex-wrap justify-center w-fit gap-27">
        <ReminderCard
        imgUrl="/icons/home/sun.png"
        time="Morning"
        description="Start your day with kind thoughts"
        />
        <ReminderCard
        imgUrl="/icons/home/cup.png"
        time="Afternoon"
        description="Pause for a moment and take a deep breath"
        />
        <ReminderCard
        imgUrl="/icons/home/night.png"
        time="Night"
        description="Wind down and write about your day in your journal"
        />
      </div>
    </div>
  </div>
  <div class="tips-wrapper">
    <div class="tips">
      <h1 class="tip-text">Enjoy your day with these tips!</h1>
    </div>
  </div>
</template>