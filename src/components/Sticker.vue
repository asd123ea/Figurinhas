<template>
    <div class="container">
        <h1 class="text-center">Sticker Details</h1>
        <hr>
        <h2>Sticker Number #{{ this.$route.params.number }}</h2>
        <hr>
        <h3>Details</h3>
        <p>
            Name: 
            <br>
            {{ this.$route.params }}
        </p>
        <a href="javascript:history.go(-1)" class="btn btn-primary">Back</a>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'Sticker',
    created() {
        console.log(this.showSticker)
    },
    data() {
        return {
            stickers: [],
        }
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

