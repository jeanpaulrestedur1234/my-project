<template>
    <div class="row">
        <app-quote  
        v-for="(quote, index) in quotes" 
        :key="index"  
        @click="deleteQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
import QuoteComponent from './QuoteComponent.vue';
export default {
    props: ['quotes'],
    components: {
        appQuote: QuoteComponent  // Nombre del componente en kebab-case
    },
    methods:{

        deleteQuote(index){
            
            this.$emit('quoteDeleted', index)


        }
    }
}
</script>

<style></style>
