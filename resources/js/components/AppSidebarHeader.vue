<script setup>
// Emits
const emit = defineEmits(['toggle-sidebar']);
</script>

<template>
    <div class="flex h-[5vh] w-full items-center bg-color-bakcground p-2">
        <div class="flex items-center">
            <i
                class="pi pi-bars cursor-pointer text-[#D4AF37]"
                @click="emit('toggle-sidebar')"
            />

            <a class="ml-4 flex items-center" href="/">
                <img
                    src="/logo.png"
                    alt="Logo"
                    class="mt-2 h-14 object-contain"
                />
                <span class="font-bold text-[#D4AF37]">J U R I S F L O W</span>
            </a>
        </div>
        <div class="flex items-center justify-end">
            <i class=""></i>
        </div>
    </div>
</template>
