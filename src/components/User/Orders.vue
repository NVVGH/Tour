<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>

        <h2 class="text--secondary mb-4">Мои заказы</h2>

        <v-list style="background-color: #FAFAFA" class="elevation-3 mb-3">
                    
          <v-list-tile avatar v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox color="primary" :input-value="order.done" @change="markDone(order)"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
          
            <v-list-tile-action>
              <v-btn small :to="'/ad/' + order.adId" dark color="primary" >Открыть</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {id: 'aaaaa', name: 'Vladimir', phone: '8-926-222-22-22', adId: '123', done: 'false'}
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>
