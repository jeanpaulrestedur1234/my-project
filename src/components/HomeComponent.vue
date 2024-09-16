<template>
  <div class="container">
      <appNewquote @quoteAdded="NewQuote"></appNewquote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      
  </div>
  
  </template>
  <script>
  import QuoteGrid from './Quotes/QuoteGrid.vue';
  import NewQuote from './Quotes/NewQuote.vue';
  export default{
      data: function(){
          return{
              quotes:[
                  'just a quote'
              ],
              maxQuotes:10
          }
      },
      methods:{
        NewQuote(quote){
          this.quotes.push(quote)


        }

      },
      components:{
          appQuoteGrid:QuoteGrid,
          appNewquote:NewQuote
      }
  }
  
  </script>