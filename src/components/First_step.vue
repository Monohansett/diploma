<template>
  <div class="d-flex flex-column flex-wrap justify-content-center align-items-center" id="first-step">
    <h3>{{title}}</h3>
    <div class="wizzard-box d-flex flex-column align-items-center">
      <p v-focus>
        {{text}}
        
      </p>
      <input type="text" v-show='false' v-focus id='firstStepInput'>
    </div>
    <div>
      <button class="forward-btn" @click="$emit('goToManage')"><strong><a href="/manage_baggage">Перейти к ручной сборке</a></strong></button>
      <button class="forward-btn" @click="$emit('toSecondStep')">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Здравствуйте! Я Ваш помощник и постараюсь помочь Вам выбрать н аиболее оптимальный багаж в зависимости от пункта назначения и того, каким споособом вы желаете туда добраться. Если вы хотите сформировать багаж самостоятельно - нажмите кнопку -> Перейти к ручной сборке. Если же вы желаете воспользоваться моими услугами - нажмите кнопку -> Далее",
      title: "Помощник Baggage Keeper приветствует Вас!"
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
      componentUpdated(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
div > p {
  color: #037a9c;
  font-style: italic;
  font-family: "Bitter";
  font-size: 22px;
}
a {
  color: #037a9c;
  text-decoration: none;
}

a:hover {
  color: #e6f3ff;
  text-decoration: none;
  transition: 0.5s;
}

h3 {
  font-weight: bold;
  color: #037a9c;
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
  width: 500px;
  height: auto;
  border: solid 1px;
  border-color: #e6f3ff;
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
  color: orange;
  cursor: pointer;
  transition: 0.3s;
}
</style>