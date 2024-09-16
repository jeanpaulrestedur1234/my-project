<template>
    <div class="col-sm6 col-md-4 col-lg-3">
        <div class ="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
        
            </div>


        </div>


    </div>
</template>

<script>
export default{

    props:['quotes']
}
</script>

<style>
 .panel-body{
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #9b4949;
 }

 .quote{
    cursor: pointer;
 }
 .quote::hover {
    background-color: rgb(160, 168, 154);


 }
</style>