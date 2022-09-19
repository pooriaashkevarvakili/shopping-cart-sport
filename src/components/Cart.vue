<template>
    <div>
        <Navbar />
        <v-row>
            <v-col cols="12" xs="12" sm="6" md="4">
                <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
                    <div align="center" justify="center">
                        <v-img contain max-width="300" max-height="300" src="aiene.jpg"></v-img>
                    </div>
                    <v-card-title>
                        <p>
                            t
                        </p>
                    </v-card-title>
                    <v-card-title class="mt-n4">
                        <p>
                            y
                        </p>
                    </v-card-title>
                    <v-card-actions class="mw-2 mt-n4">
                        <v-btn outlined class="mt-n2 add">
                            <v-icon color="green">mdi-minus</v-icon>
                        </v-btn>
                        <strong class="mx-2"></strong>
                        <v-btn outlined class="mt-n2 add">
                            <v-icon color="green">mdi-plus </v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="mx-2 mt-n3" fab small color="green" dark>
                            <v-icon dark>mdi-shopping</v-icon>
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div class="mt-2">
            <Footer />
        </div>

    </div>
</template>
<script>
import Navbar from './Navbar.vue';
import Footer from "./Footer.vue"
export default {
    name: "cartView",
    data() {

    },
    components: { Navbar, Footer }
}
</script>