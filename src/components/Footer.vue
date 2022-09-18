<template>
    <v-footer dark padless class="mt-2">
        <v-card flat tile class="black white--text py-12 px-5" width="100%">
            <v-row>

                <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
                    <v-toolbar color="transparent" flat>
                        <v-badge color="#d5f0db" dot>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cart4" viewBox="0 0 16 16">
                                <path
                                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </v-badge>
                        <v-toolbar-title class="ml-4">
                            <span class="green--text">
                                shopping-cart
                            </span>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text class="pb-0">
                        <v-btn icon fab outlined class="mx-1 white--text" v-for="icon in icons" :key="icon">
                            <v-icon size="20px">{{icon}}</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md='2'>
                    <v-card-text class="white--text pt-0">
                        <h3>About</h3>
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <h3>how it work</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>Our params</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>Promotions</h3>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                        <h3>Refer A friend</h3>
                    </v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md='2'>
                    <v-card-text class="white--text pt-0">
                        <h3>Delivery</h3>
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <h3>Cost on Delivery</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>Payment methods</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>Delivery astus</h3>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                        <h3>Returns</h3>
                    </v-card-text>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md='2'>
                    <v-card-text class="white--text pt-0">
                        <h3>About</h3>
                    </v-card-text>
                    <v-card-text class="grey--text">
                        <h3>pooriavakili</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>tehranpars</h3>
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4">
                        <h3>pooriavakili09</h3>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                        <h3>09376720694</h3>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "FooterView",

    data: () => ({
        icons: [
            'fab fa-apple',
            'fab fa-telegram',
            'fab fa-instagram',
            'fab fa-twitter',
        ]
    }),
}
</script>

<style>

</style>