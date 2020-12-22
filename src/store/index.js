/* eslint-disable semi */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // sets specific values for certain degrees
    // several numbers taken from in-game values
    TwoSeventyDegrees: 4.71238911,
    OneEightyDegrees: 3.1415927410125732,
    NinetyDegrees: 1.5707963705062866,
    FortyFiveDegrees: 0.785398185,
    ThirtyDegree: 0.52359879,
    FifteenDegrees: 0.261799395,
    FiveDegrees: 0.087266465,
    // everything calculated based on OneDegree
    OneDegree: 0.017453293,
    // for when the user inputs their own radian value
    InputValue: 0,
    // gives output in radians
    OutputValue: 0,
    // gives output in degrees
    OutputInDegrees: 0,
    // changes the slider based on where the user sets it
    ModifySliderInDegrees: 0,
    // adds button for each element in the two arrays
    PositiveDegreesArr: [270, 180, 90, 45, 30, 15, 5, 1],
    NegativeDegreesArr: [-1, -5, -15, -30, -45, -90, -180, -270],
    UndoArr: [{}],
    RedoArr: [{}]
  },
  mutations: {
    changeOutputValueByDegree (state, payload) {
      // multiplies the number of degrees by the value of one
      const addedValueRadian = payload.data * state.OneDegree
      // adds the input to the total output value already in the state
      state.OutputValue = state.OutputValue += addedValueRadian
    },
    clearOutputValue (state) {
      // resets the output to 0
      state.OutputValue = 0
    },
    clearOutputInDegrees (state) {
      // resets the output to 0
      state.OutputInDegrees = 0;
    },
    setOutputValueByInput (state, payload) {
      // uses the incoming input to set the output
      // console.log(typeof payload.data);
      state.OutputValue = payload.data;
    },
    changeInputValueByInput (state, payload) {
      // sets the input field with the updated one typed in by the user
      state.InputValue = payload.data;
    },
    clearInput (state) {
      state.InputValue = 0;
    },
    clearAll (state) {
      state.InputValue = 0;
      state.OutputValue = 0;
      state.OutputInDegrees = 0;
    },
    // NOTE double check this mutation
    setOutputInDegrees (state, payload) {
      if (payload.data != null) {
        state.OutputInDegrees = state.OutputValue / state.OneDegree;
      } else {
        state.OutputInDegrees = state.OutputValue / state.OneDegree;
        state.OutputInDegrees += payload.data;
      }
    },
    setOutputByDegreeValue (state, payload) {
      // converts the output + the added value into degrees
      state.OutputValue = payload.data * state.OneDegree;
      state.OutputInDegrees = payload.data;
    },
    clearModifySlider (state) {
      state.ModifySliderInDegrees = 0;
    }
  },
  actions: {
    changeOutputValueByDegree ({ commit }, degreeValue) {
      commit('changeOutputValueByDegree', { data: degreeValue });
      commit('setOutputInDegrees', { data: degreeValue });
    },
    // clears the output and output in degrees, not the input
    clearOutput ({ commit }) {
      commit('clearOutputValue');
      commit('clearOutputInDegrees');
    },
    changeOutputValueByInput ({ commit, dispatch }, inputValue) {
      // tries to convert inputValue into a number
      // NOTE perhaps use a try/catch
      const valueToNum = Number.parseFloat(inputValue);
      commit('changeInputValueByInput', { data: valueToNum });
      commit('setOutputValueByInput', { data: valueToNum });
      commit('setOutputInDegrees', { data: valueToNum });
      // add to history array
    },
    // clears only the input, not the output
    clearInput ({ commit, dispatch }) {
      commit('clearInput');
    },
    // takes the output, and sends it to mutation to convert it to degrees
    setOutputValueByDegree ({ commit, dispatch }, degreeValue) {
      commit('setOutputByDegreeValue', { data: degreeValue });
      // add to history array
    },
    clearModifySlider ({ commit, dispatch }) {
      commit('clearModifySlider');
    }
  },
  modules: {}
});
