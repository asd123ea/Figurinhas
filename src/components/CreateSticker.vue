<template>
    <div class="container">
        <h1 class="text-center">Create Sticker</h1>
        <hr>
        <a href="javascript:history.go(-1)" class="btn btn-primary">Back</a>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'CreateSticker',
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.load()
    },
    methods: {
        load() {
            this.defineMocks()
        },
        defineMocks() {

            if(!this.users.length) {
                this.users.push({ name: 'Bruno Galvão', email: 'bruno@email.com', password: 'Admin123@', avatar: ''})
                this.users.push({ name: 'Victor Galvão', email: 'victor@email.com', password: 'Admin123@', avatar: ''})
                this.users.push({ name: 'ian da Silva', email: 'ian@email.com', password: 'Admin123@', avatar: ''})
                this.users.push({ name: 'Talitha Policarpo', email: 'talitha@email.com', password: 'Admin123@', avatar: ''})
            }
        },
    },
}
</script>
<style>
</style>

