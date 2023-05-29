<template>
  <ul class="list-none p-4 grid grid-cols-4 gap-4">
    <DogBreed v-for="dog in dogs" class="bg-lime-200 rounded my-4 p-4 hover:list-disc hover:bg-lime-300">
      <NuxtLink :to="`/dogs/${dog.id}`">
        {{ dog.attributes.name }}
      </NuxtLink>
    </DogBreed>
  </ul>
</template>

<script setup>
defineProps(['dogs']);
</script>