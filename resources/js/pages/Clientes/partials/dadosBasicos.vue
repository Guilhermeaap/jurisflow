<script setup>
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
</script>
<template>
    <!-- Nome -->
    <div class="p-2 flex flex-col">
        <span>Nome:</span>
        <InputText class="p-2 h-10" />
    </div>

    <div class="flex gap-2 w-full">
        <!-- Tipo Pessoa -->
        <div class="p-2 flex flex-col">
            <span>Tipo Pessoa:</span>
            <Select
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
            <span>CPF/CNPJ:</span>
            <InputMask
                mask="999.999.999-99"
            />
        </div>

        <!-- Data de Nascimento -->
        <div class="flex p-2 flex-col">

            <span>Data de Nascimento:</span>
            <InputMask 
                mask="99/99/9999"
            />
         </div>
    </div>

    <!-- Estado Civil -->
    <div class="flex p-2 flex-col">
        <span>Estado Civil:</span>
        <InputText class="p-2 h-10" />
    </div>

    <!-- Profissão -->
    <div class="flex p-2 flex-col">
        <span>Profissão:</span>
        <InputText class="p-2 h-10" />
    </div>

    <!-- Nacionalidade -->
    <div class="flex p-2 flex-col">
        <span>Nacionalidade:</span>
        <InputText class="p-2 h-10" />
    </div>

</template>
