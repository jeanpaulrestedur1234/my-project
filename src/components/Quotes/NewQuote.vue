<template>
    <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
            <label>Quote</label>
            <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <br>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
            <button class="btn btn-primary" @click.prevent="CreateNew">Add Quote</button>
        </div>
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