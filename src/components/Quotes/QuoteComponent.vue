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
    font-size: 16px;
    color: #796e6e;
    background-color: rgb(197, 197, 212);
    
    border-radius: 8px;
    
 
 }
 .panel {
    margin-bottom: 20px; /* Espacio entre paneles */
}


 .quote{
    cursor: pointer;
    padding: auto;
 }
 .quote::hover {
    background-color: rgb(30, 46, 19);


 }
</style>