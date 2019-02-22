<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card color="#FAFAFA" class="elevation-3">
          <v-toolbar dark
              class="primary mb-3">
            <v-toolbar-title>Регистрация нового пользователя</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <vue-tel-input v-model="phone">
              </vue-tel-input>
              <v-text-field
                prepend-icon="person"
                name="name"
                label="Ваше имя"
                type="name"
                v-model="name"
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="confirm-password"
                label="Введите пароль ещё раз"
                type="password"
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="primary mb-3 mr-3"
              @click="onSubmit"
              :disabled="!valid"
            >Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  export default {
    data () {
      return {
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        nameRules: [
          v => !!v || 'Введите Ваше имя',
          v => (v && v.length >= 2) || 'Имя должно быть не менее 2 символов'
        ],
        emailRules: [
          v => !!v || 'Введите ваш Email',
          v => emailRegex.test(v) || 'Введите правильный Email'
        ],
        passwordRules: [
          v => !!v || 'Введите пароль',
          v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
        ],
        confirmPasswordRules: [
          v => !!v || 'Введите пароль ещё раз',
          v => v === this.password || 'Пароль должен совпадать'
        ]
      }
    },
    methods: {
      onInput ({ number, isValid, country }) { console.log(number, isValid, country) },
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            password: this.password
          }

          console.log(user)
        }
      }
    }
  }
</script>
