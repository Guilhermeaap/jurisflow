<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { home } from '@/routes';
</script>

<template>
    <div
        class="flex h-full w-[35vw] flex-col items-center justify-center gap-6 p-10 bg-secondary/20 ml-10 rounded-lg shadow-xl drop-shadow-2xl"
    >
        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <slot />
            </div>
        </div>
    </div>
</template>
