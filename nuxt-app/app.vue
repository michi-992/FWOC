<template>
  <div>
    <h1>Michaela Topalovic - Nuxt App</h1>
    <nav role="main">
      <NuxtLink to="/" >Home</NuxtLink>
      <NuxtLink to="/hello">Hello</NuxtLink>
      <NuxtLink to="/soundboard">Soundboard</NuxtLink>
      <NuxtLink to="/dogs">All about dogs</NuxtLink>
      <NuxtLink to="/guesser">Play Guesser</NuxtLink>
      <NuxtLink to="/tictactoe">Play Tic Tac Toe</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>