<script setup lang="ts">

const headerLinks = [
    {
        links: [
            { name: 'Falcon 9', to: '/' },
            { name: 'Falcon Heavy', to: '/' },
            { name: 'Dragon', to: '/' },
            { name: 'Updates', to: '/' },
        ],
    }, {
        links: [
            { name: 'About', to: '/' },
            { name: 'Gallery', to: '/' },
            { name: 'Shop', to: '/' },
        ]
    }
]

</script>


<template>
    <header class="flex justify-between items-center container">
        <nuxt-link to="/">
            <img src="../assets/svg/logo.svg" alt="Logo">
        </nuxt-link>
        <nav v-for="link, index in headerLinks" :key="index">
            <ul class="flex gap-5">
                <li v-for="navLink in link.links" :key="navLink.name">
                    <nuxt-link
                        class="text-white text-base font-medium hover:text-gray-400 transition-colors duration-300"
                        :to="navLink.to">{{ navLink.name }}</nuxt-link>
                </li>
            </ul>
        </nav>

    </header>
</template>