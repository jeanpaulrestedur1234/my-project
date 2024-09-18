export const fruitMixin = {

    data() {
        return {
            fruits: ['Aple', 'Banana', "Mango", "Melon"],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);

            })
        }

    }

}