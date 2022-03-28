<template>
  <main class="login min-h-screen bg-gray-100">
    <section class="container mx-auto pt-16 pb-4 px-4">
      <h1 class="text-4xl mb-8 text-center font-black text-gray-800 uppercase">
        Passwordless Login
      </h1>

      <form
        @submit.prevent=""
        class="bg-white max-w-md mx-auto rounded p-4 border-2 shadow-slate-200">

        <label class="block mb-2">
          <span class="block text-gray-600 mb-2">
            Enter your email address
          </span>
          <input 
            type="email"
            placeholder="blah@meh.com"
            class="block w-full rounded bg-transparent border py-2 px-4 disabled:opacity-50">
        </label>

        <div class="flex justify-end items-center">
          <input 
            type="text"
            value="Login"
            class="w-full inline-block bg-[#1da1f2] text-lg text-gray-100 text-center font-bold uppercase rounded px-4 py-2 cursor-pointer disabled:opacity-50">
        </div>
      </form>
    </section>
  </main>
</template>