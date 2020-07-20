<template>
    <Button :type="config.type" :size="config.size" :disabled="config.disabled"  :to="config.to" @click="handleOnClick">{{config.value}}</Button>
</template>
<script>
    export default {
        name:'MyButton',
        props:{
            myData:null
        },
         data () {
            return {
               config:{
                   value:"按钮",
                   type:"default",
                   size:"default",
                   disabled:false,
                   to:"",
                   
               }
            }
        },
        methods:{
            handleOnClick(){
                
            }
        },
         created(){
            this.$data.config=this.$props.myData.config;
        }
    }
</script>