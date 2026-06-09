<script setup>
import AppSidebarHeader from "/resources/js/components/AppSidebarHeader.vue"
import AppSidebar from '/resources/js/components/AppSidebar.vue'
import {ref} from 'vue'

// Variáveis 
const sidebar = ref(false)
</script>

<template>
    <AppSidebarHeader
    @toggle-sidebar = "sidebar = !sidebar"
    >
        
    </AppSidebarHeader>
    <div class="h-10 bg-white">sss</div>
    
      <div
        class="bg-[#7A1024] h-[95vh] transition-all duration-200"
        :class="sidebar ? 'w-64':'w-0 overflow-hidden'">
            <AppSidebar></AppSidebar>
    </div>
</template>
