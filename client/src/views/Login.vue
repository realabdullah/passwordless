<template>
  <main class="login min-h-screen bg-gradient-to-br from-green-500 to-cyan-400">
    <section class="container mx-auto pt-16 pb-4 px-4">
      <h1 class="text-4xl mb-8 text-center font-black uppercase">
        Passwordless Login
      </h1>

      <form
        @submit.prevent=""
        class="bg-gray-700 max-w-md mx-auto rounded p-4">

        <label class="block mb-2">
          <span class="block text-gray-400 mb-2">
            Enter your email address
          </span>
          <input 
            type="email"
            placeholder="blah@meh.com"
            class="block w-full rounded bg-gray-800 py-2 px-4 disabled:opacity-50">
        </label>

        <div class="flex justify-end items-center">
          <input 
            type="text"
            value="Login"
            class="inline-block bg-emerald-400 text-lg text-gray-800 font-bold uppercase rounded px-4 py-2 cursor-pointer disabled:opacity-50">
        </div>
      </form>
    </section>
  </main>
</template>