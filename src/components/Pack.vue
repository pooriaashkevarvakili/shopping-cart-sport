<template>
    <v-row justify="center" class="space px-16 pb-5">
        <v-col cols="12" xs="12" sm="6" md="4" v-for="item in packs" :key="item">
            <v-card max-width="300" class="mx-auto rounded-xl" flat outlined>
                <div align="center" justify="center">
                    <v-img max-width="300" max-height="300" contain :src="item.img" />
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
export default {
    name: "PackView",
    data: () => ({
        bpm: 1,
        packs: [
            {
                title: 'audi',
                img: 'audi.jpg',
                price: 100
            },
            {
                title: 'benz',
                img: 'benz.jpg',
                price: 200
            },
            {
                title: 'bmw',
                img: 'bmw.jpg',
                price: 300
            },
            {
                title: 'pride',
                img: 'pride.jpg',
                price: 400
            },
            {
                title: 'samand',
                img: 'samand.jpg',
                price: 500
            },
            {
                title: 'peykan',
                img: 'peykan.jpg',
                price: 600
            }
        ]
    }),
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