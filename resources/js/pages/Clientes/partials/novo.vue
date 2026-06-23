<script setup>
import Button from 'primevue/button';
import * as clientes from '../clientes.js';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ToggleSwitch from 'primevue/toggleswitch';
</script>
<template>
    <div class="min-h-screen p-6 text-black transition-all duration-300">
        <!-- Header -->
        <div class="flex w-full items-center justify-between gap-3">
            <div
                class="flex h-10 w-1 items-start bg-gradient-to-b from-gray-600 via-primary to-primary"
            ></div>
            <div class="flex flex-col">
                <div class="text-3xl font-semibold whitespace-nowrap">
                    Cadastro Cliente
                </div>
            </div>

            <div class="flex w-full items-start justify-end gap-3">
                <Button
                    label="Cancelar"
                    severity="secondary"
                    icon="pi pi-times"
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

        <div
            class="mt-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg p-3"
        >
            <div class="">
                <!-- Status -->
                <div class="flex items-center justify-end gap-2 rounded-xl p-3">
                    <span
                        :class="
                            clientes.ativo.value
                                ? 'text-green-600'
                                : 'text-gray-600'
                        "
                        >{{ clientes.ativo.value ? 'Ativo' : 'Inativo' }}</span
                    >
                    <ToggleSwitch v-model="clientes.ativo.value" />
                </div>

                <!-- Abas -->
                <div class="flex justify-around border-b-2 pb-1">
                    <div v-for="menu in clientes.menus.value" class="">
                        <div
                            class="flex cursor-pointer items-center gap-2 hover:text-primary"
                            :class="
                                clientes.aba.value == menu.value
                                    ? 'font-semibold text-primary'
                                    : ''
                            "
                        >
                            <i :class="menu.icon" />
                            <span @click="clientes.setAba(menu.value)">
                                {{ menu.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dados Básicos -->
        <div v-if="clientes.aba.value == 'dados'" class="mt-2 w-full space-y-4">
            <!-- Nome -->
            <div class="flex flex-col p-2">
                <span class="text-sm font-semibold text-gray-600">Nome:</span>
                <InputText
                    v-model="clientes.dadosBasicos.value.nome"
                    class="h-10 p-2"
                />
            </div>

            <div class="flex w-full gap-2">
                <!-- Tipo Pessoa -->
                <div class="flex flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Tipo Pessoa:</span
                    >
                    <Select
                        v-model="clientes.dadosBasicos.value.tipo_pessoa"
                        class="h-10 w-40"
                        :options="[
                            { label: 'Física', value: 'f' },
                            { label: 'Juridica', value: 'j' },
                        ]"
                        option-label="label"
                        option-value="value"
                    ></Select>
                </div>

                <!-- CPF/CNPJ -->
                <div class="flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >CPF/CNPJ:</span
                    >
                    <InputMask
                        v-model="clientes.dadosBasicos.value.cpf_cnpj"
                        :mask="
                            clientes.dadosBasicos.value.tipo_pessoa === 'j'
                                ? '99.999.999/9999-99'
                                : '999.999.999-99'
                        "
                    />
                </div>

                <!-- RG/Inscrição Estadual -->
                <div class="flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >RG/Inscrição Estadual:</span
                    >
                    <InputText
                        v-model="
                            clientes.dadosBasicos.value.rg_inscricao_estadual
                        "
                    />
                </div>

                <!-- Data de Nascimento -->
                <div class="flex flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Data de Nascimento:</span
                    >
                    <InputMask
                        v-model="
                            clientes.dadosBasicos.value.data_nascimento_fundacao
                        "
                        mask="99/99/9999"
                    />
                </div>
            </div>

            <div class="flex w-full flex-1 gap-2">
                <!-- Estado Civil -->
                <div class="flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Estado Civil:</span
                    >
                    <InputText
                        v-model="clientes.dadosBasicos.value.estado_civil"
                        class="h-10 p-2"
                    />
                </div>

                <!-- Profissão -->
                <div class="flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Profissão:</span
                    >
                    <InputText
                        v-model="clientes.dadosBasicos.value.profissao"
                        class="h-10 p-2"
                    />
                </div>

                <!-- Nacionalidade -->
                <div class="flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Nacionalidade:</span
                    >
                    <InputText
                        v-model="clientes.dadosBasicos.value.nacionalidade"
                        class="h-10 p-2"
                    />
                </div>
            </div>
        </div>

        <!-- Contato -->
        <div
            v-if="clientes.aba.value == 'contato'"
            class="mt-2 w-full space-y-4"
        >
            <div class="flex w-full gap-4">
                <!-- Telefone 1 -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Telefone 1:</span
                    >
                    <InputMask mask="(99) 9999-9999" />
                </div>

                <!-- Telefone 2 -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Telefone 2:</span
                    >
                    <InputMask mask="(99) 9999-9999" />
                </div>
            </div>

            <div class="flex w-full gap-4">
                <!-- Whatsapp -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Whatsapp:</span
                    >
                    <InputMask mask="(99) 9999-9999" />
                </div>

                <!-- Email -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Email:</span
                    >
                    <InputText type="email" />
                </div>
            </div>
        </div>

        <!-- Endereço -->
        <div
            v-if="clientes.aba.value == 'endereco'"
            class="flex flex-col gap-2"
        >
            <div class="item-center flex w-full gap-2">
                <!-- CEP -->
                <div class="flex flex-col gap-2 ">
                    <span class="text-sm font-semibold text-gray-600"
                        >CEP:</span
                    >
                    <div class="flex w-full">
                        <InputMask
                            mask="99999-999"
                            v-model="clientes.endereco.value.cep"
                        />
                        <Button
                            severity="secondary"
                            icon="pi pi-search"
                            @click="
                                clientes.buscarCep(clientes.endereco.value.cep)
                            "
                        />
                    </div>
                </div>
                <!-- Logradouro -->
                <div class="p2 flex w-full flex-col p-2">
                    <span class="text-sm font-semibold text-gray-600"
                        >Logradouro:</span
                    >
                    <InputText v-model="clientes.endereco.value.logradouro" />
                </div>
            </div>
            <div class="flex w-full gap-2">
                <!-- Número -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Número:</span
                    >
                    <InputText v-model="clientes.endereco.value.numero" />
                </div>

                <!-- Complemento -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Complemento:</span
                    >
                    <InputText v-model="clientes.endereco.value.complemento" />
                </div>
            </div>

            <div class="flex w-full gap-2">
                <!-- Bairro -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Bairro:</span
                    >
                    <InputText v-model="clientes.endereco.value.bairro" />
                </div>

                <!-- Cidade -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Cidade:</span
                    >
                    <InputText v-model="clientes.endereco.value.cidade" />
                </div>

                <!-- Estado -->
                <div class="p2 flex w-full flex-col">
                    <span class="text-sm font-semibold text-gray-600"
                        >Estado:</span
                    >
                    <InputText v-model="clientes.endereco.value.estado" />
                </div>
            </div>
        </div>
    </div>
</template>
