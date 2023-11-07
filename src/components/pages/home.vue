<template>
  <img src="../../assets/home/herosec_main_photo.png" alt="" class="object-cover w-full h-[100vh]">
  <div class="w-full mb-[100em]">
    <div class="absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between gap-[0.5em] mt-[40em] w-[1280px] max-[1340px]:w-full max-[1340px]:px-2 max-[1100px]:flex-col max-[1100px]:top-[25%] max-[1100px]:items-center ">
      <div class="text-white w-[900px] max-[1100px]:w-full  max-[754px]:text-center max-[754px]:w-[400px] max-[460px]:w-full">
        <p class="text-[60px] font-bold leading-[1.2em] max-[754px]:text-[35px]">Nudimo Vam usluge profesionalnog čišćenja</p>
        <p class="text-[18px] py-8 w-[600px] max-[1100px]:w-full max-[754px]:text-[14px]">PSClean je profesionalan u industriji čišćenja pružanjem vrhunskih usluga čišćenja i pratećih usluga</p>
        <div class="button" id="button-7">
    <div id="dub-arrow"><img src="../../assets/home/herosec_main_button,svg.svg" alt="" /></div>
    <a href="#" class="font-bold">Naše Usluge</a>
  </div>
      </div>
      <div class="bg-linear-css w-[400px] h-[800px] relative top-[-10em] max-[1100px]:top-[10em] max-[1100px]:mt-[10em] max-[460px]:w-full">
        <div class="mt-[100px] flex px-[30px] text-white flex flex-col">
          <p class="text-[24px] font-semibold mb-[24px]">Prijavite se</p>
          <form action="">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white" placeholder="Ime*">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white" placeholder="Broj Mobitela*">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white" placeholder="Email*">
            <select required class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white">
                <option value="" disabled selected hidden>Izaberi uslugu*</option>
                <option value="">1</option>
                <option value="">2</option>
              <option value="">3</option>
            </select>
            <textarea name="" id="" class="mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white" placeholder="Poruka"></textarea>
            <div class="button" id="button-7">
    <div id="dub-arrow" class="font-bold">ODMAH!</div>
    <a href="#" class="font-bold">POŠALJI</a>
  </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
</script>

<style scoped>
::placeholder{
  color:white;
}
.bg-linear-css{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 15%, rgba(0,124,251,1) 37%);
}
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #007CFB;
  background: #007CFB;
  margin:0;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-7 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-7 a {
  position: relative;
  left: 0;
  transition: all .35s ease-Out;
}

#dub-arrow {
  width: 100%;
  height: 100%;
  background: #007CFB;
  left: -200px;
  position: absolute;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .35s ease-Out;
  bottom: 0;
}

#button-7 img {
  width: 20px;
  height: auto;
}

#button-7:hover #dub-arrow {
  left: 0;
}

#button-7:hover a {
  left: 150px;
}
</style>

