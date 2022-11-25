const { createApp } = Vue;

createApp({
    data(){
        return{
            message : "Hello World!",
            sourceImg : "https://i.picsum.photos/id/486/300/300.jpg?hmac=cn9aLv_SbYBBugoObhGsWSZINx1MLBEM2inEFST1Ixo"
        }
    }
}).mount("#app")