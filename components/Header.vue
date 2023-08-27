<script setup lang="ts">
</script>

<template>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="og:description" content="Good time of the day, says an uzbek !senior developer a.k.a Genemator! I'm a half-stack developer who is trying to survive in this Open Source world.">
        <meta name="og:title" content="Genemator III">
        <meta name="og:site_name" content="Genemator - TBIK.">
        <meta name="og:url" content="https://genemator.uz">
        <meta name="og:image" content="https://i.imgur.com/YGgSRci.png">
    </Head>
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