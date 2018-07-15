import Vue from 'vue'
import App from './App.vue'
import Managing from './Managing.vue'
import Suggestions from './Suggestions.vue'


import FirstStepWizzard from './components/First_step.vue'
import SecondStepWizzard from './components/Second_step.vue'
import ThirdStepWizzard from './components/Third_step.vue'
import LastStepWizzard from './components/Last_Step.vue'
import Baggage from './components/Baggage.vue'

Vue.component('FirstStepWizzard', FirstStepWizzard);
Vue.component('SecondStepWizzard', SecondStepWizzard);
Vue.component('ThirdStepWizzard', ThirdStepWizzard);
Vue.component('LastStepWizzard', LastStepWizzard);
Vue.component('Baggage', Baggage);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#manage',
  render: h => h(Managing)
})

new Vue({
  el: '#suggestions',
  render: h => h(Suggestions)
})