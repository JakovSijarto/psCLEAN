<template>
  <img src="../../assets/home/herosec_main_photo.png" alt="" class="object-cover w-full h-[1020px]">
  <div class="w-full">
    <div class="absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between gap-[0.5em] mt-[40em] w-[1280px] max-[1340px]:w-full max-[1100px]:mt-[0em] max-[1340px]:px-2 max-[1100px]:flex-col max-[1100px]:items-center ">
      <div class="text-white w-[900px] max-[1100px]:w-full  max-[1100px]:mt-[80em]   max-[754px]:text-center max-[754px]:w-[400px] max-[460px]:w-full">
        <p class="text-[60px] font-bold leading-[1.2em] max-[754px]:text-[35px]">Nudimo Vam usluge profesionalnog čišćenja</p>
        <p class="text-[18px] py-8 w-[600px] max-[1100px]:w-full max-[754px]:text-[14px]">PSClean je profesionalan u industriji čišćenja pružanjem vrhunskih usluga čišćenja i pratećih usluga</p>
        <router-link to="/aboutus" class="button" id="button-7">
    <div id="dub-arrow"><img src="../../assets/home/herosec_main_button,svg.svg" alt="" /></div>
    <a href="#" class="font-bold">Naše Usluge</a>
  </router-link>
      </div>
      <div class="bg-linear-css w-[400px] h-[800px] top-[-10em] relative max-[1100px]:top-[25em] max-[1100px]:w-full  max-[1100px]:bg-[#007CFB] max-[1100px]:h-auto max-[1100px]:py-8 max-[460px]:w-full">
        <div class="mt-[100px] max-[1100px]:mt-[0px] flex px-[30px] text-white flex flex-col ">
          <p class="text-[24px] font-semibold mb-[24px]">Prijavite se</p>
          <form action="">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Ime*">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Broj Mobitela*">
            <input type="text" class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" placeholder="Email*">
            <select required class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]">
                <option value="" disabled selected hidden>Izaberi uslugu*</option>
                <option value="">1</option>
                <option value="">2</option>
              <option value="">3</option>
            </select>
            <textarea name="" id="" class="mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white rounded-[5px] " placeholder="Poruka"></textarea>
            <div class="button" id="button-7">
              <div id="dub-arrow" class="font-bold">ODMAH!</div>
              <a href="#" class="font-bold">POŠALJI</a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="max-[1100px]:mt-[30em]">
      <aboutussection/>  
    </div>
    

    <div class="w-full flex justify-center items-center pt-[95px]">
      <div class="flex w-[880px] justify-center flex-col items-center max-[1100px]:w-full max-[1100px]:px-8 max-[670px]:px-2">
        <div class="flex w-full justify-between items-center max-[670px]:flex-col">
          <div class="max-[670px]:flex max-[670px]:flex-col max-[670px]:items-center">
            <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]"> Zašto izabrati nas?</p>
            <p class="text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[670px]:text-center">Zbog naše kvalitete <small class="font-normal mb-[14px]">izaberite nas!</small></p>
          </div>
          <p class="w-[430px] text-[#3A4268] rubik-font max-[670px]:text-center max-[670px]:w-[90%]">Naša agencija ima najbolje ljude i proizvode za čiščenje. Ovo su neke od stvari kojih se uvijek držimo.</p>
        </div>
        <div class="w-[880px] flex justify-center item-center mt-[42px] max-[1100px]:w-full ">
        <tabs class="mb-[10em] max-[620px]:mb-[20em] max-[620px]:mb-[28em]" :options="{ defaultTabHash: 'second-tab' }" >
        <tab name="Naša Filozofija" class="flex h-[400px] max-[620px]:flex-col">
            <div class="w-[50%] pt-[51px] pr-[30px] pb-[60px] pl-[40px]">
              <p class="text-[29px] mb-[10px] font-bold text-[#082680]">Lorem ipsum dolor sit amet!</p>
              <p class="mb-[36px] text-[#3A4268] rubik-font text-[15px]">We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way</p>
              <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">Pogledaj Više</button></router-link> 
            </div>
            <div class="w-[50%]">
              <img src="../../assets/home/nasafilozofija-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
        <tab name="Misija Kompanije" class="flex h-[400px] max-[620px]:flex-col">
          <div class="w-[50%] pt-[51px] pr-[30px] pb-[60px] pl-[40px] max-[620px]:w-full">
              <p class="text-[29px] mb-[10px] font-bold text-[#082680]">Lorem ipsum dolor sit amet!</p>
              <p class="mb-[36px] text-[#3A4268] rubik-font text-[15px]">We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way</p>
              <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">Pogledaj Više</button></router-link> 
            </div>
            <div class="w-[50%] max-[620px]:w-full">
              <img src="../../assets/home/misijakompanije-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
        <tab name="Naša Vizija" class="flex h-[400px] max-[620px]:flex-col">
          <div class="w-[50%] pt-[51px] pr-[30px] pb-[60px] pl-[40px]">
              <p class="text-[29px] mb-[10px] font-bold text-[#082680]">Lorem ipsum dolor sit amet!</p>
              <p class="mb-[36px] text-[#3A4268] rubik-font text-[15px]">We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way</p>
             <router-link to="/aboutus"><button class="rounded-[50px] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">Pogledaj Više</button></router-link> 
            </div>
            <div class="w-[50%]">
              <img src="../../assets/home/našavizija-home.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-[5px]">
            </div>
        </tab>
    </tabs>
