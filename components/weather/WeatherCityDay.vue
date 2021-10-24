
<template>
  <div class="weather-city__days">
    <div
      class="weather-city__body"
      v-for="(day) in weatherDays"
      :key="day.date"
      @click="getDate(day.date)"
    >
      <div class="weather-city__day">
        <div class="weather-city__date">{{day.date}}</div>
        <div class="weather-city__icon">
          <img :src="`http:${day.icon.icon}`" class="weather-city__image" />
        </div>
        <div class="weather-city__temperature">
          <div class="weather-city__max-temp">{{day.minTemp}}</div>
          <div class="weather-city__min-temp">{{day.maxTemp}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import formatingTemp from '@/helpers/formatingTemp'

export default {
  props: {
    forecast: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    weatherDays() {
      return this.forecast.reduce((acc, cur) => {
        acc.push({
          date: cur.date,
          maxTemp: this.tempFormating(cur.day.maxtemp_c),
          minTemp: this.tempFormating(cur.day.mintemp_c),
          icon: cur.day.condition,
        })
        return acc
      }, [])
    },
  },
  methods: {
    tempFormating: formatingTemp,
    getDate(date) {
      this.$emit('getDate', date)
    },
  },
}
</script>
<style lang="scss">
.weather-city__ {
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