<template>
<div class='baggage-keeper'>
  <transition name="slide-fade"  
                  mode="out-in"
                  enter-active-class="animated flipInX"
                  leave-active-class="animated flipOutX"
                  :duration="{ enter: 400, leave: 400}"            
      >
  <first-step-wizzard v-if="state == 'firstStep'"
                      @toSecondStep="toSecondStep"
                      @goToManage="goToManage(manageUrl)"
  >
  </first-step-wizzard>
  <second-step-wizzard v-else-if="state == 'secondStep'"
                       @toFirstStep="toFirstStep"
                       @toThirdStep="toThirdStep"
                       @interface="handleTransportChange"
  >
  </second-step-wizzard>
  <third-step-wizzard v-else-if="state == 'thirdStep'"
                      @toSecondStep='toSecondStep'
                      @interface="handleCountryChange"
                      @toSuggestions ='toSuggestions'>

  
  </third-step-wizzard>
  <last-step-wizzard v-else-if="state == 'toSuggestions'"
                      @toThirdStep='toThirdStep'
                      @toFirstStep ='toFirstStep'
                      @toBaggageStep='toBaggageStep'
                      @interface="handleBaggageChange"
                      :transportId = transportId
                      :countryId = countryId
                      >
  </last-step-wizzard>
  <baggage v-else-if="state == 'baggageStep'"
            :baggageId = baggageId
                      >
  </baggage>
  <div v-else>Unknown state</div>
  </transition>
</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      state: "firstStep",
      manageUrl: "",
      transportId: 1,
      countryId: 1,
      bagggageId: 1
    };
  },
  methods: {
    toSecondStep() {
      this.state = "secondStep";
    },
    toBaggageStep() {
      this.state = "baggageStep";
    },
    toThirdStep() {
      this.state = "thirdStep";
    },
    toFirstStep() {
      this.state = "firstStep";
    },
    toSuggestions() {
      this.state = "toSuggestions";
    },
    handleTransportChange(id) {
      this.transportId = id;
    },
    handleCountryChange(id) {
      this.countryId = id;
    },
    handleBaggageChange(id) {
      this.baggageId = id;
    }
  }
};
</script>

<style>
</style>

