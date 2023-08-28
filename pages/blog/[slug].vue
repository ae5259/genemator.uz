<template>
  <main>
    <Header></Header>
    <div class="w-10/12 mx-auto p-5 text-white">
      <article class="prose mx-auto text-white">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl text-center p-3 text-white">{{ doc.title }}</h1>
          <div class="text-xl text-white">
            <ContentRenderer :value="doc" class="text-white"/>
          </div>
        </ContentDoc>
      </article>
    </div>
  </main>
</template>

<style>

.prose :where(code):not(:where([class~="not-prose"] *)),
.prose :where(a):not(:where([class~="not-prose"] *))
{
  color: #e5e5e5 !important;
}
</style>