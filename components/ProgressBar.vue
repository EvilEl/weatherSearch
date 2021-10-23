<template>
  <div class="progress" @mousemove="isActive" @mouseleave="isShowAnim" @click="click">
    <div class="progress__text">Узнать погода нажми на меня</div>
    <div class="progress__bar" :style=" isActiveAnim ? style: '' "></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActiveAnim: false,
      style: { animation: 'barHover linear 1s infinite backwards' },
    }
  },
  computed: {},
  methods: {
    isActive() {
      let d = d
      this.isActiveAnim = true
    },
    isShowAnim() {
      if (this.isActiveAnim) {
        setTimeout(() => {
          this.isActiveAnim = false
        }, 1000)
      }
    },
    click() {
      this.$emit('click')
    },
  },
}
</script>
<style lang="scss">
@keyframes barHover {
  10% {
    width: 10%;
    background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
  }
  20% {
    width: 20%;
    background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
  }
  30% {
    width: 30%;
    background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3);
  }
  40% {
    width: 40%;
    background: linear-gradient(81deg, #ddb35f, #7409c7);
  }
  50% {
    width: 50%;
    background: linear-gradient(81deg, #ddb35f, #7409c7);
  }
  60% {
    width: 60%;
    background: linear-gradient(81deg, #ddb35f, #7409c7);
  }
  70% {
    width: 70%;
    background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  }
  80% {
    width: 80%;
    background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  }
  90% {
    width: 90%;
    background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  }
  100% {
    width: 100%;
    background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db);
  }
}
.progress {
  width: 50%;
  height: 6px;
  border-radius: 10px;
  background: rgb(176, 173, 173);
  position: relative;
  margin: auto;
  margin-top: 50px;
  &:hover &__text {
    color: blueviolet;
  }
  &__bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__text {
    padding-top: 10px;
    transition: 0.2s linear;
  }
}
</style>