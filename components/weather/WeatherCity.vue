<template>
  <div class="weather-city">
    <div v-if="isShowWeather" class="container">
      <h1 class="weather-city__title">{{location.name}}</h1>
      <WeatherCityDay :forecast="forecast" @getDate="getDate" />
      <WeatherCityHour :weatherHour="forecast" :getDate="day" />
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>
<script>
import Loader from '../Loader.vue'
import WeatherCityDay from './WeatherCityDay.vue'
import WeatherCityHour from './WeatherCityHour.vue'

export default {
  components: { Loader, WeatherCityHour, WeatherCityDay },
  props: {
    weatherCity: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      current: {},
      forecast: [],
      location: {},
      day: null,
    }
  },
  computed: {
    iconWeather() {
      return `https:${this.current.condition.icon}`
    },
    isShowWeather() {
      return (
        Object.keys(this.current).length > 0 ||
        Object.keys(this.forecast).length > 0 ||
        Object.keys(this.location).length > 0
      )
    },
  },
  watch: {
    weatherCity() {
      this.getWeatherData()
    },
  },
  created() {
    this.getWeatherData()
  },
  methods: {
    getDate(date) {
      this.day = date
    },
    getWeatherData() {
      let current, forecast, location
      ;({ current, forecast, location } = this.weatherCity)

      setTimeout(() => {
        this.current = current
        this.forecast = forecast.forecastday
        this.location = location
      }, 1000)
    },
  },
}
</script>
<style lang="scss">
._image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.weather-city {
  margin-top: 15px;
  &__title {
    margin-bottom: 20px;
  }
  &__date {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 20px;
  }
  &__days {
    display: flex;
    margin: 0 -15px;
    @media (max-width: 540px) {
      flex-wrap: wrap;
    }
  }
  &__body {
    padding: 0 15px;
    flex: 0 1 33.3333%;
    @media (max-width: 540px) {
      flex: 0 1 100%;
      & > * {
        margin-bottom: 20px;
      }
    }
  }
  &__day {
    background: #fff;
    border-radius: 5px;
    box-shadow: -3px 4px 64px 12px rgba(34, 60, 80, 0.2);
    padding: 10px 10px;
    transition: all 0.2s linear;
    &:hover {
      background: rgb(246, 225, 225);
    }
  }
  &__temperature {
    display: flex;
    & > *:not(:first-child) {
      margin-left: 15px;
    }
  }
  &__max-temp,
  &__min-temp {
    display: flex;
    justify-content: center;
    font-family: fantasy;
    font-size: 16px;
    padding: 5px 0;
  }
  &__max-temp {
    background: rgba(209, 212, 4, 0.25);
    width: 50px;
  }
  &__min-temp {
    width: 50px;
    background: rgba(119, 216, 14, 0.25);
  }
}
</style>