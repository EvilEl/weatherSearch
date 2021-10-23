<template>
  <div class="container">
    <!-- <Select /> -->

    <!-- <ProgressBar @click="activeSearch" /> -->
    <br />
    <br />
    <div v-if="true">
      <SearchWeather :errorMessage="errorRequest" v-model="nameCity" @dispatch="getWeather" />
      <div v-if="showWeather">
        <WeatherCity :weatherCity="weatherCity" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader.vue'
import ProgressBar from '~/components/ProgressBar.vue'
import SearchWeather from '~/components/SearchWeather.vue'
import Select from '~/components/Select.vue'
import WeatherCity from '~/components/weather/WeatherCity.vue'
export default {
  layout: 'base',
  components: { SearchWeather, ProgressBar, WeatherCity, Loader, Select },
  async mounted() {},
  data() {
    return {
      nameCity: '',
      isOpen: false,
      errorRequest: '',
      weatherCity: {},
      showWeather: false,
    }
  },
  computed: {
    isShowWeather() {
      return Object.keys(this.weatherCity).length
    },
  },
  methods: {
    async getWeather() {
      try {
        this.showWeather = false
        const apikey = 'f513add7bf644914bfe204034211210'
        const result = await this.$axios.$get(
          `forecast.json?key=${apikey}&q=${this.nameCity}&lang=ru&days=10`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-apikey': 'f513add7bf644914bfe204034211210',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':
                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
          }
        )
        this.weatherCity = result
        this.errorRequest = ''
        this.showWeather = true
      } catch (e) {
        this.errorRequest = 'Не корректный город'
      }
    },
    activeSearch() {
      this.isOpen = !this.isOpen
    },
  },
}
// Ticktak123!
</script>
<style lang="scss">
body {
  background: rgb(212, 205, 205);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>