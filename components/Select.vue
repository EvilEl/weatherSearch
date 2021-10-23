<template>
  <div class="select" :class="{'select--active':isActiveSelect}" @click="openSelect">
    {{isActiveSelect}}
    <div class="select__items">
      <div class="select__option">1</div>
      <div class="select__option">2</div>
      <div class="select__option">3</div>
    </div>
  </div>
</template>
<script>
export default {
  props() {
    value: {
      type: Object
    }
  },
  data() {
    return {
      isActiveSelect: false,
    }
  },
  methods: {
    openSelect() {
      this.isActiveSelect = !this.isActiveSelect
    },
  },
}
</script>
<style lang="scss">
.select {
  border: 1px solid red;
  width: 250px;
  max-height: 20px;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  &--active {
    max-height: 1000px;
  }
  &__items {
  }
}
</style>