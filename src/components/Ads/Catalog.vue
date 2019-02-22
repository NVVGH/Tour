<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm10 md10 lg8 offset-lg2 offset-md1 offset-sm1>
        <h2 class="text--secondary mb-4">Каталог приключений</h2>

        <v-card color="#FAFAFA" class="elevation-3 mb-3" v-for="ad in myAds" :key="ad.id">
          <v-layout row>
            <v-flex xs4 class="hidden-xs-only">
              <v-img :src="ad.imageSrc" height="170px" style="margin: 2%"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h3 class="text--secondary">{{ad.title}}</h3>
                <p>{{ad.descriptions}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small class="primary mr-3" :to="'/ad/' + ad.id">Подробнее</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>
