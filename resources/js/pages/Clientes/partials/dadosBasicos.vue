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
    <!-- CPF/CNPJ -->
     <div class="p-2 flex flex-col">
        <span>CPF/CNPJ:</span>
        <InputMask
            mask="999.999.999-99"
        />
     </div>

     <!-- Tipo Pessoa -->
      <div class="p-2 flex flex-col">
        <span>Tipo Pessoa:</span>
        <Select
            :options="[
                {label: 'Física', value:'f'},
                {label:'Juridica', value:'j'}
            ]"
            option-label="label"
            option-value="value"
        ></Select>
      </div>

      <!-- Data de Nascimento -->
      <div class="flex p-2 flex-col">
        <span>Data de Nascimento:</span>
         <InputMask 
        mask="99/99/9999"
       />
      </div>

</template>
