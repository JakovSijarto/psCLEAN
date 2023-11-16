<template>
    <div class="pt-[112px] max-[571px]:pt-[81px]">   
        <div class=" w-full flex justify-center items-center bg-black">
            <img src="../../assets/home/herosec_about_kontakt.jpg" alt="" class="h-[300px] w-full object-cover opacity-[0.4]">
            <p class="absolute text-[60px] font-bold text-white max-[310px]:text-[40px] tracking-[5px]">KONTAKT</p>
        </div>
    </div>

    <section class="h-[50em] w-full relative z-3 flex justify-center items-center max-[630px]:h-[60em]">
        <form ref="form" @submit.prevent="sendEmail " class="w-[1200px] mx-8 max-[1350px]:w-full">
          <p class="font-bold mb-[50px] leading-[3rem] text-[#3A4268] text-[3em] font-extrabold max-[360px]:text-[2em] ">Kontaktirajte nas.</p>
          <div class="flex justify-between max-[630px]:flex-col ">
            <div class="w-[49%] max-[630px]:w-full">
              <input type="text" name="ime" placeholder="Ime" class="" required v-model="ime">
            </div>
            <select class="w-[49%] max-[630px]:w-full border-b-2 border-[#3A4268] py-[15px] max-[630px]:pt-[25px]">
                <option value="" disabled selected hidden>Izaberi uslugu*</option>
                <option value="">Čiśćenje privatnih stanova/kuća</option>
                <option value="">Čiśćenje poslovnih prostora</option>
              <option value="">Održavanje biljaka</option>
            </select>
          </div>
          <div class="flex justify-between max-[630px]:flex-col">
            <div class="w-[49%] max-[630px]:w-full my-[1rem]">
              <input type="email" name="email" placeholder="Email" required v-model="email">
            </div>
            <div class="w-[49%] max-[630px]:w-full my-[1rem] max-[630px]:mb-[16px] max-[630px]:mt-[0px]">
              <input type="tel" name="telefon" placeholder="Telefon" required v-model="telefon">
            </div>
          </div>
            <textarea name="poruka" placeholder="Poruka za nas!" v-model="poruka" class="mt-[30px] p-[15px] min-h-[200px] text-[white] bg-transparent max-h-[250px] mb-[1rem]"></textarea>
            <input type="submit" value="Send" class="float-right h-[50px] cursor-pointer max-[630px]:!w-full">
        </form>
       </section>

    <kontaktbottom/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89850.5298313243!2d19.69355501819797!3d45.27146619398524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad%2C%20Srbija!5e0!3m2!1shr!2shr!4v1699521658252!5m2!1shr!2shr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<script setup>
import kontaktbottom from "./components/contact-bottom.vue"
</script>

<style scoped>

input {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.display-input { display: inline-block; }
.display-input2 { display: none; }

@media (max-width: 320px) { 
  .display-input { display: none; }
  .display-input2 { display: inline-block; 
  width: 100%;}
}
label {
  float: left;
  color:#3A4268;
}

input, textarea {
  width: 100%;
  resize: vertical;
  border: 2px solid #3A4268;
}
input[type=submit] {
  font-size: 15px;
  border:2px solid #3A4268;
  color: #3A4268;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 200px;
  padding: 12px 35px;
  transition: 0.6s all ease-in;
}

input[type=text],[type=email],[type=tel]{
  color: #3A4268;
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #3A4268;
}
</style>