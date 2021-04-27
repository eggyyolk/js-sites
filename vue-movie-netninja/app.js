const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', img: './assets/1.jpg', isFav: true },
                { title: 'The Little Broomstick', author: 'Mary Stewart', img: './assets/2.jpg', isFav: false },
                { title: 'Dark Witch', author: 'Nora Roberts', img: './assets/3.jpg', isFav: true }

            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent() {
            console.log('event')
        }
    }
})

app.mount('#app')
