<template>
    <div class="container">
        <h1 class="text-center">Home</h1>
        <hr>
        <!-- data-interval="false" -->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-7 text-center" style="height: 555px;">
                            <img src="http://d26lpennugtm8s.cloudfront.net/stores/563/424/products/worldcup2018-copia1-8b403edc9d71f10dba15243440203920-640-0.png" alt="" style="height: 555px;">
                        </div>
                        <div class="col d-flex" style="height: 555px;">
                            <div class="justify-content-center align-self-center">
                                <h3>Create your stickers</h3>
                                <p>You can create your own custom stickers <a href="">click here</a> to know more about it</p>
                                <router-link class="btn btn-primary" :to="{ name: 'CreateSticker' }">Create sticker</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-7 d-flex" style="height: 555px;">
                            <div class="align-self-center">
                                <img src="https://i.ebayimg.com/images/g/U6MAAOSwMzVTwz8z/s-l300.gif" alt="">
                            </div>
                        </div>
                        <div class="col d-flex" style="height: 555px;">
                            <div class="justify-content-center align-self-center">
                                <h3>Check your sticker list</h3>
                                <p>Here is the list of stickers, click here to know more about it</p>
                                <router-link class="btn btn-primary" :to="{ name: 'Stickers' }">Sticker list</router-link>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <br>
        <hr>
        <br>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: 'Home',
        data() {
            return {}
        },
        created() {
            this.load()
        },
        methods: {
            load() {},
            defineMocks() {},
        },
    }
</script>

<style>
    .carousel-indicators li.active {
        background: #003698;
    }
    
    .carousel-indicators li {
        background: #556582;
    }
</style>
