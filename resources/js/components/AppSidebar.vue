<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';

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

function navigate(link) {
    router.visit(link);
}
</script>

<template>
    <div class="pt-3">
        <div
            v-for="menu in menus"
            class="cursor-pointer px-3 py-3 text-secondary hover:bg-secondary-hover"
        >
            <div
                @click="navigate(menu.link)"
            >
                <i :class="menu.icon" class="px-4" />
                <span>{{ menu.label }}</span>
            </div>
        </div>
    </div>
</template>
