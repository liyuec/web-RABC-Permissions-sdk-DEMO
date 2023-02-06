<template>
  <div class="hello">
    <h1>index </h1>
    <div style="border:solid 1px red;">
        <ul>
            <li>
              <router-link to="/c/vuepage1" >vuepage1</router-link>
            </li>
            <li>
              <router-link to="/c/vuepage2" >vuepage2</router-link> 
            </li>
        </ul>
    </div>
    <div style="border:solid 1px blue;height:700px;margin:30px 0 0 0; overflow:auto;">
         <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuepage1',
  data(){
    return {

    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
