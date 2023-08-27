<script setup lang="ts">
useHead({
  title: 'Genemator - Blog',
})
</script>

<template>
    <Header></Header>
    <div class="m-10">
        <h1 class="text-5xl text-center">Blogs</h1>
    </div>

    <div class=" w-10/12 mx-auto  p-5 text-white">
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="blog in list" :key="blog._path" class="my-5 p-5 border bg-gray-900 rounded-2xl">
            <NuxtLink :to="blog.slug">
                <h1 class="text-3xl">{{ blog.title }}</h1>
                <br>
                <p class="text-xl">{{ blog.description }}</p>
            </NuxtLink>
            </div>
        
        </ContentList>
    </div>
    
</template>