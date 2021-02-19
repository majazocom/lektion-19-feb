const books = [
    {id: 1, title: 'Wheel of time', author: 'Robert Jordan'},
    {id: 2, title: 'Name of the wind', author: 'Patrick Rothfuss'},
    {id: 3, title: 'The wise mans fear', author: 'Patrick Rothfuss'},
    {id: 4, title: 'A study in scarlet', author: 'Sir Arthur Conan Doyle'},
];

new Vue({
    el: '#app',
    data: {
        items: books,
        cartItems: []
    },
    methods: {
        addToCart(itemToAdd) {
            // lägga till item och sedan öka mängden på antalet i vår cart
        }
    }
})

Vue.component('book-cart', {
    props: ['items']
})

