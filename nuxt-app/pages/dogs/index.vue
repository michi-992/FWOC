<template>
  <main>
    <h2>All about dogs</h2>

    <DogList :dogs="breeds" />
  </main>
</template>

<script setup>
const dogsAPI = `https://dogapi.dog/api/v2/breeds`;

// v2
const { data: result } = useFetch(dogsAPI);

const breeds = computed(() => {
  if(result.value) return result.value.data;

    return [];
})

// v1
// const breeds = ref([]);
//
// onMounted(async () => {
//   const { data } = await fetch(dogsAPI).then((r) => r.json());
//   breeds.value.push(...data);
// });
</script>