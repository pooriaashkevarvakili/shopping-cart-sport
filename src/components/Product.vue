<template>
    <v-row justify="center" class="px-16 space">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="(item,i) in products" :key="i">
            <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
                <div align="center" justify="center">
                    <v-img contain max-width="300" max-height="300" :src="item.img"></v-img>
                </div>
                <v-card-title>
                    <p>
                        {{item.title}}
                    </p>
                </v-card-title>
                <v-card-title class="mt-n4">
                    <p>
                        {{item.price}}
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn @click.prevent="goCart" class="mx-2 mt-n3" fab small color="green" dark>
                        <v-icon dark>mdi-shopping</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "ProductView",
    components: {},
    computed: {
        ...mapState({
            products: state => state.products
        })
    },
    methods: {
        goCart() {
            this.$router.push('/cart')
        },
    }
}
</script>

<style>

</style>