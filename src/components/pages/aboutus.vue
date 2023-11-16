<template>
    <div class="pt-[112px] max-[571px]:pt-[81px]">   
        <div class=" w-full flex justify-center items-center bg-black">
            <img src="../../assets/home/herosec_about_kontakt.jpg" alt="" class="h-[300px] w-full object-cover opacity-[0.4]">
            <p class="absolute text-[60px] font-bold text-white max-[310px]:text-[40px] tracking-[5px]">O NAMA</p>
        </div>
    </div>
    <div class="w-full flex justify-center py-[5em]">
        <div class="flex w-[880px] justify-between items-center gap-[3em] max-[1240px]:w-full max-[1240px]:px-8 max-[800px]:flex-col">
            <img src="../../assets/aboutus/aboutus-sec.jpg" alt="" class="w-[400px] h-[400px] rounded-[20px] object-cover">
        <div class="flex items-start flex-col  pb-8">
          <div class="flex gap-[1em] flex-row items-center">
          <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]">
          <p class="rubik-font text-[18px] font-semibold text-[#3A4268]">Naše usluge</p>
        </div>
        <div class="text-[#082680] text-[36px] font-extrabold border-b pb-8 flex flex-col max-[640px]:flex max-[302px]:px-2 max-[350px]:text-[28px] max-[350px]:pt-4">
          Pružamo najbolje usluge
          <small class="font-normal mb-[14px] ">za Vašu potrebu!</small>
          <div class="text-[16px] leading-[27px] text-[#3A4268] w-[600px] font-light mt-4 max-[1100px]:w-[90%] max-[350px]:text-[14px]">PSClean je tvrtka za čišćenje osnovana u Srbiji s više usluga, nudeći različita rješenja za čišćenje.</div>
        </div>
        <div class="flex flex-row pt-8 gap-[2em] max-[400px]:flex-col">
        <img src="../../assets/aboutus/instagramicon_aboutus.png" alt="" class="w-[100px] max-h-[100px]">
        <div>
            <p class="mt-[13px] mb-[7px] text-[#082680] font-extrabold">Pogledajte kako čistimo!</p>
            <p class="text-[#3A4268] text-[14px] w-[80%]">Kliknite na ikonicu i saznajte više o našem instagramu.</p>
        </div>
    </div>
        </div>
        </div>
    </div>
    
    <aboutussection/>
    
    <kontaktbottom/>

    
</template>

<script setup>
import kontaktbottom from "./components/contact-bottom.vue"
import aboutussection from "./components/aboutus-services.vue"
</script>
