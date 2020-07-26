<template>
  <el-row>
    <el-col :span="6">
      <draggable
        element="div"
        :list="list"
        :component-data="collapseComponentData"
        :sort="false"
        :options="dragOptions1"
      >
         <component v-for="component in list" 
            :key="component.index" 
            :is="component.componentName" 
            :my-data="component.componentData">
        </component>
      </draggable>

    </el-col>

     <el-col :span="6" > 
              <draggable
                element="div"
                class="grid-content bg-purple"
                :list="listRight"
                :component-data="collapseComponentData"
                :sort="false"
                :options="dragOptions2"
            >
             <component v-for="component in listRight" 
            :key="component.index" 
            :is="component.componentName" 
            :my-data="component.componentData">
           </component>

              </draggable>
    </el-col>

    
  
  </el-row>
</template>

<script>


import "element-ui/lib/theme-chalk/index.css";
import draggable from "vuedraggable";
import MyButton from './MyButton.vue'
import MyList from './MyList.vue'


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



export default {
  name: "third-party",
  display: "Third party",
  order: 10,
  components: {
    draggable,
    MyButton,
    MyList
  },
  data() {
    return {
      list: [],
      listRight:[],
      activeNames: [1],
      collapseComponentData: {
        on: {
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      }
    };
  },
  methods: {
    inputChanged(val) {
      this.activeNames = val;
    }
  },
   computed: {
            dragOptions1() {
                return {
                    animation: 0,
                    group: {
                        name: "description",
                        pull: 'clone',
                        put: false
                    },
                    ghostClass: "ghost",
                };
            },
            dragOptions2(){
                return {
                    animation: 0,
                    group: "description",
                };
            }
        },
    created(){
        this.$data.list=callbackData.componentList;
    }
};
</script>
<style scoped>

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
    height: 500px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>