<template>
  <div>
    <v-container fluid align-center mb-2>
      <v-layout row>
        <v-flex>
          <div  class="elevation-3">
            <GmapMap :center="{lat:currentLocation.lat, lng:currentLocation.lng}" :zoom="3" map-type-id="terrain" style="height: 500px">
            </GmapMap>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container grid-list-lg>
      <v-layout row wrap mx-3>
        <v-flex xs12 sm6 md4 lg3 v-for="ad of ads" :key="ad.id">

          <v-card color="#FAFAFA" class="elevation-3 mb-2">
            
            <v-card flat :to="'/ad/' + ad.id">
              <v-img :src="ad.imageSrc" height="200px">
                <h2 class="cardTitle">{{ad.title}}</h2>
              </v-img>
            </v-card>

            <v-card-title>
              <div class="cardDescription">
                <div>{{ad.descriptions}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn small class="mb-2" flat :to="'/ad/' + ad.id">Подробнее</v-btn>
              <v-btn small dark 
              class="primary mb-2 mr-2">Заказать</v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>

export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  },
  data () {
    return {
      currentLocation: {lat: 0, lng: 0},
      searchAddressInput: ''
    }
  },
  methods: {
    geolocation: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>

<style scoped>
.cardTitle {
  color: #fff;
  font-weight: 400;
  font-size: 1.4em;
  text-shadow: 1px 0 1px #000,
              0 1px 1px #000,
              -1px 0 1px #000,
              0 -1px 1px #000;
  padding: 2% 0 0 4%;
}
.cardDescription {
  min-height: 100px;
}
</style>
