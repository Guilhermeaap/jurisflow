<script setup>
import AppSidebarHeader from '/resources/js/components/AppSidebarHeader.vue';
import AppSidebar from '/resources/js/components/AppSidebar.vue';
import {  ref } from 'vue';

// Variáveis
const sidebar = ref(false);
</script>

<template>
  <div class="h-screen overflow-hidden">
        <AppSidebarHeader @toggle-sidebar="sidebar = !sidebar"> </AppSidebarHeader>

    <div class="flex">
        <div
            class="  whitespace-nowrap bg-[#7A1024] transition-all duration-200"
            :class="sidebar ? '!w-64' : 'w-0 overflow-hidden'"
        >
            <AppSidebar></AppSidebar>
        </div>
        <main class="flex-1 h-full overflow-auto">
            <slot />
        </main>
    </div>
  </div>
</template>
