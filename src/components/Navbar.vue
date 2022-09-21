<template>
    <v-app-bar color="white" app flat>
        <v-badge color="d5f0db" dot>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>

        </v-badge>
        <v-toolbar-title class="ml-4">
            <span style="cursor:pointer" @click="addToHome" class="green--text">shoppingcart</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-badge color="#ff6d59" overlap class="mr-2 mt-1" content="2">
            <v-avatar color="#fff0ef" size="40">
                <v-icon x-small color='#ff6d59'>far fa-heart</v-icon>
            </v-avatar>
        </v-badge>
        <v-badge color="#41ab55" overlap class="mr-2 mt-1" :content="cartItemCount">
            <v-avatar color="#ecf7ee" size="40">
                <v-icon color="#41ab55" x-small>fas fa-shopping-cart</v-icon>
            </v-avatar>
        </v-badge>
        <span class="grey--text d-none d-sm-flex">pooriavakili</span>
        <v-avatar size="30" class="ml-2">
            <v-img src="pooriavakili.jpg" />
        </v-avatar>
        <v-btn icon dark>
            <v-icon x-small color="#878a94">fas fa-chevron-down</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'NavbarView',
    computed: {
        ...mapState({
            cartItemCount: state => state.cartItemCount
        })
    },
    methods: {
        addToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
.v-toolbar__title {
    font-size: 1rem !important;

}
</style>