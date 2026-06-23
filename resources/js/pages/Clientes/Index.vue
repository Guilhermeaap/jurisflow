<script setup>
import * as clientes from './clientes.js';
import { Head } from '@inertiajs/vue3';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Novo from './partials/novo.vue';

</script>

<template>
    <Head title="Clientes" />

    <div v-if="clientes.currentView.value == 'lista'" class="min-h-screen p-6  transition-all duration-300">
        <!-- Header -->
        <div class="flex gap-3">
            <div
                class="w-1 bg-gradient-to-b from-secondary-hover via-primary to-primary"
            ></div>
            <h1 class="text-3xl font-semibold">Clientes</h1>
        </div>
        <p class="mt-4">Sua lista de clientes. escreva o texto aqui</p>

        <!-- Novo -->
        <div class="flex w-full justify-end">
            <Button
                label="Novo Cliente"
                icon="pi pi-plus"
                severity="info"
                outlined
                @click="clientes.currentView.value = 'novo'"
            />
        </div>

        <!-- Tabela -->
        <DataTable class="mt-4"> </DataTable>
        {{ clientes.openCreateClients.value }}
    </div>

    <Novo v-if="clientes.currentView.value == 'novo'" />

</template>
