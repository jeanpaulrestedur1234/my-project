<template>

  
    <app-list></app-list>

</template>
<script>
import { fruitMixin } from './filters/fuitMixin';
import ListComponent from './filters/ListComponent.vue';

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