export default{
    name:'MyComponent',
    data(){
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
    render:function(createElement){
        return createElement("Button",this.config.value);
    },
    props:{
        myData:null
    },
    created(){
        this.$data.config=this.$props.myData.config;
    }

}