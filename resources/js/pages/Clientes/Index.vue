<script setup>
import * as clientes from './clientes.js';
import { Head } from '@inertiajs/vue3';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import DadosBasicos from './partials/dadosBasicos.vue';
import ToggleSwitch from 'primevue/toggleswitch';
import Contato from './partials/contato.vue';

function setAba(aba){
    clientes.aba.value = aba
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
                @click="clientes.openCreateClients.value = true"
            />
        </div>

        <!-- Tabela -->
        <DataTable class="mt-4"> </DataTable>
        {{ clientes.openCreateClients.value }}
    </div>
    <Dialog v-model:visible="clientes.openCreateClients.value" modal :closable="false" class="w-[60vw] h-[60vh] p-0">
        <template #container>
            <div class="w-full bg-white text-black rounded-lg overflow-hidden p-3 h-full flex flex-col justify-between"  
            >                
                <div class="">
                    <!-- Header -->
                    <div
                        class="flex w-full px-2  justify-between"
                    >
                        <span class="text-[1.5rem]">Cadastrar Clientes</span>
                    </div>

                    <!-- Status -->
                    <div 
                        class=" flex items-center p-3 justify-end gap-2 rounded-xl "
                    >
                        <span :class="clientes.ativo.value ? 'text-green-600' : 'text-gray-600'">{{ clientes.ativo.value ? 'Ativo' : 'Inativo' }}</span>
                        <ToggleSwitch
                            v-model="clientes.ativo.value"
                        />
                    </div>

                    <!-- Abas -->
                    <div class="flex justify-around border-b-2 pb-1 ">
                        <div v-for="menu in clientes.menus.value" class="">
                            <span 
                                :class="clientes.aba.value == menu.value ? 'text-primary font-semibold' : ''"
                                class="flex hover:text-primary cursor-pointer" 
                                @click="setAba(menu.value)">{{ menu.label }}
                        </span>
                        </div>
                </div>
                <DadosBasicos v-if="clientes.aba.value == 'dados'"/>
                <Contato v-if="clientes.aba.value == 'contato'"/>
                </div>
                <div class="w-full justify-end flex p-3 gap-3 items-end">
                    <Button
                        label="Cancelar"
                        severity="secondary"
                        icon="pi pi-times"
                        class="min-w-32"
                        @click="clientes.openCreateClients.value = false"
                    />
                    <Button
                        label="Salvar"
                        severity="success"
                        icon="pi pi-check"
                        class="min-w-32"
                        @click="clientes.save()"
                    />
                </div>
            </div>
        </template>
    </Dialog>
</template>
