<template>
  <div id="app">
      <router-view />

    <!--   
    
     -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import {webRabcPermisson,getNewPermissionSimpleDTO,PLAN_ENUM,webRabcPermissionSdkOptions} from 'web-rabc-permissions-sdk'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
     /*  console.log(webRabcPermisson)
       console.log(new getNewPermissionSimpleDTO())
        console.log(PLAN_ENUM)
         console.log(webRabcPermissionSdkOptions) */

      let _permissDTO = new getNewPermissionSimpleDTO();

      let _havePermissArr = [],
      _noPermissArr = [];

      for(let have = 1;have < 40;have++){
        let _permissDTO = new getNewPermissionSimpleDTO();
        _permissDTO.describe = `have des ${have}`;
        _permissDTO.eleIdOrClass = `#btn_id_${have}`
        _permissDTO.resultType = 'hidden'
        _permissDTO.routerPath = '/c/vuepage1'
        _havePermissArr.push(_permissDTO)
      }
       for(let have = 0;have < 10;have++){
        let _permissDTO = new getNewPermissionSimpleDTO();
        _permissDTO.describe = `have des ${have}`;
        _permissDTO.eleIdOrClass = `#btn_id_${have}`
        _permissDTO.resultType = 'hidden'
        _permissDTO.routerPath = '/c/vuepage2'
        _permissDTO.showElemType = 'block'
        _havePermissArr.push(_permissDTO)
      }
      for(let have = 10;have < 20;have++){
        let _permissDTO = new getNewPermissionSimpleDTO();
        _permissDTO.describe = `have des ${have}`;
        _permissDTO.eleIdOrClass = `#btn_id_${have}`
        _permissDTO.resultType = 'hidden'
        _permissDTO.routerPath = '/c/vuepage2'
        _havePermissArr.push(_permissDTO)
      }
       for(let have = 20;have < 30;have++){
        let _permissDTO = new getNewPermissionSimpleDTO();
        _permissDTO.describe = `have des ${have}`;
        _permissDTO.eleIdOrClass = `#btn_id_${have}`
        _permissDTO.resultType = 'hidden'
        _permissDTO.routerPath = '/c/vuepage3'
        _havePermissArr.push(_permissDTO)
      }

        for(let no = 1;no < 90;no++){
        let _noPermissDTO = new getNewPermissionSimpleDTO();
        _noPermissDTO.describe = `no des ${no}`;
        _noPermissDTO.eleIdOrClass = `#btn_id_${no}`
        _noPermissDTO.resultType = 'hidden'
        _noPermissDTO.routerPath = '/c/vuepage1'
       /*  _noPermissDTO.routerPath = '' */
        _noPermissArr.push(_noPermissDTO)
      }



       let _thisDTO = new getNewPermissionSimpleDTO();
        _thisDTO.describe = `this this des 1`;
        _thisDTO.eleIdOrClass = `#btn_id_1`
        //_thisDTO.routerPath = '/c/vuepage1'
        _thisDTO.routerPath = ''
        _thisDTO.vueTemplateRoot = '.vue1'
        _thisDTO.callBackFunc = function(t){
          console.log('this:',this)
          console.log('t:',t);
        }
       /*  _noPermissDTO.routerPath = '' */
        _noPermissArr.push(_thisDTO)

      //console.log('PLAN_ENUM"',PLAN_ENUM)
      webRabcPermissionSdkOptions.havePermiss = _havePermissArr;
      webRabcPermissionSdkOptions.noPermiss = _noPermissArr;

      webRabcPermissionSdkOptions.plan = PLAN_ENUM.OB_SERVER;
      webRabcPermissionSdkOptions.libraryName = 'vue'
      let _webRabc = new webRabcPermisson(webRabcPermissionSdkOptions);
      _webRabc.start({
        millisec:500, 
        obServerConfig:{
                attributes:false,
                childList:true,
                subtree:true,
                characterData:false
            },
        delay:500,
        obElem:'app'
        });

      /*    webRabcPermissionSdkOptions.plan = PLAN_ENUM.SET_TIMEOUT;
      let _webRabc = new webRabcPermisson(webRabcPermissionSdkOptions);
      _webRabc.start({
        millisec:500, 
        obServerConfig:{
                attributes:true,
                childList:true,
                subtree:true,
                characterData:true
            },
        delay:500,
        obElem:'app'
        }); */
      console.dir(_webRabc.getSdkInfo())
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
