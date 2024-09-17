<template>
    <div class="container">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Animations</h1>
            <hr>
            <button class="btn btn-primary" @click="show=!show">alert</button>
  
            <div class="alert alert-info" v-if="show">some info</div>

        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            show:false
        }
    }

}
</script>
<style>
.container{
    text-align: left;
}

</style>