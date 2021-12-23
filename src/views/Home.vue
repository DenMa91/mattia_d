<template>
  <section class="wrapper">
    <section class="container" @scroll="scrollUp">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 d-flex justify-content-center align-items-center flex-column vh-100">
          <img class="img-fluid logo" src="../assets/logobk.png" alt="logo Mattia Denegri">
        <span class="arrowDown mt-5">
          <i class="fas fa-chevron-down fa-5x"></i>
        </span>
        </div>
      </div>
    </section>
    <transition-group
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
    <skills v-if="scroll > 200"/>
    <dev v-if="scroll > 800"/>
    <creative v-if="scroll > 1300"/>
    <rock v-if="scroll > 1800"/>
    </transition-group>
    <transition
    enter-active-class="animated slideInRight">
    <div class="row py-5" v-if="scroll > 2000">
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-custom" @click="contacts"><h3 class="display-3"><i class="fas fa-phone me-3"></i>Contattami</h3></button>
      </div>
    </div>
    </transition>
    <div class="vh-1000" v-if="scroll <= 2000"></div>
  </section>
</template>


<script>
import Skills from '../components/skills.vue'
import dev from '../components/dev.vue'
import creative from '../components/creative.vue'
import rock from '../components/rock.vue'
import gsap from 'gsap'

export default {
  components:{Skills, dev, creative, rock},
  data() {
    return {
      skills:[
        {name: 'HTML5', icon: '<i class="fab fa-html5"></i>'},
        {name: 'CSS3', icon: '<i class="fab fa-css3-alt"></i>'},
        {name: 'Bootstrap', icon: '<i class="fab fa-bootstrap"></i>'},
        {name: 'JavaScript', icon: '<i class="fab fa-js"></i>'},
        {name: 'VueJS', icon: '<i class="fab fa-vuejs"></i>'},
        {name: 'PHP', icon: '<i class="fab fa-php"></i>'},
        {name: 'Laravel', icon: '<i class="fab fa-laravel"></i>'},
        {name: 'GitLab', icon: '<i class="fab fa-gitlab"></i>'},
        {name: 'GitHub', icon: '<i class="fab fa-github"></i>'},
        {name: 'Trello', icon: '<i class="fab fa-trello"></i>'},
      ],
      scroll:0,
    }
  },
  mounted() {
    gsap.to('.arrowDown', {y:-50, repeat:-1, duration:1, ease: 'power2.out'})
    gsap.fromTo('.logo', {scale:6}, {scale:1, duration:3, ease:'power2.out'})
    window.addEventListener('scroll', this.scrollUp)

  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollUp)
  },
  methods: {
        scrollUp(){
            let position = window.scrollY
            this.scroll = position
        },
        contacts(){
          this.$router.push('Contacts')
        }
  },



}
</script>

<style scoped>
  .wrapper{
    overflow-x: hidden;
  }

  .logo{
    height: 60vh;
  }

  .arrowDown{
   transition: 0.4s;
  }

  .vh-1000{
    height: 1000px;
  }

  .btn-custom{
    padding: 10px 40px;
    border:2px solid white;
    border-radius: 100px;
    background-color: #42b983;
    color: white;
  }

  .btn-custom:hover{
    background-color: white;
    border: 2px solid #42b983;
    color: #42b983;
    transition: 0.4s;
  }


</style>

