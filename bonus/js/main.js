const { createApp } = Vue;

createApp({
    data(){
        return{
            message : "Hello World!",
            sourceImg : "https://unsplash.it/600/600?image",
            filter : "filter",
            color : ""
        }
    },
    methods: {
        onClickImg: function(){
            if (this.filter === "filter"){
                this.filter = "filter2";
            } else{
                this.filter = "filter";
            };
        },
        onClickText: function(){
            if (this.color === "rosso"){
                this.color = "verde"
            } else{
                this.color = "rosso"
            }
        }
    }
}).mount("#app");