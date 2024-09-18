<template>
    <div class="col-sm6 col-md-4 col-lg-6">
        <div class ="panel panel-default">
            <div class="panel-body quote">
                <slot> </slot>
        
            </div>


        </div>


    </div>
</template>

<script>
export default{

    
}
</script>

<style>
 .panel-body{

    font-family: 'Arizonia', cursive;
    font-size: 16px;
    color: #070707;
    background-color: rgb(206, 206, 206);
    min-height: 80px; /* Altura mínima para crecer verticalmente */   
    border-radius: 8px;
    word-wrap: break-word; /* Permitir que las palabras se ajusten dentro del contenedor */
    word-break: break-word; /* Romper las palabras largas si es necesario */
    align-content: center;
    

  
    
 
 }
 .panel {
    margin-bottom: 20px; /* Espacio entre paneles */
    opacity:0.5;
}


 .quote{
    cursor: pointer;
  
    
 }
 .quote::hover {
    background-color: rgb(191, 245, 155);


 }
</style>