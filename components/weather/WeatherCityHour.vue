<template>
  <div class="container">
    <div class="weather-day__hours" v-if="getDate">
      <div class="weather-day__body" v-for="item in selectedFormatingDay" :key="item.time">
        <div class="weather-day__column">
          <div class="weather-day__date-time">{{item.time}}</div>
          <div class="weather-day__condition">
            <div class="weather-day__condition-icon">
              <img class="weather-day__condition-icon _image" :src="`https:${item.icon}`" alt />
            </div>
            <div class="weather-day__condition-text">{{item.text}}</div>
          </div>
          <div class="weather-day__temp">{{item.temp}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import formatingTemp from '@/helpers/formatingTemp'
export default {
  props: {
    weatherHour: {
      type: Array,
      required: true,
    },
    getDate: {
      type: String,
      default: null,
    },
  },
  methods: {
    formatingTemp: formatingTemp,
  },
  computed: {
    selectedDay() {
      return this.weatherHour
        .find((item) => item.date === this.getDate)
        .hour.filter((item) => {
          let time = Number(item.time.split(' ')[1].split(':')[0])
          return time % 3 === 0
        })
    },
    selectedFormatingDay() {
      return this.selectedDay.reduce((acc, cur) => {
        let formatingDay = {
          time: cur.time,
          icon: cur.condition.icon,
          text: cur.condition.text,
          temp: this.formatingTemp(cur.temp_c),
        }
        acc.push(formatingDay)
        return acc
      }, [])
    },
  },
  data() {
    return {
      id: 0,
    }
  },
}
</script>
<style lang="scss">
.weather-day {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: auto;
  &__hours {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    margin-top: 15px;
    @media (max-width: 1120px) {
      justify-content: center;
    }
  }
  &__body {
    padding: 0 15px;
    flex: 0 1 22.3%;
    &:nth-child(-n + 20) {
      margin-bottom: 20px;
    }
    @media (max-width: 1120px) {
      flex: 0 1 33%;
    }
    @media (max-width: 540px) {
      flex: 0 1 100%;
    }
  }
  &__column {
    height: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    box-shadow: -3px 4px 64px 12px rgba(34, 60, 80, 0.2);
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__condition {
    flex: 1 1 auto;
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__condition-text {
    font-weight: 500;
    font-size: 15px;
  }
  &__condition-icon {
    width: 50px;
    height: 50px;
  }
  &__date-time {
    font-size: 16px;
    font-weight: 500;
  }
  &__temp {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    background: rgba(125, 221, 49, 0.25);
    padding: 10px 5px;
    max-width: 60px;
  }
}
</style>