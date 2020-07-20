<template>
    <div>
        <List  :border="config.border" :item-layout="config.itemLayout" :size="config.size" :split="config.split">
            <ListItem v-for="item in items" :key="item.index">
                <ListItemMeta :title="item.title" :description="item.description"></ListItemMeta>
            </ListItem>
        </List>
    </div>
</template>
<script>
    export default {
        name:'MyList',
        props:{
            myData:null
        },
        data () {
            return {
              config:{
                  border:false,
                  itemLayout:"vertical",
                  size:"default",
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
                  },
                   {
                      index:5,
                      title:"标题",
                      description:"这是一段描述"
                  }
              ]
            }
        },
        methods:{
          
        },
        created(){
            this.$data.config=this.$props.myData.config;
            this.$data.items=this.$props.myData.items;
        }
    }
</script>