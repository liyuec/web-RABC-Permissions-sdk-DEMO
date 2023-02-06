<template>
  <div class="vue2" >
      <div>
            <h3>btn 区域</h3>
        <button  v-for="(item,index) in btn"  :key="index" 
       
          :id="`btn_id_${index}`"  :class="`btn_class_${index}  classDiv`">
          btn Name {{index}}
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vuepage1',
  data(){
     return {
      btn:50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .classDiv{display:none!important;}
</style>
