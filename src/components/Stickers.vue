<template>
    <div class="container">
        <h1 class="text-center">Lista de figurinhas</h1>
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
            for(var i = 0; i < 10; i++){
                // Math.random() * 21
                // returns a random integer from 0 to 100
                var randomNumber = Math.floor(Math.random() * 101)
                this.stickers.push({ number: 50 + (i + 1), total: randomNumber })
            }
        }
    },
}
</script>

