<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <v-card color="#FAFAFA" class="elevation-8 mb-3">
          <v-img :src="ad.imageSrc" height="700px"></v-img>
          <v-card-text>
            <h1 class="headline mb-2">{{ad.title}}</h1>
            <p>{{ad.descriptions}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small class="warning mb-3" flat>Редактировать</v-btn>
            <v-btn small class="primary mb-3 mr-3">Забронирозать</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      }
    }
  }
</script>
