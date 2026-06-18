<script setup>
import InputMask from 'primevue/inputmask';

</script>
<template>

    <!-- Telefone 1 -->
    <div class="flex flex-col p2 w-full">
        <span class="text-sm font-semibold text-gray-600">Telefone 1:</span>
        <InputMask 
            mask="(99) 9999-9999"
        />
    </div>
</template>