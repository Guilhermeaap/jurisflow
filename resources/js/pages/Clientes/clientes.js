// Imports
import { ref } from "vue";

// Variables
export const aba = ref('dados')
export const openCreateClients = ref(true);
export const menus = ref([
    { label: 'Dados Básicos', value: 'dados' },
    { label: 'Contato', value: 'contato' },
    { label: 'Endereço', value: 'endereco' },
    { label: 'Informações Jurídicas', value: 'informacao' },
    { label: 'Processos', value: 'processos' },
]);