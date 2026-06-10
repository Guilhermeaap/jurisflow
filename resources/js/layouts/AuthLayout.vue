<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import AuthLayout from '@/layouts/auth/AuthSimpleLayout.vue';
</script>

<template>
    <div class="flex w-full items-center">

            <AuthLayout>
                <slot />
            </AuthLayout>

        <div class="flex h-screen w-full justify-center">
            <AppLogoIcon />
        </div>
    </div>
</template>
