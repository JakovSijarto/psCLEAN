<template>
    <div class="mx-auto h-[112px] w-full fixed z-[1000] shadow-box max-[570px]:!shadow-none ">
        <nav class="flex items-center w-full justify-center bg-[#000E39] px-4 max-[570px]:hidden">
                <div class="h-[42px] w-[1280px] flex items-center text-white max-[1000px]:w-full">
                    <div class="w-[140px] h-[202px] bg-white rounded-b-lg max-[1000px]:hidden flex justify-center items-center">
                      <img src="../../../assets/logo-no-background.svg" alt="" class="w-[55%] h-full mt-[5em]">
                    </div>
                    <div class="w-full flex justify-start text-[14px] pl-4">
                        <img src="../../../assets/navbar-footer/phone_navbar.svg" alt="" class="w-[20px]">
                        <a class="text-[#c2cdeb] nav-font pl-2" href="tel:+381628680499">062-868-04-99</a>
                        <div class="relative pl-[44px] ml-[44px] nav-before flex flex-row">
                            <img src="../../../assets/navbar-footer/mail_navbar.svg" alt="" class="w-[20px]">
                            <a class="text-[#c2cdeb] nav-font pl-2" href="mailto:psclean906@gmail.com">psclean906@gmail.com</a>
                        </div>
                    </div>
                    <div class="flex justify-end">
                      <a href="https://www.facebook.com/profile.php?id=61552836153409"><img src="../../../assets/navbar-footer/navbar_facebook.svg" alt="" class="w-[15px] mr-4"></a> 
                      <a href="https://www.instagram.com/pscleanbeograd/"><img src="../../../assets/navbar-footer/instagram_navbar.svg" alt="" class="w-[15px]"></a> 
                    </div>
                </div>
        </nav>
        <nav class="bg-[#007CFB] flex items-center w-full justify-center px-4 max-[570px]:bg-white">
            <div class="h-[70px] w-[1280px] flex items-center text-white max-[1000px]:w-full">
                <p class="w-full flex justify-start text-[14px] pl-4 min-[1000px]:hidden">
                  <img src="../../../assets/logo-navbar.png" alt="" class="w-[60px] h-full">
                </p>
                <ul class="flex w-full justify-end text-white font-semibold max-[571px]:hidden gap-[2em]">
                  <router-link to="/"><li>Home</li></router-link>
                    <router-link to="/aboutus"><li>O nama</li></router-link>
                    <router-link to="/kontakt"><li>Kontakt</li></router-link>
                </ul>
                <ul
          class="fixed flex justify-between items-center min-[571px]:hidden z-[101] bg-[white] w-full top-0 left-0 px-[1em] py-[1em]"
        >
          <li class="flex-1" id="navbar_logo">
            <img src="../../../assets/logo-no-background.svg" alt="" class="w-[70px] h-full">
          </li>

          <button
            type="button"
            id="navbar-toggle"
            aria-controls="navbar-menu"
            class="w-[30px] h-[30px] flex justify-between items-center"
            :class="{ active: isActive }"
            @click="showMobile"
          >
            <span
              aria-hidden="true"
              class="bg-[#1f2233] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
              :class="{
                'rotate-45': isActive,
                ' -translate-y-1.5': !isActive,
              }"
            ></span>
            <span
              aria-hidden="true"
              class="bg-[#1f2233] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': isActive }"
            ></span>
            <span
              aria-hidden="true"
              class="bg-[#1f2233] block absolute h-[3px] w-[30px] rounded transform transition duration-500 ease-in-out"
              :class="{
                '-rotate-45': isActive,
                ' translate-y-1.5': !isActive,
              }"
            ></span>
          </button>
        </ul>
        <ul
          @click="showMobile"
          id="hamburger-menu"
          class="fixed w-[60%] h-screen shadow-css text-[#3a4268] text-[15px] font-semibold flex flex-col items-center gap-[3em] min-[571px]:hidden bg-[#Fff] pt-[10vh] z-[999] overflow-hidden right-[140%]"
          :class="{ active: isActive }"
        >
          <li class="" id="navbar_naslovnica">
            <img src="../../../assets/logo-no-background.svg" alt="" class="w-[70px] h-full">
          </li>

          <li class="pt-[2em]" id="navbar_naslovnica">
           Home
          </li>
          <li class="" id="navbar_naslovnica">
            Cjenik
          </li>
          <li class="" id="navbar_naslovnica">
            Kontakt
          </li>
        </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showMobile() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

@media only screen and (max-width: 570px) {
  .shadow-box{
    -webkit-box-shadow: 0; 
box-shadow: 0;
}
}
.shadow-box{
    -webkit-box-shadow: 5px -2px 27px 2px #000000; 
box-shadow: 5px -2px 27px 2px #000000;
}
.nav-font{
    font-family: 'Rubik', sans-serif !important;
}
.nav-before::before{
    content: '';
    border-left: 2px dashed #354062;
    position: absolute;
    top: 0%;
    left: -1px;
    height: 22px;
}
.shadow-css{
    -webkit-box-shadow: 0px 0px 32px -3px #000000; 
box-shadow: 0px 0px 32px -3px #000000;
}
#hamburger-menu {
  top: 50%;
  transform: translate(50%, -50%);
  transition: all 0.4s ease-in-out;
}
.active {
  right: 70%;
  transition: all 0.4s ease-in-out;
}
</style>