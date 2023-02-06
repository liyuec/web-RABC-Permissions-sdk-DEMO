<template>
  <div class="vue1" >
      <h2>vuepage1</h2>
      <div>
        <h3>btn 区域</h3>
        <button  v-for="(item,index) in btn"  :key="index"  :id="`btn_id_${index}`"  :class="`btn_class_${index}`">
          btn Name {{index}}
        </button>
      </div>
      <div>
        <h4>div 区域</h4>
        <div :class="['divclssName',`div_class_${index}`]"  v-for="(item,index) in div"  :key="index"  :id="`div_id_${index}`">
            div Name {{index}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'vuepage1',
  data(){
    return {
      btn:100,
      div:50
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 button{margin:10px 20px;color:red;}
 .divclssName{margin:10px;width:50px;height:20px; display: inline-block; color:blue;}
</style>
