<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>

            </div>
        </div>
    </div>
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


    components:{
        appList:ListComponent

    }

}

</script>
<style></style>