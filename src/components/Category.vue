<template>
    <v-item-group mandatory class="mt-n1">
        <v-container>
            <v-row justify="center" class="space">
                <v-col cols="12" sm="4" md="2" xs="12" v-for="(item,i) in category" :key="i">
                    <v-item v-slot="{active,toggle}">
                        <v-card flat :color="active?'D5f0db':'white'" dark height="180"
                            class="d-flex align-center rounded-lg mx-2" :class="active?'borderme':'borderout'"
                            @click="toggle">
                            <v-row>
                                <v-col cols="12" sm="12">
                                    <v-list-item three-line class="text-center">
                                        <v-list-item-content>
                                            <div justify="center" align="center">
                                                <v-img :src='item.img' max-height="120" max-width="120" contain />
                                                <div class="mt-2">{{item.title}}</div>
                                            </div>
                                        </v-list-item-content>



                                    </v-list-item>
                                </v-col>
                            </v-row>

                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<script>
export default {
    name: 'CategoryView',
    data: () => ({
        category: [
            {
                title: 'audi',
                img: 'audi.jpg'
            },
            {
                title: 'benz',
                img: 'benz.jpg'
            },
            {
                title: 'bmw',
                img: 'bmw.jpg'
            },
            {
                title: 'pride',
                img: 'pride.jpg'
            },
            {
                title: 'samand',
                img: 'samand.jpg'
            },
            {
                title: 'peykan',
                img: 'peykan.jpg'
            }
        ]
    }),
}
</script>

<style>

</style>