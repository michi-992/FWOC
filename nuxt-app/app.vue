<template>
  <div>
    <h1>My fancy Nuxt App</h1>
    <nav>
      <NuxtLink to="/" >Home</NuxtLink>
      <NuxtLink to="/hello">Hello</NuxtLink>
      <NuxtLink to="/guesser">Play Guesser</NuxtLink>
      <NuxtLink to="/soundboard">Soundboard</NuxtLink>
      <NuxtLink to="/dogs">All about dogs</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
