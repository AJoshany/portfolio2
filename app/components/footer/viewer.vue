<template>
    <footer class="w-full text-[1.7rem] flex flex-col gap-[3rem] md:gap-[5.2rem] items-center bg-[#F8F8F8]">
        <div class="flex flex-col items-center gap-[3rem] md:gap-[5.2rem] pt-[5rem] md:pt-[8rem]">
            <p class="font-[600] text-[--color-orange-500] text-[4rem]">Ali Joshany</p>
            <nav class="flex items-center flex-col md:flex-row gap:[1rem] md:gap-[1.2rem] text-[--color-black-500]">
                <li
                    v-for="(item, index) in navItemList"
                    
                    :key="index"
                    class="px-[1rem] py-[0.8rem] cursor-pointer hover:text-[--color-orange-500] transition-all duration-300"
                >
                    {{ item }}
                </li>
            </nav>
            <SocialIcons/>
        </div>
        <div class="text-white bg-[--color-black-300] py-[2rem] w-full text-center">
            © 2025 <span class="text-[--color-orange-500]">Ali Joshany</span> All Rights Reserved , Inc.
        </div>
    </footer>
</template>

<script setup>
const navItemList = ["Home", "About Me", "Skills", "Projects", "Contact"];
</script>