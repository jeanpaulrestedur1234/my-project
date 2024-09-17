<template>
    <form>

            
            <textarea class="form-control" rows="3" v-model="quote"></textarea>

        <br>

            <button class="btn btn-primary" @click.prevent="CreateNew">Add Quote</button>
 
    </form>
</template>

<script>
export default {
    data: function () {
        return {
            quote: ''
        };
    },
    methods: {
        CreateNew() {
            this.$emit('quoteAdded', this.quote);
            this.quote='';

        }
    }

}


</script>
<style>
form{
    text-align: left
}
button{
    padding: 1%;
    margin-top: 2%;
}
</style>