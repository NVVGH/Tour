<template>
  <v-app class="app vvv">
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      >
    
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
    <v-toolbar app fixed dark class="primary toolbar">
      <v-toolbar-side-icon
      @click="drawer = !drawer"
      class="hidden-md-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-title>
      <router-link to="/" tag="span" class="logo">
        FULL travel
      </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
         v-for="link in links"
         :key="link.title"
         :to="link.url"
         flat    
         >
         
         {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
    <v-content>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>

    <v-footer app absolute>

      <v-container fluid class="cont">
          <v-layout row wrap>
             
            <v-flex d-flex xs12 sm6 md6 lg3>
              <v-card dark class="primary card" flat>
                <v-card-title><h2>FULL travel</h2></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec .<br><br>Phone: 182 2569 5896<br>e-mail: info@modu.versus</v-card-text>                
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md6 lg3>
              <v-card flat dark class="primary card">
                <v-card-title><h2>Company</h2></v-card-title>
                <v-card-text>
                  <ul>
                    <li><a>О нас</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Контакты</a></li>
                    <li><a>Условия</a></li>
                    <li><a>Конфиденциальность</a></li>
                    <li><a>Рекомендации</a></li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md6 lg3>
              <v-card flat dark class="primary card">
                <v-card-title><h2>Community</h2></v-card-title>
                <v-card-text>
                  <ul>
                    <li><a>Блог</a></li>
                    <li><a>Поддержка</a></li>
                    <li><a>Форум</a></li>
                    <li><a>Новости</a></li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md6 lg3>
              <v-card flat dark class="primary card">
                <v-card-title><h2>from the BLOG</h2></v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio,</v-card-text>
              </v-card>
            </v-flex>
            
          </v-layout>
        
          <v-layout>
            <v-flex d-flex>
              <v-card flat color="secondary" dark class="copy">
                <v-card-text>2018 &copy; FULL travel</v-card-text>
              </v-card>
            </v-flex>                        
          </v-layout>
      </v-container>
      
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
          {title: 'мои заказы', icon: 'bookmark_border', url: '/orders'},
          {title: 'Каталог', icon: 'bookmark_border', url: '/Catalog'},
          {title: 'Новое приключение', icon: 'playlist_add', url: '/newAd'},
          {title: 'Регистрация гида', icon: 'face', url: '/registration'},
          {title: 'Войти', icon: 'lock', url: '/login'}
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-weight: 400;
  font-size: 1.2em;
}
.app{
  max-width: 1500px;
  margin: 0 auto;
}
.toolbar{
  max-width: 1500px;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.copy {
	font-size: 14px;
  margin: 0;
  padding-left: 10%;
}
.cont {
  padding: 0;
  text-align: justify;
  margin-bottom: 0;
}
.card h2 {
  font-weight: 400;
  font-size: 1.6em;
}
.card {
  padding: 15px 20%;
}
.card a {
  color: #fff;
}
.card a:hover {
  color: #fff;
  text-decoration: underline;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
 
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
