<script setup>
import axios from 'axios';
import { ref } from 'vue';

const menus = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        link: '/dashboard',
    },
    {
        label: 'Clientes',
        icon: 'pi pi-users',
        link: '/clientes',
    },
]);

async function access(link){
    await axios.get(link)

    console.log(link)
}
</script>

<template>
    <div class="pt-3">
        <div
            v-for="menu in menus"
            class="cursor-pointer px-3 py-3 text-secondary hover:bg-secondary-hover"
        >
            <div
                @click="access(menu.link)"
            >
                <i :class="menu.icon" class="px-4" />
                <span>{{ menu.label }}</span>
            </div>
        </div>
    </div>
</template>
