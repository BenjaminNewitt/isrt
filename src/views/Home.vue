/* eslint-disable vue/no-unused-components */
<template>
  <div class="home container-fluid bg-ice">
    <div class="row">
      <div class="col-10 mx-auto">
        <div class="row justify-content-center">
          <div class="col-12 my-2">
            <h2 class="text-ice text-center">Ice-Spear Rotation Tool</h2>
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <Input />
              <Output />
              <ModifyOutput />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Output from '@/components/Output'
import Input from '@/components/Input'
import ModifyOutput from '@/components/ModifyOutput'

export default {
  name: 'Home',
  components: { Output, Input, ModifyOutput },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style>
.text-ice {
  color: #b9b9b9;
}
.text-ice-secondary {
  color: #c8af9e;
}
.bg-ice {
  background-color: #26292e;
}
/* TODO create README for users with a simple tutorial: one for shrines (usually working off of 45-90 degree angles), another for overworld (better application of use)*/

/* TODO add links to resources and Discords servers in README */

.btn-ice {
  background-color: #3a4049 !important;
  color: #9ca4b2 !important;
}
.bg-input-field {
  background-color: #202227;
  color: #d6d9df;
}

.bg-ice-component {
  background-color: #2c3037;
}

input[type="range"] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"] {
  width: 100%;
  margin: 5px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #4c5463;
  border: 0.5px solid #26292e;
  border-radius: 5.7px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: -5.5px;
  width: 15px;
  height: 20px;
  background: #9ca4b2;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #4c5463;
}
input[type="range"]::-moz-range-track {
  background: #4c5463;
  border: 0.5px solid #26292e;
  border-radius: 5.7px;
  width: 100%;
  height: 10px;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 20px;
  background: #9ca4b2;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 6px 0;
  color: transparent;
  width: 100%;
  height: 10px;
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #4c5463;
  border: 0.5px solid #26292e;
  border-radius: 11.4px;
}
input[type="range"]::-ms-fill-upper {
  background: #4c5463;
  border: 0.5px solid #26292e;
  border-radius: 11.4px;
}
input[type="range"]::-ms-thumb {
  width: 15px;
  height: 20px;
  background: #9ca4b2;
  border: 1px solid #000000;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type="range"]:focus::-ms-fill-lower {
  background: #4c5463;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #4c5463;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type="range"] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
</style>
