<template>
    <div class="row">
        <app-quote  
        v-for="(quote, index) in allQuotes" 
        :key="index"  
        @click="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
import QuoteComponent from './QuoteComponent.vue';
export default {
    
    components: {
        appQuote: QuoteComponent  // Nombre del componente en kebab-case
    },
    computed: {
    allQuotes() {
      return this.$store.getters.allQuotes; // Obtener las citas desde Vuex
    }
    },
    methods:{

        deleteQuote(index){
            
            this.$store.dispatch('deleteQuote', index);


        }
    }
}
</script>

<style>
.row{
    text-align: center;

}

</style>
