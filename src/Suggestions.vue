<template>
  <div id="suggestionsBox">
     <transition name="slide-fade"  
                  mode="out-in"
                  enter-active-class="animated flipInX"
                  leave-active-class="animated flipOutX"
                  :duration="{ enter: 400, leave: 400}"            
      >
      <last-step-wizzard v-if="state == 'toSuggestions'"
                      @toThirdStep='toThirdStep'
                      @toFirstStep ='toFirstStep'
                      @toBaggageStep='toBaggageStep'
                      @interface="handleBaggageChange"
                      :transportId = transportId
                      :countryId = countryId>
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
  // name: "app",
  data() {
    return {
      state: "toSuggestions",
      transportId: 1,
      countryId: 1,
      bagggageId: 1
    };
  },
  methods: {
    toBaggageStep() {
      this.state = "baggageStep";
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