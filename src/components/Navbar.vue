<script setup lang="ts">
  import '../styles/navbar.css'
  import {ref, computed} from 'vue'
  import { useRoute } from 'vue-router'

  const isOpen = ref(false)
  
  interface MenuItem{
    name: string
    path: string
  }

  const route = useRoute()

  // const activeItem = ref('Home')
  const menuItems: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Mood & Activity', path: '/mood-activity' },
    { name: 'Journal', path: '/journal' },
    { name: 'Education', path: '/education' },
    { name: 'About', path: '/about' },
  ]

  const activeItem = computed(() => {
    const foundItem = menuItems.find(item => item.path === route.path)

    return foundItem ? foundItem.name : null
  })

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const closeMenu = () =>{
    isOpen.value = false
  }

  // const setActive = (item:string) => {
  //   activeItem.value = item
  //   closeMenu()
  // }
</script>

<template>
  <nav class="navbar-container">
    <!--Desktop-->
    <div class="desktop-navbar-container">
      <div class="flex items-center gap-2">
        <img src="../assets/images/mindy-logo.png" class="size-30">
      </div>
      
      <div class="flex gap-6">
        <router-link 
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          :class="['navbar-active', 
          activeItem === item.name ? 
          'bg-[#1A3A5F] text-white!' : 'text-gray-450 hover:bg-[#C5E4FA]']"
      > {{ item.name }}</router-link>
    </div>
  </div>

    <!--Mobile-->
    <div class="navbar-mobile">
      <button @click="toggleMenu" class="focus:outline-none cursor-pointer">
        <img v-if="!isOpen" 
        src="/icons/hamburger.png" 
        class="hamburger"
        />
      </button>

      <!--Logo mobile-->
      <div class="flex-1 flex justify-center">
        <div class="flex items-center">
          <img src="../assets/images/mindy-logo.png" class="size-30">
        </div>
      </div>
    </div>

    <!--mobile sidebar-->
    <div class="mobile-sidebar" 
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
      <ul class="mobile-menu">
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="w-full"
        > 

          <router-link
            :to="item.path"
            @click="() => closeMenu()"
            :class="['mobile-navbar-container',
            activeItem === item.name ? 'bg-[#1A3A5F] text-white!' : 'text-gray-450 hover:bg-[#C5E4FA]'
          ]">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <!--overlay-->
    <div
    v-if="isOpen"
    class="fixed inset-0 bg-black-500 z-40 sm:hidden" 
    @click="closeMenu">
    </div>

  </nav>
</template>
