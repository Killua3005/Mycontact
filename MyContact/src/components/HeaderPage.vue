<template>
<header class='flex border-b border-gray-300 py-3 px-4 sm:px-10 bg-white min-h-[100px] tracking-wide relative z-50'>
      <div class='flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full'>
        <!-- <a href="javascript:void(0)" class="max-sm:hidden"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-[134px]' />
        </a>
        <a href="javascript:void(0)" class="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" class='w-8' />
        </a> -->
           <button command="show-modal" commandfor="dialog"
              class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-50 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                    ADD New Conctact
                </span>
            </button>
        <div id="collapseMenu"
          class='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-slate-900" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            class='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3'>
                <router-link class='font-medium lg:hover:text-blue-700 text-blue-700 block text-[15px]' to="/index">Home</router-link>
            </li>
            <li class='max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3'>
              <router-link to="/mycontact"
              class='font-medium lg:hover:text-blue-700 text-slate-900 block text-[15px]'> MyContact </router-link>
            </li>
            <li class='max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='font-medium lg:hover:text-blue-700 text-slate-900 block text-[15px]'>Feature</a>
            </li>
            <li class='max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='font-medium lg:hover:text-blue-700 text-slate-900 block text-[15px]'>Blog</a>
            </li>
            <li class='max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='font-medium lg:hover:text-blue-700 text-slate-900 block text-[15px]'>About</a>
            </li>
          </ul>
        </div>

        <div class='flex gap-4 ml-auto'>
          <div
            class='flex max-w-xs w-full bg-gray-100 px-4 py-2.5 outline outline-transparent border border-gray-200 focus-within:border-slate-900 focus-within:bg-transparent transition-all'>
            <input type='text' placeholder='Search something...'
              class='w-full text-sm bg-transparent outline-none pr-2' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              class="cursor-pointer fill-gray-400">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </div>
          <button id="toggleOpen" class='lg:hidden cursor-pointer'>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

      </div>
    </header>
    <el-dialog>
  <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

    <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
      <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
        <!-- <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-400">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 id="dialog-title" class="text-base font-semibold text-white">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-400">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div> -->
        <div class="p-4 mx-auto max-w-xl bg-white">
        <h2 class="text-3xl text-slate-900 font-bold">ADD New Contact</h2>
        <form class="mt-8 space-y-5">
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Firstname</label>
            <input type='text' placeholder='Firstname'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Lastname</label>
            <input type='text' placeholder='lastname'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Phone</label>
            <input type='tel' placeholder='Phone'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
            <input type='email' placeholder='Enter Email'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Birthday</label>
            <input type='date' placeholder='lastname'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Company</label>
            <input type='text' placeholder='EPITECH Afrique'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div >
          <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Position</label>
            <input type='text' placeholder='Resp. Programme'
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div >
          <div class="space-x-6 flex">
          <div class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 w-55">
            <input id="bordered-radio-1" type="radio" value="Male" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Homme</label>
          </div>
          <div class="flex items-center ps-4 border border-gray-200 rounded-sm dark:border-gray-700 w-55">
            <input checked id="bordered-radio-2" type="radio" value="Female" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="bordered-radio-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Femme</label>
          </div>
          </div>

          <!-- <div>
            <label class='text-sm text-slate-900 font-medium mb-2 block'>Message</label>
            <textarea placeholder='Enter Message' rows="6"
              class="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"></textarea>
          </div> -->
          <button type='button'
            class="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">Send message</button>
        </form>
      </div>

        <div class="bg-indigo-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto">Deactivate</button>
          <button type="button" command="close" commandfor="dialog" class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>

</template>

<script>
</script>

