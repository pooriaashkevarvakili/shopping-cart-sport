<template>
  <v-app>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img class="responsive" src="cover.png" style="width:1350px" contain>
              <v-card-title class="top ml-10 mt-n5">
                <h2 class="title2">shoppingcart-car</h2>
              </v-card-title>
              <v-card-title class=" ml-10 ">
                <h2 class="green--text">#freedilivery</h2>
              </v-card-title>
            </v-img>
          </v-card>
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Category</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49d9a0">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <Category />
          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h6">
              Popular Product
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn dark class="px-8" color="green" rounded>SeeAll</v-btn>
          </v-toolbar>
          <Product />
          <v-card flat color="#e2f2e5" class="rounded-xl mt-8">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title>Popular bundle pack</v-toolbar-title>
            </v-toolbar>
            <Pack />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Category from "@/components/Category.vue"
import Product from "@/components/Product.vue"
import Footer from "@/components/Footer.vue"
import Pack from "@/components/Pack.vue"
export default {
  name: "HomeView",
  data: () => ({
    toggle_exclusive: 1,
  }),
  components: { Navbar, Category, Product, Footer, Pack }
}
</script>
<style>
.marginLeft {
  margin-left: -90px;
}

.mtop {
  margin-top: 100px;
}

.mbottom {
  margin-bottom: 100px;
}

.v-card.borderme {
  border: 1px solid green !important;
}

.v-card.borderout {
  border: 1px solid #d5f0db !important;
}

.v-btn::not(.v-btn--round).v-size-default.add {
  min-width: 0 !important;
}

.theme--light.v-sheet--outlined--mobile {
  border: 2px solid black !important;
}

@media only screen and(max-width:600px) {
  h2.title1 {
    font-size: 15px
  }

  h2.title2 {
    font-size: 15px
  }

  .top {
    margin-top: 20px;
  }
}

@media only screen and(min-width:600px) {
  .top {
    margin-top: 70px;
  }
}

@media only screen and(min-width:768px) {
  .top {
    margin-top: 120px;
  }
}

@media screen and (max-width:1275px) {
  .responsive {
    width: 1000px;
    height: 300px;
  }
}

@media screen and (max-width:1282px) {
  .responsive {
    margin-right: -80px
  }
}

@media screen and (max-width:1205px) {
  .responsive {
    margin-right: -130px
  }
}

@media screen and (max-width:1037px) {
  .responsive {
    margin-right: -340px
  }
}

@media screen and (max-width:994px) {
  .responsive {
    width: 800px;
    height: 240px;
  }
}

@media screen and (max-width:944px) {
  .responsive {
    width: 800px;
    height: 290px;
    margin-right: -450px;
  }
}

@media screen and (max-width:887px) {
  .responsive {
    width: 800px;
    height: 220px;
    margin-right: -480px;
  }
}

@media screen and (max-width:847px) {
  .responsive {
    width: 800px;
    height: 220px;
    margin-right: -530px;
  }
}

@media screen and (max-width:784px) {
  .responsive {
    width: 800px;
    height: 140px;
    margin-right: -350px;
  }
}

@media screen and (max-width:740px) {
  .responsive {
    width: 800px;
    height: 110px;
    margin-right: -350px;
  }
}

@media screen and (max-width:677px) {
  .responsive {
    width: 800px;
    height: 80px;
    margin-right: -350px;
  }
}

@media screen and (max-width:661px) {
  .responsive {
    width: 800px;
    height: 60px;
    margin-right: -350px;
  }
}

@media screen and (max-width:604px) {
  .responsive {
    width: 800px;
    height: 40px;
    margin-right: -350px;
  }
}

@media screen and (max-width:581px) {
  .responsive {
    display: none
  }
}
</style>