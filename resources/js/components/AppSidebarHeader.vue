<script setup>

// Emits
const emit = defineEmits(['toggle-sidebar'])

</script>

<template>
        <div class="bg-[#7A1024] h-[5vh] w-full flex p-2 items-center">
            
            <i
                class="pi pi-bars cursor-pointer text-[#D4AF37]"
                @click="emit('toggle-sidebar')"
            />

            <a class="flex items-center ml-4"
            href="/"
            >
                <img 
                    src="/logo.png" 
                    alt="Logo"
                    class="h-14 mt-2"
                   
                >
                <span class="font-bold text-[#D4AF37] ">J U R I S F L O W</span>
            </a>


        
        </div>
  

</template>
