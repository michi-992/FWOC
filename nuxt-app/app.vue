<template>
  <div>
    <h1>My fancy Nuxt App</h1>
<!--    added main here-->
    <nav role="main">
      <NuxtLink to="/" >Home</NuxtLink>
      <NuxtLink to="/hello">Hello</NuxtLink>
      <NuxtLink to="/tictactoe">Tic Tac Toe</NuxtLink>
      <NuxtLink to="/guesser">Play Guesser</NuxtLink>
      <NuxtLink to="/soundboard">Soundboard</NuxtLink>
      <NuxtLink to="/dogs">All about dogs</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>


<style>
nav[role='main'] > a {
  @apply mr-4 p-2;
}

nav[role='main'] > a.router-link-active {
  @apply text-slate-400;
}
</style>

