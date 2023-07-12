<template>
  <ul class="dogList">
    <DogBreed v-for="dog in dogs">
      <NuxtLink :to="`/dogs/${dog.id}`">
        {{ dog.attributes.name }}
      </NuxtLink>
    </DogBreed>
  </ul>
</template>

<script setup>
defineProps(['dogs']);
</script>