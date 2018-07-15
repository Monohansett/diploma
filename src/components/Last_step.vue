<template>
  <div class="d-flex flex-column flex-wrap justify-content-center align-items-center" id="first-step">
    <h3>{{title}}</h3>
    <div class="wizzard-box d-flex flex-column align-items-between">
        <p>
          Здорово! Вот что я могу Вам предложить!
        </p>
    
     <div class="row d-flex flex-wrap justify-content-center" >
         <!-- <div v-for="currency in info" class="currency" :key="currency.id"> -->
            <div @click="$emit('interface', currency.id); $emit('toBaggageStep')" class="card" v-for="currency in info" :key="currency.id" id="baggage-card"  style="width: 18rem;" >
                <img class="card-img-top" src="/images/slide01.jpg" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" v-html="currency.fullDescription"></p>
                    <a href="#" class="btn card-btn">Подробнее</a>
                    <!-- <p>
                      <input type="checkbox" id="test4"/>
                      <label for="test4">Выбрать багаж</label>
                    </p> -->
                </div>
            </div>
       </div>
      <div class="flex-row flex-wrap align-items-center">
        <button class="forward-btn" @click="$emit('toThirdStep')"><strong>Назад</strong></button>
        <button class="forward-btn" @click="$emit('toFirstStep')"><strong>В начало</strong></button>
      </div>
  </div>
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "Наши предложения",
      info: []
    };
  },
  mounted() {
    axios
      .get(
        `http://localhost:3000/diplom/baggage?transportId=${
          this.transportId
        }&&countryId=${this.countryId}`
      )
      .then(response => {
        console.log(response.data);
        return (this.info = response.data);
      });
    // console.log(this.info);
  },
  props: {
    transportId: {
      type: Number,
      default() {
        return 1;
      }
    },
    countryId: {
      type: Number,
      default() {
        return 1;
      }
    }
  }
};
</script>

<style scoped>
.card-body {
  vertical-align: bottom;
}
div > p {
  font-size: 24px;
}
.card-text {
  color: #037a9c;
}
.row > * {
  padding: 0 0 0 0;
}

#baggage-card {
  margin-right: 30px;
}
label {
  color: #e6f3ff;
}
a {
  color: indianred;
  text-decoration: none;
}

a.active {
  color: indianred;
}
a:hover {
  color: #e6f3ff;
  text-decoration: none;
  transition: 0.5s;
}
#second-row {
  margin-top: 30px;
}
.card {
  background: transparent;
  border-color: #037a9c;
  color: #e6f3ff;
  box-shadow: 0px 0px 3px 3px #e6f3ff;
}
h3 {
  font-weight: bold;
  /* font-style: italic; */
  font-family: "Bitter";
}
#first-step {
  color: #037a9c;
  margin-top: 50px;
  margin-bottom: 50px;
}
.wizzard-box {
  box-sizing: border-box;
  box-shadow: 1px 17px 81px 34px #e6f3ff;
  width: 1200px;
  height: auto;
  border: solid 1px;
  border-color: #e6f3ff;
  color: #037a9c;
  padding: 26px 32px 24px 34px;
  font-family: "Sancreek", cursive;
  text-align: center;
}
.forward-btn {
  color: #037a9c;
  background: transparent;
  border: solid 2px;
  border-color: #037a9c;
  margin-top: 30px;
  margin-right: 15px;
  text-transform: uppercase;
  transform: skewX(-25deg);
  padding: 5px;
}
.forward-btn:hover {
  background-color: #037a9c;
  color: #e6f3ff;
  cursor: pointer;
  transition: 0.3s;
}
.card-btn {
  color: #037a9c;
  background: transparent;
  border: solid 2px;
  border-color: #037a9c;
  margin-top: 30px;
  text-transform: uppercase;
  transform: skewX(-25deg);
  padding: 5px;
  /* vertical-align: bottom; */
}
.card-btn:hover {
  background-color: #037a9c;
  color: #e6f3ff;
  cursor: pointer;
  transition: 0.3s;
}
/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 32px;
  cursor: pointer;
  margin-bottom: 4px;
  display: inline-block;
  font-size: 16px;
}
/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 2px;
  top: 0px;
  width: 22px;
  height: 22px;
  border: 2px double e6f3ff;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: "✔";
  position: absolute;
  top: 0px;
  left: 5px;
  font-size: 20px;
  line-height: 1.2;
  color: #9199f0;
  transition: all 0.2s;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #999999;
  background-color: #dddddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999999;
}
[type="checkbox"]:disabled + label {
  color: #aaaaaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px dotted cd5c5c;
}
/* hover style just for information */
label:hover:before {
  border: 2px solid cd5c5c !important;
  background: #ffffff;
}
</style>