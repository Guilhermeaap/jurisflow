// Imports
import { ref } from "vue";

// Variables
export const aba = ref('dados')
export const openCreateClients = ref(true);
export const menus = ref([
    { label: 'Dados Básicos', value: 'dados', icon: 'pi pi-user' },
    { label: 'Contato', value: 'contato', icon: 'pi pi-phone' },
    { label: 'Endereço', value: 'endereco', icon: 'pi pi-map-marker' },
    { label: 'Informações Jurídicas', value: 'informacao', icon: 'pi pi-id-card' },
    { label: 'Processos', value: 'processos', icon: 'pi pi-file' },
]);
export const ativo = ref(true)
export const currentView = ref('lista')
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