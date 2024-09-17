<template>
    <div>
        <h1>Filters & Mixins</h1>
        <p>{{ text }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
    </div>

</template>
<script>
import { fruitMixin } from './fuitMixin';
export default {
    
    mixins: [fruitMixin]

}

</script>
<style>


</style>