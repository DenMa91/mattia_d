<template>
  <section class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 p-5 CvPhoto">
        <img class="img-fluid" src="../assets/myphoto.png" alt="foto curriculum">
      </div>
      <div class="col-12 col-md-6 mb-3 text-center CvData">
        <h1>Mattia Denegri</h1>
        <h4>Nato a Busto Arsizio il 14/11/1991</h4>
        <h4>cell: +39 3487934801</h4>
        <h5>mail: mattia.denegri@gmail.com</h5>
        <h4 class="mt-5"><a href="https://www.linkedin.com/in/mattia-denegri-developer/"><i class="fab fa-linkedin"></i> Profilo Linkedin</a></h4>
        <h4><a href="https://github.com/DenMa91/"><i class="fab fa-github-square"></i> Profilo GitHub</a></h4>
      </div>
      <div class="col-12 line"></div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-12 my-4">
        <p class="fs-4">Sono un Junior <strong>Full Stack Developer</strong> creativo e socievole, con la passione per il coding e l’obiettivo imparare nuovi linguaggi e di tenermi aggiornato sulle nuove tecnologie.</p> <p class="fs-4 my-4">So utilizzare i linguaggi <strong>HTML, CSS, JavaScript e PHP</strong> utilizzando il Framework Laravel.<br>So inoltre utilizzare i database <strong>MySql tramite l’ORM Eloquent</strong>.</p> <p class="fs-4 my-4">Mi piacerebbe lavorare in un’azienda che punti alla crescita personale e professionale dei propri dipendenti e che applichi <strong>metodologie Agili</strong></p>
      </div>
      <div class="col-12 line mb-5"></div>
        <h2 class="display-4 text-center mt-5">Esperienza</h2>
      <div class="col-md-4 col-12 d-flex align-items-center justify-content-center">
        <img class="img-fluid aulab" src="../assets/aulab.png" alt="">
      </div>
      <div class="col-md-8 col-12 my-4">
        <p class="fs-3 fw-bold">SETTEMBRE 2021 – DICEMBRE 2021</p>
        <h3 class="display-6">BOOTCAMP PROGRAMMAZIONE, AULAB SRL</h3>
        <p class="fs-4">L’Hackademy di Aulab è un bootcamp di programmazione incentrato sull’insegnamento del web development utilizzando metodologie agili. Tutto ciò che è stato appreso appreso è stato messo in pratica durante il progetto finale, che consiste nella creazione di un sito web di annunci, utilizzando i linguaggi imparati durante il corso e applicando la metodologia Agile SCRUM.</p>
      </div>
      <div class="col-md-4 col-12 d-flex align-items-center justify-content-center order-md-last pt-5">
        <img class="img-fluid presto" src="../assets/presto.png" alt="">
      </div>
      <div class="col-12 col-md-8 my-4 mt-5 pt-5">
        <p class="fs-3 fw-bold">DICEMBRE 2021</p>
        <h3 class="display-6">PROGETTO PRESTO.IT, AULAB SRL</h3>
        <p class="fs-4">presto.it è un sito di annunci creato da un team di 5 persone applicando metodologie agili, nello specifico SCRUM.
          Il progetto consiste in un sito di annunci basato sul framework Laravel. Il front end è stato gestito con HTML5, CSS3 (framework Bootstrap) e JavaScript. Per il back end abbiamo sfruttato Laravel per la gestione del CRUD ed il suo ORM Eloquent per la gestione del database relazionale MySql. Per la gestione delle immagini caricate dall’utente abbiamo sfruttato dei Jobs Asincroni, e grazie alla libreria Spatie, ed alle API di Google, abbiamo potuto effettuare il ridimensionamento automatico, l’applicazione di un watermark, il riconoscimento dei volti, e l’analisi dei contenuti.</p>
      </div>
    </div>
      <div class="col-12 line mt-5"></div>
      <h2 class="display-4 text-center mt-5">Istruzione</h2>
      <div class="row">
        <div class="col-12 col-md-6 text-center justify-content-center mt-5">
        <img class="img-fluid logo" src="../assets/ite-tosi.png" alt="ITE-tosi">
          <p class="fs-2 fw-bold">Anno Scolastico 2010-2011</p>
          <h3 class="display-6">ITC E. Tosi, Busto Arsizio (VA)</h3>
          <p class="fs-4">Perito aziendale e corrispondente in lingue estere</p>
        </div>
        <div class="col-12 col-md-6 text-center justify-content-center mt-5">
        <img class="img-fluid logo" src="../assets/uninsubria.jpg" alt="ITE-tosi">
          <p class="fs-2 fw-bold">dal 2013 al 2015</p>
          <h3 class="display-6">Università degli studi dell' Insubria</h3>
          <p class="fs-4">Economia e Management</p>
          <p class="fs-6">studi sospesi</p>
        </div>
        <div class="col-12 line mt-5"></div>
      </div>
  </section>
  <skills class="mt-5 pt-5"/>
  <section class="container mt-5">
    <div class="row py-5">
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-custom" @click="contacts"><h3 class="display-3"><i class="fas fa-phone me-3"></i>Contattami</h3></button>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import skills from '../components/skills.vue'

export default {
  components:{skills},
  mounted() {
    gsap.fromTo('.CvData', {x:100, opacity:0},{x:0,opacity:1, ease:'power2.out', duration:2, delay:0.5})
    gsap.fromTo('.CvPhoto', {x:-100, opacity:0},{x:0,opacity:1, ease:'power2.out', duration:1.5})
  },
  methods: {
    contacts(){
          this.$router.push('Contacts')
        }
  },
}
</script>

<style scoped>
  section{
    overflow-x: hidden;
  }

  a{
    color: black;
    text-decoration: none;
  }

  a:hover{
    color: #42b983;
  }

  .line{
    border-top: 2px solid #42b983;
  }

  .aulab{
    max-height: 300px;
  }

  .presto{
    border-radius: 20px;
  }

  .logo{
    max-height: 150px  ;
  }

  .btn-custom{
    padding: 10px 20px;
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
