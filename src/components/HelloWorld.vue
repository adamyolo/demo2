<template>
  <div>
   <component v-for="component in componentList" 
   :key="component.index" 
   :is="component.componentName" 
   :my-data="component.componentData">
   </component>
  <MyComponent :my-data="componentList[0].componentData" >
  </MyComponent>



  
  </div>
</template>

<script>


var callbackData={
  componentList:[
    {
      index:"1",
      componentName:"MyButton",
      componentData:{
        config:{
              value:"点击",
              type:"info",
              size:"large",
              disabled:false,
              to:"",        
        }
      }
    },
    {
      index:"2",
      componentName:"MyList",
      componentData:{
        config:{
              border:true,
              itemLayout:"horizontal",
              size:"large",
              split:true
        },
        items:[
                {
                  index:1,
                  title:"标题",
                  description:"这是一段描述"
              },
                {
                  index:2,
                  title:"标题",
                  description:"这是一段描述"
              },
                {
                  index:3,
                  title:"标题",
                  description:"这是一段描述"
              },
                {  
                  index:4,
                  title:"标题",
                  description:"这是一段描述"
              }
        ]
      }
    }
  ]
}


import MyButton from './MyButton.vue'
import MyList from './MyList.vue'
import MyComponent from './MyComponent.js'
import draggable from 'vuedraggable'


export default {
  name: 'HelloWorld',
   data () {
     return {
       componentList:null,
     }
   },
  components:{
      MyButton,
      MyList,
      MyComponent,
      draggable
  },
  methods:{

  },
  created(){
     this.$data.componentList=callbackData.componentList;
     console.log(this.$data.componentList)
  }
}
</script>

