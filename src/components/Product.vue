<template>
    <v-row justify="center" class="px-16 space">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(product,i) in products" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
                <div align="center" justify="center">
                    <v-img contain max-width="300" max-height="300" :src="product.img"></v-img>
                </div>
                <v-card-title>
                    <p>
                        {{product.title}}
                    </p>
                </v-card-title>
                <v-card-title class="mt-n4">
                    <p>
                        {{product.price}}
                    </p>
                </v-card-title>
                <v-card-actions class="mw-2 mt-n4">
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="decrement">mdi-minus</v-icon>
                    </v-btn>
                    <strong class="mx-2" v-text="bpm"></strong>
                    <v-btn outlined class="mt-n2 add">
                        <v-icon color="green" @click="increment">mdi-plus </v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mx-2 mt-n3" fab dark small color="green">
                        <v-icon dark>mdi-shopping</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "ProductView",
    data: () => ({
        bpm: 1,

    }),
    computed: {
        ...mapState({
            products: state => state.products
        })
    },

    methods: {
        decrement() {
            this.bpm--
        },
        increment() {
            this.bpm++
        }
    }
}
</script>

<style>

</style>