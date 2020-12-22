<template>
  <div
    id="Output"
    class="col-12 col-md-3 text-center align-items-center bg-ice-component rounded"
  >
    <div class="row">
      <div class="col-12 mb-3">
        <h5 class="text-ice">
          Output
        </h5>
      </div>
      <div class="col-12">
        <h5 class="text-ice">
          Radians
        </h5>
        <h5 class="text-ice fw-bold">
          {{ outputValue }}
        </h5>
      </div>
      <div class="col-12">
        <h5 class="text-ice">
          Degrees
        </h5>
        <h5 class="text-ice fw-bold">{{ outputInDegrees }}&#176;</h5>
      </div>
    </div>
    <button
      @click="clearOutputValue()"
      type="button"
      class="btn btn-ice fw-bold text-center mx-auto mb-3 border border-dark"
    >
      Clear
    </button>
  </div>
</template>

<script>
export default {
  name: 'Output',
  computed: {
    outputValue () {
      return this.$store.state.OutputValue
    },
    outputInDegrees () {
      return this.$store.state.OutputInDegrees
    }
  },
  methods: {
    clearOutputValue () {
      // clears output only
      this.$store.dispatch('clearOutput')
    }
  }
}
</script>
