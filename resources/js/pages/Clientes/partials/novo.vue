<script setup>
import Button from 'primevue/button';
import * as clientes from '../clientes.js';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ToggleSwitch from 'primevue/toggleswitch';
</script>
<template>

    <div class="min-h-screen p-6 text-secondary transition-all duration-300">
        <!-- Header -->
        <div class="flex gap-3 w-full">
            <div
                class="w-1 h-8 bg-gradient-to-b from-secondary-hover via-primary to-primary"
            ></div>
           <div class="">
             <h1 class="text-3xl font-semibold whitespace-nowrap">Cadastro Cliente</h1>
        
        <p class="text-sm text-gray-600">cadastro de clientes </p>
           </div>

                        <div class="w-full justify-end flex p-3 gap-3 items-end">
                    <Button
                        label="Voltar"
                        severity="secondary"
                        icon="pi pi-arrow-left"
                        class="min-w-32"
                        @click="clientes.currentView.value = 'lista'"
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

        <div class="w-full  text-white rounded-lg overflow-hidden p-3 h-full flex flex-col justify-between"  
        >                
            <div class="">
                

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
                        <div class="flex gap-2 items-center hover:text-primary cursor-pointer"
                            :class="clientes.aba.value == menu.value ? 'text-primary font-semibold' : ''"
                        >
                            <i :class="menu.icon"/>
                            <span @click="setAba(menu.value)"> 
                                {{ menu.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
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

    <!-- Contato -->
    <div class="w-full space-y-4 mt-2">
        <div class="flex w-full gap-4">
            <!-- Telefone 1 -->
            <div class="flex flex-col p2 w-full">
                <span class="text-sm font-semibold text-gray-600">Telefone 1:</span>
                <InputMask 
                    mask="(99) 9999-9999"
                />
            </div>

            <!-- Telefone 2 -->
            <div class="flex flex-col p2 w-full">
                <span class="text-sm font-semibold text-gray-600">Telefone 2:</span>
                <InputMask 
                    mask="(99) 9999-9999"
                />
            </div>
        </div>

        <div class="flex w-full gap-4">
            <!-- Whatsapp -->
            <div class="flex flex-col p2 w-full">
                <span class="text-sm font-semibold text-gray-600">Whatsapp:</span>
                <InputMask 
                    mask="(99) 9999-9999"
                />
            </div>

            <!-- Email -->
            <div class="flex flex-col p2 w-full">
                <span class="text-sm font-semibold text-gray-600">Email:</span>
                <InputText
                    type="email"
                />
            </div>
        </div>
    </div>

    </div>


</template>
