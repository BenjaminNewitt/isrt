<template>
  <div
    id="Input"
    class="col-12 col-md-4 text-center mx-auto bg-ice-component rounded"
  >
    <h5 class="text-ice text-center">
      Set Input
    </h5>
    <div class="row align-items-center mt-4">
      <div class="col-12">
        <h5 class="fw-bold text-ice text-center">
          Radians
        </h5>

        <form
          @submit.prevent="changeOutputValueByInput(inputField)"
          class="mb-3"
        >
          <input
            v-model="inputField"
            :placeholder="[[inputValue]]"
            type="float"
            class="border rounded border-dark text-ice text-center bg-input-field d-block mx-auto mb-3 fw-bold w-50"
          />
          <button
            type="submit"
            class="btn btn-ice fw-bold me-1 border border-dark"
          >
            Apply
          </button>
          <button
            @click.prevent="clearInput()"
            type="button"
            class="ms-1 btn btn-ice fw-bold border border-dark"
          >
            Clear
          </button>
        </form>
        <h5 class="fw-bold text-ice text-center">
          Degrees
        </h5>
        <form @submit.prevent="setOutputValueByDegree(inputDegree)">
          <div class="form-group">
            <label class="text-ice fw-bold d-block" for="formControlRange"
              >{{ inputDegree }}&#176;</label
            >
            <input
              type="range"
              class="form-control-range w-50 mx-auto mb-3"
              id="formControlRange"
              min="-360"
              max="360"
              step="1"
              value="0"
              v-model="inputDegree"
              @keypress.enter="setOutputValueByDegree(inputDegree)"
            />
          </div>
          <button
            type="submit"
            class="btn btn-ice fw-bold me-1 border border-dark"
          >
            Apply
          </button>
          <button
            @click.prevent="clearInputSlider()"
            type="button"
            class="btn btn-ice fw-bold ms-1 border border-dark"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      inputField: this.$store.state.InputValue,
      inputDegree: this.$store.state.OutputInDegrees
    }
  },
  computed: {
    inputValue () {
      return this.$store.state.InputValue
    }
  },
  methods: {
    changeOutputValueByInput (inputValue) {
      // passes input along to action
      this.$store.dispatch('changeOutputValueByInput', inputValue)
    },
    setOutputValueByDegree (degreeValue) {
      this.$store.dispatch('setOutputValueByDegree', degreeValue)
    },
    clearInput () {
      // clears input only
      this.$store.dispatch('clearInput')
      // clears inputField for display
      this.inputField = 0
    },
    clearInputSlider () {
      // shouldn't need to modify the store, since inputDegree is a reference to outputDegree to make it easier to work with (doesn't apply to resetting slider)
      this.inputDegree = 0
    }
  }
}
</script>
