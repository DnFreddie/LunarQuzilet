<script lang="ts">
    import Navbar from '$lib/navbar.svelte'
    import { redirect } from '@sveltejs/kit';

    let paswwd:string

     function handleButtonClick() {
        console.log("ksjdksdjsjkksjk")




   throw  redirect(303,"/register");
  }
    export let form;
       $: if (form && form.failed) {

        paswwd =''
    }

</script>
            <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 via-purple-800 to-purple-900 pt-8">

        <form method="POST" action="?/login" class="w-full max-w-md p-8 space-y-6 bg-black rounded-xl shadow-md">
            <div>
                <label for="email" class="block text-lg font-semibold text-gray-700">Email</label>
                <input id="email" name="email" type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <div>
                <label for="password" class="block text-lg font-semibold text-gray-700">Password</label>
                <input id="password" bind:value={paswwd} name="password" type="password" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  font-bold focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
        </form>
         {#if form?.failed}
        <div class="mt-4 p-4 text-center text-sm text-red-700 bg-red-100 rounded-lg shadow-md">
            Incorrect email or password. Please try again.
        </div>
            
    {/if}
    </div>

 <a href="/register">
    Go to Register Page
  </a>
