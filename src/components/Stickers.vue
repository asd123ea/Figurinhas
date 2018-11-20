<template>
    <div class="container">
        <h1 class="text-center">Sticker List</h1>
    
        <form>
            <fieldset>
                <legend>Filtro</legend>
                <div class="row">
                    <div class="col">
                        <div>
                            <input @keyup="filterSticker()" v-model="filter" type="text" class="form-control" placeholder="number">
                        </div>
                    </div>
    
                    <!-- <div class="col">
                                    <div>
                                        <input v-model="repository" type="text" class="form-control" placeholder="name">
                                    </div>
                                </div> -->
                </div>
            </fieldset>
        </form>
    
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
        <a href="javascript:history.go(-1)" class="btn btn-primary">Back</a>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'Stickers',
        data() {
            return {
                stickers: [],
                unfilterStickers: [],
                filter: '',
            }
        },
        created() {
            this.load()
        },
        methods: {
            load() {
                // remove when api were ready
                this.defineMocks()
                this.getStickers()
    
            },
            defineMocks() {
                if (!this.stickers.length) {
                    this.stickers.push({
                        number: 50,
                        total: 11
                    })
                    this.stickers.push({
                        number: 51,
                        total: 15
                    })
                    this.stickers.push({
                        number: 52,
                        total: 81
                    })
                    this.stickers.push({
                        number: 53,
                        total: 61
                    })
                    this.stickers.push({
                        number: 54,
                        total: 31
                    })
                    this.stickers.push({
                        number: 61,
                        total: 25
                    })
                    this.stickers.push({
                        number: 62,
                        total: 66
                    })
                    this.stickers.push({
                        number: 69,
                        total: 74
                    })
                    this.unfilterStickers = this.stickers
                }
            },
            getStickers() {
                const url = 'https://jsonplaceholder.typicode.com/posts'
                axios.get(url)
                    .then((res) => {
                        // this.stickers = res.data
                    })
                    .catch((err) => alert(err))
                    .finally()
            },
            filterSticker() {
                if (this.filter) {
                    let filteredStickers = []
                    for (var i = 0; i < this.stickers.length; i++) {
    
                        if (this.stickers[i].number.toString().indexOf(this.filter.toString()) > -1) {
                            filteredStickers.push(this.stickers[i])
                        }
                    }
                    this.stickers = filteredStickers
                } else {
                    this.stickers = this.unfilterStickers
                }
            },
            clear() {
    
            },
        },
    }
</script>

<style>
    fieldset {
        border-radius: 5px;
        border: 1px solid #ddd !important;
        padding: 0 1.4em 1.4em 1.4em !important;
        margin: 0 0 1.5em 0 !important;
    }
    
    legend {
        font-size: 1.2em !important;
        font-weight: bold !important;
        text-align: left !important;
        width: auto;
        padding: 0 10px;
        border-bottom: none;
    }
</style>
