<script setup>
// Imports
import { logout } from '@/routes';
import { Link } from '@inertiajs/vue3';
import { defineEmits, onMounted, ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
// Emits
const emit = defineEmits(['toggle-sidebar']);

// Variáveis
const page = usePage();
const user = page.props.auth.user;
const siglaNome = ref('');
const userAbreviado = ref('');
const openMenuProfile = ref(false);

onMounted(() => {
    getSiglaNome(page.props.auth.user.name);
    getPrimeiroUltimoNome();
});

function getSiglaNome(nome) {
    const parts = nome.trim().split(' ');
    const firstLetter = parts[0]?.[0] || '';
    const secondLetter = parts[1]?.[0] || '';

    return (siglaNome.value = firstLetter + secondLetter);
}

function getPrimeiroUltimoNome() {
    const parts = page.props.auth.user.name.trim().split(' ');
    const firstLetter = parts[0] || '';
    const lastLetter = parts.at(-1);

    return (userAbreviado.value = firstLetter + ' ' + lastLetter);
}
</script>

<template>
    <div
        class="flex h-[5vh] w-full items-center bg-primary p-2 shadow-md drop-shadow-md"
    >
        <div class="flex w-full items-center">
            <i
                class="pi pi-bars cursor-pointer text-secondary hover:text-secondary-hover"
                @click="emit('toggle-sidebar')"
            />

            <a class="ml-4 flex items-center" href="/">
                <img
                    src="/logo.png"
                    alt="Logo"
                    class="mt-2 h-14 object-contain"
                />
                <span class="font-bold text-secondary">J U R I S F L O W</span>
            </a>
        </div>
        <div class="mr-2 w-full flex">
            <div class=" flex w-full justify-end">
                <div
                    class=" flex cursor-pointer items-center text-secondary hover:text-secondary-hover"
                    @click="openMenuProfile = !openMenuProfile"
                >
                    <div
                        class="m-2 flex h-10 w-10 justify-center rounded-lg bg-[#1F2937]"
                        @click="openMenu = !openMenu"
                    >
                        <span
                            class="flex w-full items-center justify-center text-xl font-extrabold text-[#F4D56B]"
                            >{{ siglaNome }}</span
                        >
                    </div>
                    <span class="mr-4">{{ userAbreviado }}</span>
                </div>
            </div>

                <Link
                    class="pi pi-sign-out cursor-pointer rounded-lg p-2 text-secondary hover:text-secondary-hover"
                    title="Sair"
                    :href="logout()"
                ></Link>
            </div>
        </div>
    </div>
</template>
