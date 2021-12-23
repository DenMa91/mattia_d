<template>
  <section class="container iconSection">
      <div class="row justify-content-center align-items-center vh-100 icons">
          <div class="col-6 col-md-2 d-flex justify-content-center align-items-center">
              <a class="icon" target="blank" href="https://wa.me/393487934801"><div class="d-flex align-items-center justify-content-center icon-div1 zoom">
                <i class="fab fa-whatsapp fa-5x"></i>
              </div></a>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center align-items-center">
              <a class="icon" target="blank" href="https://www.linkedin.com/in/mattia-denegri-developer/"><div class="d-flex align-items-center justify-content-center icon-div2 zoom">
                <i class="fab fa-5x fa-linkedin-in"></i>
              </div></a>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center align-items-center">
              <a class="icon" target="blank" href="https://github.com/DenMa91"><div class="d-flex align-items-center justify-content-center icon-div3 zoom">
                <i class="fab fa-5x fa-github-alt"></i>
              </div></a>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center align-items-center">
              <a class="icon" target="blank" href="https://www.facebook.com/mattia.denegri.9/"><div class="d-flex align-items-center justify-content-center icon-div4 zoom">
                <i class="fab fa-5x fa-facebook-f"></i>
              </div></a>
          </div>
      </div>
  </section>
</template>

<script>
import gsap from "gsap"
export default {
    mounted() {
        gsap.fromTo(".icons", {scale:6}, {scale:1, ease:'power2.out', duration:2})
    },

    methods: {
      
    },
}
</script>

<style>
section{
  overflow: hidden ;
}

    :root {
  --bg: #ffffff;     
  --color-icon: #535c68;  
  --social-icon1: #42b983;
  --social-icon2: #3e5af8;
  --social-icon3: #322b36;
  --social-icon4: #3b5999;
}

.icon-div1{
  background-color:white;
  padding:30px 35px;
  border-radius: 50%;
  transition:0.6s;
  cursor: pointer;
}

.icon-div2{
  background-color:white;
  padding:30px 35px;
  border-radius: 50%;
  transition:0.6s;
  cursor: pointer;
}

.icon-div3{
  background-color:white;
  padding:30px 35px;
  border-radius: 50%;
  transition:0.6s;
  cursor: pointer;
}

.icon-div4{
  background-color:white;
  padding:30px 45px;
  border-radius: 50%;
  transition:0.6s;
  cursor: pointer;
}

.icon-div1:hover{
  background-color:var(--social-icon1);
  color: white;
  
}

.icon-div2:hover{
  background-color:var(--social-icon2);
  color: white;
  
}

.icon-div3:hover{
  background-color:var(--social-icon3);
  color: white;
  
}

.icon-div4:hover{
  background-color:var(--social-icon4);
  color: white;
  
}

.icon{
      text-decoration: none;
      color: inherit;
 }

</style>