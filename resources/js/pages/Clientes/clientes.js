// Imports
import axios from "axios";
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
export const contato = ref({
    telefone1: null,
    telefone2: null,
    whatsapp: null,
    email: null,
})
export const endereco = ref({
    cep: null,
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    estado: null
})

export function setAba (value) {
    aba.value = value
}

export function save () {
    console.log(dadosBasicos.value)
}

export async function buscarCep (cep) {
    var cepReplace = cep.replace(/\D/g, '');
        await axios.get(`https://viacep.com.br/ws/${cepReplace}/json/`)
        .then((response) => {
          endereco.value.logradouro = response.data.logradouro;
            endereco.value.bairro = response.data.bairro;
            endereco.value.cidade = response.data.localidade;
            endereco.value.estado = response.data.uf;
            
        })
        .catch((error) => {
          console.error(error);
        });
}