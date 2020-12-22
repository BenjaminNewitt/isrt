<template>
  <div
    id="ModifyOutput"
    class="col-12 col-md-4 mx-auto text-center bg-ice-component rounded"
  >
    <h5 class="text-ice text-center">Modify Output</h5>
    <div class="mt-4 row d-flex justify-content-center align-items-center">
      <div class="col-4">
        <div class="row flex-column-reverse" style="text-align-last: right;">
          <div
            class="col-12 mb-1 text-center"
            v-for="negativeDegrees in negativeDegrees"
            :key="negativeDegrees.index"
          >
            <button
              @click.prevent="changeOutputValueByDegree(negativeDegrees)"
              type="button"
              class="btn btn-ice fw-bold w-100 border border-dark btn-sm"
              style="text-align-last: center;"
            >
              {{ negativeDegrees }}&#176;
            </button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row" style="text-align-last: left;">
          <div
            class="col-12 mb-1 text-center"
            v-for="positiveDegrees in positiveDegrees"
            :key="positiveDegrees.index"
          >
            <button
              @click.prevent="changeOutputValueByDegree(positiveDegrees)"
              type="button"
              class="btn btn-ice fw-bold w-100 border border-dark btn-sm"
              style="text-align-last: center;"
            >
              {{ positiveDegrees }}&#176;
            </button>
          </div>
        </div>
      </div>
    </div>
    <form
      class="mt-3 mb-3"
      @submit.prevent="changeOutputValueByDegree(modifySlider)"
    >
      <div class="form-group">
        <label class="text-ice fw-bold d-block" for="formControlRange"
          >{{ modifySlider }}&#176;</label
        >
        <input
          type="range"
          class="form-control-range w-50 mx-auto mb-3"
          id="formControlRange"
          min="-360"
          max="360"
          step="1"
          v-model="modifySlider"
          @keypress.enter="changeOutputValueByDegree(modifySlider)"
        />
      </div>
      <button type="submit" class="me-1 btn btn-ice fw-bold border border-dark">
        Apply
      </button>
      <button
        @click.prevent="clearModifySlider()"
        type="button"
        class="ms-1 btn btn-ice fw-bold border border-dark"
      >
        Reset
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModifyOutput',
  data () {
    return {
      modifySlider: this.$store.state.ModifySliderInDegrees
    }
  },
  computed: {
    negativeDegrees () {
      // for buttons
      return this.$store.state.NegativeDegreesArr
    },
    positiveDegrees () {
      // for buttons
      return this.$store.state.PositiveDegreesArr
    }
  },
  methods: {
    changeOutputValueByDegree (degreeValue) {
      this.$store.dispatch('changeOutputValueByDegree', degreeValue)
    },
    setOutputValueByDegree (degreeValue) {
      this.$store.dispatch('setOutputValueByDegree', degreeValue)
    },
    clearModifySlider () {
      this.$store.dispatch('clearModifySlider')
      this.modifySlider = 0
    }
  }
}
</script>
