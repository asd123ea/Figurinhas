<template>
    <div class="container">
        <h1 class="text-center">Sticker List</h1>
        <table class="table table-sm table-bordered">
            <thead>
                <tr>
                    <th width="50%">Number</th>
                    <th width="50%">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sticker in stickers" :key="sticker.number">
                    <td>
                        <router-link :to="{ name: 'Sticker', params: { number: sticker.number } }">{{ sticker.number }}</router-link>
                    </td>
                    <td>{{ sticker.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'Stickers',
    data() {
        return {
            stickers: [],
        }
    },
    created() {
        this.defineMocks()

        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
        .then((res) => {
            // this.stickers = res.data
        })
        .catch((err) => alert(err))
        .finally()
    },
    methods: {
        defineMocks() {
            if(!this.stickers.length) {
                this.stickers.push({ number: 50, name: 'Ramiro Funes Mori',
                    total: 11, img: 'https://www.gletech.com/StockPhotos/Soccer/2018/134010/front_6512026.jpg' })
                this.stickers.push({ number: 51, name: 'Yahya Al-Shehri', 
                    total: 15, img: 'https://images-na.ssl-images-amazon.com/images/I/51PSz44ItzL._SY445_.jpg' })
                this.stickers.push({ number: 52, name: 'Paolo Guerrero', 
                    total: 81, img: 'https://images-na.ssl-images-amazon.com/images/I/51V%2BMpz0wbL._SY445_.jpg' })
                this.stickers.push({ number: 53, name: 'Lionel Messi', 
                    total: 61, img: 'https://i.ebayimg.com/images/g/olEAAOSwACRapeGm/s-l300.jpg' })
                this.stickers.push({ number: 54, name: 'James Rodriguez', 
                    total: 31, img: 'https://www.coleka.com/media/item/201804/08/fifa-world-cup-russia-2018-james-rodriguez-colombia-643.jpg' })
                this.stickers.push({ number: 61, name: 'Manuel Neuer', 
                    total: 25, img: 'https://i.pinimg.com/originals/6b/5a/25/6b5a256be855a8230dc1269927ce8897.jpg' })
                this.stickers.push({ number: 62, name: 'Cristiano Ronaldo', 
                    total: 66, img: 'https://www.coleka.com/media/item/201804/02/fifa-world-cup-russia-2018-cristiano-ronaldo-portugal-130.jpg' })
                this.stickers.push({ number: 69, name: 'Edinson Cavani', 
                    total: 74, img: 'https://i.pinimg.com/originals/e9/ea/79/e9ea796f73d6e1b503dae131d5ef17c1.jpg' })
            }
        }
    },
}
</script>

