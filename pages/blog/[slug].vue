<template>
  <main>
    <Header></Header>
    <div class="w-10/12 mx-auto  p-5 ">
      <article class="prose mx-auto">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl text-center p-3">{{ doc.title }}</h1>
          <div class="text-xl">
            <ContentRenderer :value="doc" />
          </div>
        </ContentDoc>
      </article>
    </div>
  </main>
</template>
