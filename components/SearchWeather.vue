<template>
  <div class="search">
    <div class="form" @submit.prevent="dispatch">
      <div class="form__group">
        <label class="form__descript" for="dynamic-label-input">Укажите город</label>
        <input
          class="form__input"
          v-model="valueScope"
          @keypress.enter.prevent="dispatch"
          type="text"
        />
        <span class="help-text">{{errorMessage}}</span>
      </div>
      <button :disabled="!isActiveBtn" class="form__btn" type="submit">Запросить погоду</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  computed: {
    isActiveBtn() {
      return this.valueScope.length
    },
    valueScope: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    dispatch() {
      this.$emit('dispatch')
    },
    input({ target }) {
      this.$emit('input', target.value)
    },
  },
}
</script>

<style lang="scss">
.search {
  &__btn {
    margin-top: 15px;
  }
  .form {
    position: relative;
    &__descript {
      position: absolute;
      top: 10px;
      font-size: var(--font-size-small);
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-out;
    }
    &__input {
      border: none;
      height: 30px;
      width: 300px;
      border-radius: 5px;
      outline: none;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 20px;
      padding-left: 15px;
      &:focus {
        box-shadow: -3px 4px 64px 12px rgba(34, 60, 80, 0.2);
      }
    }
    &__group {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }
    input:placeholder-shown + label {
      opacity: 0;
      transform: translateY(1rem);
    }
    &__btn {
      margin-top: 15px;
      border: none;
      outline: none;
      width: 150px;
      height: 30px;
      border-radius: 5px;
      background: rgb(78, 78, 144);
      transition: all 0.2s linear;
      color: white;
      font-size: 18px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      &:hover {
        background: rgb(52, 52, 134);
      }
    }
  }
}
</style>
