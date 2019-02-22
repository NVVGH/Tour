export default {
  state: {
    ads: [
      {title: 'Горный туризм', descriptions: 'Передвижение по определённому маршруту в горной местности', promo: 'false', imageSrc: require('@/images/6210492_xlarge.jpg'), id: '123'},
      {title: 'Рафтинг', descriptions: 'Сплав на лодке по горным рекам и искусственным гребным каналам', promo: 'false', imageSrc: require('@/images/izitutz-rafting-.jpg'), id: '1234'},
      {title: 'Катание на квадроциклах', descriptions: 'Активное передвижение по подготовленной трассе или по бездорожью', promo: 'true', imageSrc: require('@/images/db11bf198ccc40d765c3ba666bd68130.jpg'), id: '1235'},
      {title: 'Полеты на параплане', descriptions: 'Полеты в тандеме с инструктором, на фоне восхитительной природы', promo: 'true', imageSrc: require('@/images/2.jpg'), id: '1236'},
      {title: 'Конные прогулки', descriptions: 'Романтическая прогулка на лошадях, оставит незабываемые впечатления', promo: 'true', imageSrc: require('@/images/horse-gallery-forest.jpg'), id: '1237'},
      {title: 'Катание на горных лыжах', descriptions: 'Захватывающее занятие, которому можно очень быстро научиться', promo: 'false', imageSrc: require('@/images/Skiing-In-Snowy-Mountains-1920x1080.jpg'), id: '1238'},
      {title: 'Веревочный парк', descriptions: 'Развлечение, приобретающее все большую популярность', promo: 'false', imageSrc: require('@/images/all_all_big.jpg'), id: '111'},
      {title: 'Пейнтбол', descriptions: 'Прекрасный способ провести день рождения или просто отдых для детей и родителей', promo: 'false', imageSrc: require('@/images/9429411740392081_c8be.jpg'), id: '222'},
      {title: 'Поход в пещеры', descriptions: 'Экстремально-познавательный поход под руководством опытных проводников', promo: 'false', imageSrc: require('@/images/Pesch.jpg'), id: '332'},
      {title: 'Велопоход', descriptions: 'Велопоход – это интересное и увлекательное путешествие с друзьями', promo: 'false', imageSrc: require('@/images/30LXo_7gQOU.jpg'), id: '233'},
      {title: 'Полет на вертолете', descriptions: 'Необычное приключение для тех, кто любит высоту и хочет получить новые впечатления', promo: 'false', imageSrc: require('@/images/экскур-полет.jpg'), id: '323'},
      {title: 'Катание на катере', descriptions: 'Возможность приятно и с пользой провести время и получить массу эмоций', promo: 'false', imageSrc: require('@/images/katanie-na-skorostnom-katere-po.jpg'), id: '234'}
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = Math.random()
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
