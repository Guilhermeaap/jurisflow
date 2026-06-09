<script setup>
// Imports
import { logout } from '@/routes'
import { Link } from '@inertiajs/vue3'
import { defineEmits, onMounted, ref } from 'vue'
import { usePage } from '@inertiajs/vue3'
// Emits
const emit = defineEmits(['toggle-sidebar']);


// Variáveis    
const page = usePage()
const user = page.props.auth.user
const siglaNome =ref('')

onMounted (() => {
    getSiglaNome(page.props.auth.user.name)
})

function getSiglaNome(nome) {
    const parts = nome.trim().split(' ')
    const firstLetter = parts[0]?.[0] || ''
    const secondLetter= parts[1]?.[0] || ''

    return siglaNome.value = firstLetter + secondLetter

}
</script>

<template>
    <div class="flex h-[5vh] w-full items-center bg-primary p-2 drop-shadow-md shadow-md ">
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
        <div class="mr-2 flex w-full items-center justify-end">
            {{ siglaNome }}
            <span class="mr-4 text-secondary">{{ user.name }}</span>
            <Link
                class="pi pi-sign-out cursor-pointer rounded-lg  p-2 text-secondary hover:text-secondary-hover"
                title='Sair'
                :href="logout()"
            ></Link>
        </div>
    </div>
</template>
