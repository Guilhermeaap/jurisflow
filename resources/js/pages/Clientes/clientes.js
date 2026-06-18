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
export const ativo = ref(true)
export const dadosBasicos = ref({
    nome: null,
    tipo_pessoa: null,
    cpf_cnpj: null,
    rg_inscricao_estadual: null,
    data_nascimento_fundacao: null,
    estado_civil: null,
    profissao: null,
    nacionalidade: null
})

export function save () {
    console.log(dadosBasicos.value)
}