</div>
      </div>
    </div>
    
    <div class="w-full flex justify-center items-center py-18 pb-32 ">
      <div class="flex w-[880px] justify-center flex-col items-center max-[1100px]:w-full max-[1100px]:px-8 max-[920px]:px-2">
        <div class="flex w-full justify-between items-center max-[920px]:flex-col">
          <div class="max-[920px]:flex max-[920px]:flex-col max-[920px]:items-center">
            <p class="rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"> <img src="../../assets/home/stars-aboutus-home.svg" alt="" class="w-[34px]"> Why choose us?</p>
            <p class="text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[920px]:text-center">For our best quality <small class="font-normal mb-[14px]">you have chosen us</small></p>
          </div>
          <p class="w-[430px] text-[#3A4268] rubik-font max-[920px]:text-center max-[920px]:w-[90%]">Our agency can only be as strong as our people & because of this, our team have designed game changing products</p>
        </div>
        <div class=" flex w-[1280px]  max-[1270px]:w-full  mt-12 justify-between px-4 max-[660px]:items-center max-[660px]:gap-[2em] max-[660px]:w-full max-[920px]:flex-col max-[920px]:justify-center max-[920px]:items-center max-[920px]:gap-20">
          <div class="mb-[3px] flex justify-center flex-col items-center text-center max-[920px]:flex max-[920px]:flex-row   max-[920px]:justify-center max-[920px]:items-center max-[660px]:gap-[1em] max-[530px]:flex-col ">
              <div class="flex justify-center items-center bg-[#F1F3F8] w-[100px] h-[100px] mb-8  rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/plants-aboutus-home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold pb-[17px] mb-[14px] small-line-responsive2 max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0">House Cleaning</p>
                    <p class="w-[60%]">As a app web crawler expert, I help organizations adjust to the expanding significance of internet.</p>
            </div>

            <div class="mb-[3px] text-center flex justify-center flex-col items-center max-[920px]:flex max-[920px]:flex-row max-[660px]:gap-[1em] max-[920px]:justify-center max-[920px]:items-center max-[530px]:flex-col">
              <div class="flex justify-center items-ccenter bg-[#F1F3F8] w-[100px] h-[100px] mb-8 rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/plants-aboutus-home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold pb-[17px] mb-[14px] small-line-responsive2 max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0">House Cleaning</p>
                    <p class="w-[60%]">As a app web crawler expert, I help organizations adjust to the expanding significance of internet.</p>
            </div>

            <div class="mb-[3px] text-center flex justify-center flex-col items-center max-[920px]:flex max-[920px]:flex-row max-[660px]:gap-[1em] max-[920px]:justify-center max-[920px]:items-center max-[530px]:flex-col">
              <div class="flex justify-center items-center bg-[#F1F3F8] w-[100px] h-[100px] mb-8  rounded-[50%] box-shadow-aboutusimg">
                          <img src="../../assets/home/plants-aboutus-home.svg" alt="" class="w-[50px]">
                    </div>
                    <p class="text-[#082680] text-[22px] font-bold pb-[17px] mb-[14px] small-line-responsive2 max-[920px]:mx-4 max-[530px]:pb-0 max-[530px]:mb-0">House Cleaning</p>
                    <p class="w-[60%]">As a app web crawler expert, I help organizations adjust to the expanding significance of internet.</p>
            </div>
        </div>
        <button class="rounded-[50px] mt-[4em] px-[26px] text-[15px] font-bold text-white bg-[#0431b8] leading-[48px] tracking-[2px]">Pogledaj Više</button>
      </div>
    </div>

       <kontaktbottom/>
  </div>
</template>

<script setup>
import aboutussection from "./components/aboutus-services.vue"
 import kontaktbottom from "./components/contact-bottom.vue"
</script>

<script>
import {Tabs, Tab} from 'vue3-tabs-component';

export default{
  components:{
    Tabs,
    Tab
  }
}

</script>

<style>
.tabs-component-tabs{
  border: 0;
   display: flex;
   justify-content:space-between;
   margin-bottom: 33px;
    border-bottom: 1px solid #eaebec;
}
.tabs-component{
  width: 100%;
  
}
.tabs-component-tab-a{
  font-weight: 600;
    font-size: 20px;
    color: #0826808A;
 padding:0 20px 10px;
 text-align: center;
 cursor: pointer;
}
.is-active{
 color:#082680;
}
@media only screen and (max-width: 470px) {
  .tabs-component-tabs{
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 0;
}
.tabs-component-tab{
 padding:20px 0;
 border-bottom: 1px solid #eaebec;
 width: 100%;
}
}
.small-line::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 3.2em;
}
.cssdottedborder{
  width: 80px;
  height: 80px;
  padding: 7px;
  border-radius: 50%;
  border: 2px dashed #000E39;
  box-shadow: 0 0 0 4px #fff;
}
.box-shadow-aboutus{
  -webkit-box-shadow: 0px 1px 23px -1px #007dfb34; 
box-shadow: 0px 1px 23px -1px #007dfb44;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@media only screen and (max-width: 1100px) {
  .bg-linear-css{
  background: #007CFB !important;
}
}
@media only screen and (max-width: 920px) {
  .small-line-responsive2::before{
  content: none !important;
}
}


.box-shadow-aboutusimg{
  -webkit-box-shadow: 0px 23px 0px 0px #007CFB; 
box-shadow: 0px 23px 0px 0px #007CFB;
}


.small-line-responsive2::before{
  content: '';
    width: 28px;
    height: 3px;
    background-color: #007cfb;
    position: absolute;
    margin-top: 2em;
    margin-left: 3.2em;
}

::placeholder{
  color:white;
}
.rubik-font{
    font-family: 'Rubik', sans-serif !important;
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

