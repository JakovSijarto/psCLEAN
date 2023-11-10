<template>
    <div class="w-full flex justify-center items-center mb-[5em]">
      <div class="flex w-[1280px] justify-center flex-col items-center max-[1100px]:w-full px-2">
        <div class="flex items-center justify-center flex-col pb-[25px]">
          <div class="flex gap-[1em] my-8 flex-row items-center">
          <img src="../../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]">
          <p class="rubik-font text-[18px] font-semibold text-[#3A4268]">Naše usluge</p>
        </div>
        <div class="text-[#082680] text-[36px] font-extrabold flex flex-col text-center  max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center max-[302px]:px-2">
          Pružamo najbolje usluge
          <small class="font-normal mb-[14px]">za Vašu potrebu!</small>
          <div class="text-center text-[16px] leading-[27px] text-[#3A4268] w-[600px] font-light mt-4 max-[640px]:w-[90%]">PSClean je tvrtka za čišćenje osnovana u Srbiji s više usluga, nudeći različita rješenja za čišćenje.</div>
        </div>
        </div>
        <div class="flex gap-[2em] mt-[3em]   max-[950px]:flex-col max-[950px]:justify-center max-[950px]:items-center">
          <div class="w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%]">
            <img src="../../../assets/home/house-aboutus-home.svg" alt="" class="cssdottedborder mb-[14px]">
            <p class="text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] small-line_about w-[80%]">Čiśćenje privatnih stanova/kuća</p>
            <p class="w-[80%] rubik-font text-[#3A4268] text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum inventore</p>
          </div>
          <div class="w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%]">
            <img src="../../../assets/home/plants-aboutus-home.svg" alt="" class="cssdottedborder mb-[14px]">
            <p class="text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] small-line_about2 w-[40%]">Održavanje biljaka</p>
            <p class="w-[80%] rubik-font text-[#3A4268] text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum inventore</p>
          </div>
          <div class="w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%]">
            <img src="../../../assets/home/indoor-aboutus-home.svg" alt="" class="cssdottedborder mb-[14px]">
            <p class="text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] small-line_about w-[80%]">Čiśćenje poslovnih prostora</p>
            <p class="w-[80%] rubik-font text-[#3A4268] text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illum inventore</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scopet>
.small-line_about::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 3.8em;
    margin-left: 3.9em;
}
.small-line_about2::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 3.8em;
    margin-left: 2.2em;
}
@media only screen and (max-width: 950px) {
  .small-line_about::before{
  content: none !important;
}
.small-line_about2::before{
  content: none !important;
}

}

</style>
