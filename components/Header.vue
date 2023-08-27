<script setup lang="ts">
</script>

<template>
    <div class="bg-gray-900 text-white  w-100  p-10">
        <div class="container flex justify-between items-center">
        <NuxtLink to="/">
            <h1 class="text-4xl mx-5">Genemator's</h1>
        </NuxtLink>
            <ul class="mx-5">
            <li>
                <NuxtLink to="/" class="link">Home</NuxtLink>
                <NuxtLink to="/projects" class="link">About</NuxtLink>
                <NuxtLink to="/blog" class="link">Blog</NuxtLink>
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