<template>
  <HeaderPage />
    <div
        class="z-3 inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 relative">
            <h4 class="text-base font-semibold text-slate-900 mt-6">3 Items</h4>

            <div class="space-y-5 mt-6">
                <div class="flex max-sm:flex-col sm:items-center justify-between gap-4">
                    <div class="flex items-center">
                        <div class="ml-4">
                            <p class="text-sm text-slate-900 font-medium">Black T-Shirt</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-base font-semibold text-slate-900 mr-4">$59.50</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] fill-red-500 inline cursor-pointer ml-auto"
                            viewBox="0 0 24 24">
                            <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"></path>
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                </div>

                <div class="flex max-sm:flex-col sm:items-center justify-between gap-4">
                    <div class="flex items-center">
                        <img src='https://readymadeui.com/product_img_1.webp'
                            class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md" />
                        <div class="ml-4">
                            <p class="text-sm text-slate-900 font-medium">Light Gray T-Shirt</p>
                            <p class="text-slate-500 text-xs mt-1">1 Item</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-base font-semibold text-slate-900 mr-4">$60.99</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] fill-red-500 inline cursor-pointer ml-auto"
                            viewBox="0 0 24 24">
                            <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"></path>
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                </div>

                <div class="flex max-sm:flex-col sm:items-center justify-between gap-4">
                    <div class="flex items-center">
                        <img src='https://readymadeui.com/product_img_2.webp'
                            class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md" />
                        <div class="ml-4">
                            <p class="text-sm text-slate-900 font-medium">Black T-Shirt</p>
                            <p class="text-slate-500 text-xs mt-1">1 Item</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <span class="text-base font-semibold text-slate-900 mr-4">$50.00</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[18px] fill-red-500 inline cursor-pointer ml-auto"
                            viewBox="0 0 24 24">
                            <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"></path>
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="flex mt-6">
                <span class="text-base font-semibold text-slate-900 flex-1">Total</span>
                <span class="text-base font-semibold text-slate-900">$170.00</span>
            </div>

            <div class="flex max-sm:flex-col gap-4 mt-8">
                <button id="closeButton" type="button"
                    class="text-sm font-medium cursor-pointer px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-slate-900 rounded-md tracking-wide">Continue
                    shopping</button>
                <button type="button"
                    class="text-sm font-medium cursor-pointer px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide">Pay</button>
            </div>
        </div>
    </div>
  <FooterPage />
</template>

<script setup>
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from './FooterPage.vue';
</script>

<style>

</style>
