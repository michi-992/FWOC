<template>
  <h1>Dog Details</h1>

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
      <h1>{{ da.name }}</h1>
      <p>{{ da.description }}</p>
    </div>
  </template>

<script setup>
// version 2
const route = useRoute();

const dogAPI = `https://dogapi.dog/api/v2/breeds/${route.params.dogid}`;

const { pending, data: details } = useFetch(dogAPI);

const da = computed(() => {
  if (details.value) return details.value.data.attributes;
});

//Version 1
// const route = useRoute();
// const loading = ref(true);
//
// const dogAPI = `https://dogapi.dog/api/v2/breeds/${route.params.dogid}`;
//
// const dog = ref();
//
// const da = computed(() => {
//   if (dog.value) return dog.value.attributes;
// });
//
// onMounted(async () => {
//   const {data} = await fetch(dogAPI).then((r) => r.json());
//   dog.value = data;
//   setTimeout(() => {
//     loading.value = false;
//   }, 1000)
// });

</script>