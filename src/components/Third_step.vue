<template>
  <div class="d-flex flex-column flex-wrap justify-content-center align-items-center" id="first-step">
    <h3>{{title}}</h3>
    <div class="wizzard-box d-flex flex-column align-items-center">
      <div>
        <p>
          Отличный выбор! А теперь выберите из списка способ, которым желаете добраться в выбранный Вами пункт назначения. Чтобы перейти к финальному шагу -> нажмите кнопку Далее. Чтобы вернуться к выбору города -> нажмите кнопку Назад.
        </p>
        <select class="custom-select" v-model="selected">
          <option v-for="currency in info" :key="currency.id" v-html="currency.name"></option>
        </select>
      </div>
    </div>
      <div class="flex-row flex-wrap align-items-center">
        <button class="forward-btn" @click="$emit('toSecondStep')"><strong>Назад</strong></button>
        <button class="forward-btn" @click="$emit('interface', getId(selected).id); $emit('toSuggestions')"><strong>Далее</strong></button>
      </div>
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "Выберите способ, которым желаете добраться",
      selected: 1,
      info: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/diplom/transports").then(response => {
      // console.log(response.data[0]);
      return (this.info = response.data);
    });
    // console.log(this.info);
  },
  methods: {
    getId(name) {
      return this.info.find(item => item.name === name);
    }
  }
};
</script>

<style scoped>
select {
  background: transparent;
  border-color: #e6f3ff;
  color: #037a9c;
  box-shadow: 0px 0px 3px 3px #e6f3ff;
}
p {
  color: #037a9c;
  font-style: italic;
  font-family: "Bitter";
  font-size: 22px;
}
/* a {
  color: #037a9c;
  text-decoration: none;
}

a:hover {
  color: #e6f3ff;
  text-decoration: none;
  transition: 0.5s;
} */

h3 {
  font-weight: bold;
  color: #037a9c;
  /* font-style: italic; */
  font-family: "Bitter";
}
#first-step {
  /* color: indianred; */
  margin-top: 50px;
  margin-bottom: 50px;
}
.wizzard-box {
  box-sizing: border-box;
  box-shadow: 1px 17px 81px 34px #e6f3ff;
  width: 500px;
  height: auto;
  border: solid 3px;
  border-color: #037a9c;
  color: #037a9c;
  padding: 25px 10px 25px 35px;
  font-family: "Sancreek", cursive;
}
.forward-btn {
  color: #037a9c;
  background: transparent;
  border: solid 2px;
  border-color: #037a9c;
  margin-top: 30px;
  text-transform: uppercase;
  transform: skewX(-25deg);
  padding: 5px;
}
.forward-btn:hover {
  background-color: #037a9c;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
</style>