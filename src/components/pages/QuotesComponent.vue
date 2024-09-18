<template>
       <h1>Quotes</h1>
       <hr>

      <appNewquote   @quoteAdded="NewQuote"></appNewquote>
      <br>
      <app-quote-grid   @quoteDeleted="deletequote"></app-quote-grid>
      

  
  </template>
  <script>
  import QuoteGrid from './Quotes/QuoteGrid.vue';
 import NewQuote from './Quotes/NewQuote.vue';
  export default{
      
      methods:{
        NewQuote(quote){
          this.quotes.push(quote)


        },
        deletequote(index){

            this.quotes.splice(index,1)


        }

      },
      components:{
          appQuoteGrid: QuoteGrid,
          appNewquote: NewQuote
      }
  }
  
  </script>