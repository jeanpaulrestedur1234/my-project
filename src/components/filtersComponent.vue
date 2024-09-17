<template>

    <h1>Filters & Mixins</h1>
    <p>{{ text }}</p>
    <hr>
    <button class="btn btn-primary " @click="fruits.push('berries')"> Add berries</button>
    <input v-model="filterText">
    <ul>
        <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
    <hr>
    <app-list></app-list>

</template>
<script>

import ListComponent from './Forms components/ListComponent.vue';
import { fruitMixin } from './Forms components/fuitMixin';

export default {
    mixins: [fruitMixin],
    data() {
        return {
            text: 'hello there',

        }
    },


    components: {
        appList: ListComponent

    }

}

</script>
<style></style>