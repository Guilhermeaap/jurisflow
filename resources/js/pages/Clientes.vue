<script setup>
import { Head } from '@inertiajs/vue3';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

// Variables
const openCreateClients = ref(false);
const menus = ref([
    { label: 'Dados Básicos', value: 'dados' },
    { label: 'Contato', value: 'contato' },
    { label: 'Endereço', value: 'endereco' },
    { label: 'Informações Jurídicas', value: 'informacao' },
    { label: 'Processos', value: 'processos' },
]);

function setAba(aba){
    console.log(aba)
}
</script>

<template>
    <Head title="Clientes" />

    <div class="min-h-screen p-6 text-secondary transition-all duration-300">
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
                @click="openCreateClients = true"
            />
        </div>

        <!-- Tabela -->
        <DataTable class="mt-4"> </DataTable>
        {{ openCreateClients }}
    </div>
    <Dialog v-model:visible="openCreateClients" modal :closable="false">
        <template #container>
            <div class="w-full bg-white text-black rounded-lg overflow-hidden">
                <!-- header -->
                <div
                    class="flex w-[90vw] items-center justify-between  bg-white p-3 px-5 "
                >
                    <span class="text-[1.5rem]">Cadastrar Clientes</span>
                    <i class="pi pi-times cursor-pointer hover:text-red-700" @click="openCreateClients = false" />
                </div>

                <!-- Abas -->
                <div class="flex justify-around">
                    <div v-for="menu in menus" class="">
                        <span class="flex hover:text-primary cursor-pointer" @click="setAba(menu.value)">{{ menu.label }}</span>
                    </div>
                </div>
                
                <!-- Dados Pessoais -->
                 <div class="">

                 </div>
            </div>
        </template>
    </Dialog>
</template>
