<template>
    <div class="container">
        <h1>O resto é buraco</h1>
        <h2>Sticker Number #{{ this.$route.params.number }}</h2>
        <a href="javascript:history.go(-1)" class="btn btn-primary">Back</a>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name: 'Sticker',
    data() {
        return {
        }
    },
}
</script>

