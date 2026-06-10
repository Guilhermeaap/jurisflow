<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { home } from '@/routes';
</script>

<template>
    <div
        class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
    >
        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-4">
                    <Link
                        :href="home()"
                        class="flex flex-col items-center h-100 w-100  font-medium "
                    >
                        <div
                            class=" flex items-center justify-center rounded-md"
                        >
                            <AppLogoIcon />
                        </div>
                    </Link>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>
