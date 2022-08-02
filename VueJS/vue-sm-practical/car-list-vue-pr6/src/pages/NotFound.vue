<template>
  <div class="mx-auto flex flex-col justify-center items-center mt-14">
    <h1 class="text-2xl text-slate-800">Oops page not found 🙂</h1>
    <p>
      <router-link :to="{ name: 'HomePage' }">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Home
        </button>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {}
</script>
