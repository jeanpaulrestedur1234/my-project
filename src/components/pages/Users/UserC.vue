<template>
    <h1>Usuarios</h1>
    <hr>

    
    <button class="btn btn-primary" @click="navigateTohome">go home</button>
    <br><br>
    <router-view></router-view>
</template>
<script>
export default{
    data(){
        return{
            id: this.$route.params.id

        }
        

    },
    watch:{
        '$route'(to){
            this.id=to.params.id
        }


    },

    methods:{

        navigateTohome(){
            this.$router.push({path:'/'})
        }
    }
}


</script>