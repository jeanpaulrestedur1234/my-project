<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="index">
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
    }
}
</script>

<style></style>
