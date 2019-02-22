<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm10 md10 lg8 offset-lg2 offset-md1 offset-sm1>
        <h2 class="text--secondary">Добавить новое приключение</h2>

          <div class="elevation-3 my-4">
            <GmapMap :center="{lat:55.755826, lng:37.6173}" :zoom="10" map-type-id="terrain" style="height: 500px">
            </GmapMap>
          </div>

        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
            name="title"
            label="Заголовок"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Заполните заголовок']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Текст описания"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Заполните описание']"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="triggerUpload">
              Загрузить фото
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input ref="fileInput" type="file" style="display: none;" accept="image/*">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="100" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Добавить на витрину?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" :disabled="!valid || !image" @click="createAd">
              Отправить
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false,
        image: null,
        imageSrc: ''
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)

          console.log(ad)
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>
