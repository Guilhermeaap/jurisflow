<script setup>
import * as clientes from '../clientes.js';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
</script>
<template>
    <!-- Nome -->
    <div class="p-2 flex flex-col">
        <span class="text-sm font-semibold text-gray-600">Nome:</span>
        <InputText 
            v-model="clientes.dadosBasicos.value.nome"     
            class="p-2 h-10" 
        />
    </div>

    <div class="flex gap-2 w-full">
        <!-- Tipo Pessoa -->
        <div class="p-2 flex flex-col">
            <span class="text-sm font-semibold text-gray-600">Tipo Pessoa:</span>
            <Select
                v-model="clientes.dadosBasicos.value.tipo_pessoa"
                class="h-10 w-40"
                :options="[
                    {label: 'Física', value:'f'},
                    {label:'Juridica', value:'j'}
                ]"
                option-label="label"
                option-value="value"
            ></Select>
        </div>

        <!-- CPF/CNPJ -->
        <div class="p-2 flex flex-col w-full">
            <span class="text-sm font-semibold text-gray-600">CPF/CNPJ:</span>
            <InputMask
                v-model="clientes.dadosBasicos.value.cpf_cnpj"
                :mask="clientes.dadosBasicos.value.tipo_pessoa === 'j' ? '99.999.999/9999-99' : '999.999.999-99'"
            />
        </div>

        <!-- RG/Inscrição Estadual -->
        <div class="p-2 flex flex-col w-full">
            <span class="text-sm font-semibold text-gray-600">RG/Inscrição Estadual:</span>
            <InputText 
                v-model="clientes.dadosBasicos.value.rg_inscricao_estadual"
            />
        </div>

        <!-- Data de Nascimento -->
        <div class="flex p-2 flex-col">

            <span class="text-sm font-semibold text-gray-600">Data de Nascimento:</span>
            <InputMask 
                v-model="clientes.dadosBasicos.value.data_nascimento_fundacao"
                mask="99/99/9999"
            />
         </div>
    </div>
    
    <div class="flex-1 flex gap-2 w-full">
            <!-- Estado Civil -->
    <div class="flex p-2 flex-col w-full">
        <span class="text-sm font-semibold text-gray-600">Estado Civil:</span>
        <InputText 
            v-model="clientes.dadosBasicos.value.estado_civil"
            class="p-2 h-10"
        />
    </div>

    <!-- Profissão -->
    <div class="flex p-2 flex-col w-full">
        <span class="text-sm font-semibold text-gray-600">Profissão:</span>
        <InputText 
            v-model="clientes.dadosBasicos.value.profissao"
            class="p-2 h-10"
        />
    </div>

    <!-- Nacionalidade -->
    <div class="flex p-2 flex-col w-full">
        <span class="text-sm font-semibold text-gray-600">Nacionalidade:</span>
        <InputText 
            v-model="clientes.dadosBasicos.value.nacionalidade"
            class="p-2 h-10"
        />
    </div>
    </div>


</template>
