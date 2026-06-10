<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import AuthLayout from '@/layouts/auth/AuthSimpleLayout.vue';
</script>

<template>
    <div class="flex w-full items-center h-screen">

            <AuthLayout>
                <slot />
            </AuthLayout>

        <div class="flex h-[50vh] w-full justify-center">
            <AppLogoIcon />
        </div>
    </div>
</template>
