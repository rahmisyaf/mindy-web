<script setup>
  import '../styles/home.css'
  import Hero from '../components/home-com/Hero.vue';
  import ReminderCard from '../components/home-com/ReminderCard.vue'; 
  import TipsCard from '../components/home-com/TipsCard.vue'; 
  import CTA from '../components/home-com/CTA.vue';
  import Footer from '../components/Footer.vue';
</script>

<template>
  <Hero/>
  <!-- reminder -->
  <div class="reminder-card-wrapper">
    <div class="reminder-card">
      <div class="clock-daily">
        <img src="/icons/home/clock.png" class="w-7 h-7 pt-10">
        <h1 class="daily-reminder-text">Daily Reminder</h1>
      </div>
      <div class="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-27">
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
  <!-- tips -->
  <div class="tips-card">
    <!-- <div class="tips"> -->
      <div>
      <h1 class="tip-title">Enjoy your day with these tips!</h1>
      </div>
      <div class="tips">
        <TipsCard
        imgUrl="/icons/home/breathe.png"
        tipText="Spend a few minutes today just breathing deeply."
        />
        <TipsCard
        imgUrl="/icons/home/walk.png"
        tipText="Step outside & let the fresh air clear your thoughts."
        />
        <TipsCard
        imgUrl="/icons/home/love.png"
        tipText="Write down 3 things you're grateful for."
        />
        <TipsCard
        imgUrl="/icons/home/chat.png"
        tipText="Reach out to a friend or loved one."
        />
      </div>
    <!-- </div> -->
  </div>
  <!-- CTA -->
  <div class="cta-wrapper">
    <div>
      <h1 class="tip-title">Try Out Mindy's features!</h1>
    </div>
    <div class="cta-layout">
      <CTA
      bgColor="#F3F0BE"
      imgUrl="/icons/home/book.png"
      title="Daily Journal"
      desc="Express your thoughts and emotions in your private journal."
      path="/journal">
      </CTA>
      <CTA
      bgColor="#FBE6E6"
      imgUrl="/icons/home/love2.png"
      title="Mood Tracking"
      desc="Get activity recommendation based on your current mood."
      path="/mood-activity">
      </CTA>
    </div>
  </div>
  <Footer/>
</template>