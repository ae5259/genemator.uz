<script setup lang="ts">
</script>

<template>
    <div class="bg-gray-900 text-white  w-100  p-10">
        <div class="container flex justify-between items-center">
        <nuxt-link to="/">
            <h1 class="text-4xl mx-5">Genemator's</h1>
        </nuxt-link>
            <ul class="mx-5">
            <li>
                <nuxt-link to="/" class="link">Home</nuxt-link>
                <nuxt-link to="/projects" class="link">About</nuxt-link>
                <nuxt-link to="/blog" class="link">Blog</nuxt-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<style scoped>
.link {
   margin: 20px;
   font-size: 20px;
}

* {
    color: white;
}

.bg-dark {
    background-color: black;
}
</style>