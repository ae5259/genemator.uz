<script setup lang="ts">
</script>

<template>
    <Header></Header>
    <div class="m-10">
        <h1 class="text-5xl text-center">Blogs</h1>
    </div>

    <div class=" w-10/12 mx-auto border bg-gray-900 rounded-2xl p-5 text-white">
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="article in list" :key="article._path" class="">
            <nuxt-link to={{ article.slug }}>
                <h1 class="text-3xl">{{ article.title }}</h1>
                <br>
                <p class="text-xl">{{ article.description }}</p>
            </nuxt-link>
            </div>
        
        </ContentList>
    </div>
    
</template>