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
                this.stickers.push({ number: 50, total: 11 })
                this.stickers.push({ number: 51, total: 15 })
                this.stickers.push({ number: 52, total: 81 })
                this.stickers.push({ number: 53, total: 61 })
                this.stickers.push({ number: 54, total: 31 })
                this.stickers.push({ number: 61, total: 25 })
                this.stickers.push({ number: 62, total: 66 })
                this.stickers.push({ number: 69, total: 74 })
            }
        }
    },
}
</script>

