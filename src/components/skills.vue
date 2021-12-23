<template>
  <section class="container">
      <div class="row justify-content-center">
          <div class="col-12 text-center mb-4">
              <h3 class="display-4">Le Mie Competenze</h3>
          </div>
            <div class="col-6 col-md-3 text-center p-4 skill" v-for="skill in skills" :key="skill.name">
                <h3>{{skill.name}}</h3>
                <div v-html="skill.icon"></div>
            </div>
      </div>
  </section>
</template>

<script>

export default {
    data() {
        return {
            skills:[
        {id:1, name: 'HTML5', icon: '<i class="fab fa-6x fa-html5"></i>'},
        {id:2, name: 'CSS3', icon: '<i class="fab fa-6x fa-css3-alt"></i>'},
        {id:3, name: 'Bootstrap', icon: '<i class="fab fa-6x fa-bootstrap"></i>'},
        {id:4, name: 'JavaScript', icon: '<i class="fab fa-6x fa-js"></i>'},
        {id:5, name: 'VueJS', icon: '<i class="fab fa-6x fa-vuejs"></i>'},
        {id:6, name: 'PHP', icon: '<i class="fab fa-6x fa-php"></i>'},
        {id:7, name: 'Laravel', icon: '<i class="fab fa-6x fa-laravel"></i>'},
        {id:8, name: 'GitLab', icon: '<i class="fab fa-6x fa-gitlab"></i>'},
        {id:9, name: 'GitHub', icon: '<i class="fab fa-6x fa-github"></i>'},
        {id:10, name: 'Trello', icon: '<i class="fab fa-6x fa-trello"></i>'},
      ],

      scroll:0
      }
    },
    mounted() {
    },
   
    
}
</script>

<style>

</style>