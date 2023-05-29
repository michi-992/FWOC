<template>
  <h2>Dog Details</h2>

  <NuxtLink to="/dogs">Go back</NuxtLink>

<!--  version 1 -->
<!--  <div v-if="loading">-->
<!--    Loading...-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    <h1>{{ dog.attributes.name }}</h1>-->
<!--    {{ da.description }}-->
<!--  </div>-->
<!--</template>-->

<!--  version 2 -->
    <div v-if="pending">
      Loading...
    </div>
    <div v-else>
      <h3>{{ da.name }}</h3>
      <p>{{ da.description }}</p>
    </div>
  </template>

<script setup>
const route = useRoute();

const dogAPI = `https://dogapi.dog/api/v2/breeds/${route.params.dogid}`;

const { pending, data: details } = useFetch(dogAPI);

const da = computed(() => {
  if (details.value) return details.value.data.attributes;
});
</script>