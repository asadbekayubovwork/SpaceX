<script setup lang="ts">
const socialLinks = [
    { name: 'Twitter', to: '#' },
    { name: 'Youtube', to: '#' },
    { name: 'Instagram', to: '#' },
    { name: 'Flickr', to: '#' },
    { name: 'LinkedIn', to: '#' },
    { name: 'Privacy', to: '#' },
    { name: 'Policy', to: '#' },
];
</script>

<template>
    <footer class="bg-black text-white py-20 flex flex-col items-center justify-center">
        <div class="mb-10">
            <img src="../assets/svg/logo.svg" alt="SpaceX" class="h-6 object-contain">
        </div>

        <nav class="mb-8">
            <ul class="flex flex-wrap justify-center gap-8">
                <li v-for="link in socialLinks" :key="link.name">
                    <a :href="link.to" class="text-white text-sm uppercase hover:text-gray-400 transition-colors">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </nav>

        <p class="text-gray-400 text-sm mb-8 text-center">
            For additional questions, contact <a href="mailto:asadbekayubov@gmail.com"
                class="text-white hover:underline">asadbekayubov@gmail.com</a>
        </p>

        <button
            class="border border-white text-white px-12 py-4 uppercase text-sm hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
            Contact us
        </button>
    </footer>
</template>
