<template>
    <div>
          <div class="d-flex flex-column flex-wrap justify-content-center align-items-center" id="first-step">
        <h1>Наши предложения</h1>
        <hr>
            <div class="baggage-list">
              <h3>{{baggage.shortDesc}}</h3>
              <div class="ssss">
                <input class="form-control" type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Добавить вещь" v-focus> 
                <button class="forward-btn" @click="addItem"><strong>Добавить</strong></button>
              </div>
              
              <div class="trip-item" v-for="(item,index) in baggage.items" :key="item.index" v-focus>
                  <div class="trip-item-left">
                      <div v-if="!item.editing"  @dblclick="editTripItem(item)" class="trip-item-label" > 
                      {{item.title}} 
                    </div>
                    <input v-else class="trip-item-edit"  type="text" v-model="item.title" @blur="doneEditItem(item)" @keyup.enter="doneEditItem(item)" @keyup.esc="cancelEditItem(item)" v-focus>
                  </div>
                 <div class="remove-item" @click="removeItem(index)">
                    &times;
                </div>
              </div>
            </div>
              <div class="save-baggage">
                <button class="forward-btn" @click="saveBaggage" ><strong>Сохранить</strong></button>
              </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baggage: {},
      newItem: "",
      itemEditBeforeCache: "",
      idForItem: 6
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
  },
  methods: {
    addItem() {
      if (this.newItem.trim().length == 0) {
        return;
      }
      this.baggage.items.push({
        id: this.idForItem,
        title: this.newItem,
        editing: false
      });
      this.newItem = "";
      this.idForItem++;
    },
    removeItem(index) {
      this.baggage.items.splice(index, 1);
    },
    editTripItem(item) {
      this.beforeEditItemCache = item.title;
      item.editing = true;
    },
    doneEditItem(item) {
      if (item.title == "") {
        item.title = this.beforeEditItemCache;
      }
      item.editing = false;
    },
    cancelEditItem(item) {
      item.title = this.beforeEditItemCache;
      item.editing = false;
    },
    saveBaggage() {
      const params = new URLSearchParams();
      params.append(
        "event_id",
        "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
      );

      // console.log(params);
      axios({
        method: "post",
        url: `http://localhost:3000/diplom/baggageFile`,
        data: params
      });
    }
  },
  mounted() {
    axios
      .get(`http://localhost:3000/diplom/baggage/${this.baggageId}`)
      .then(response => {
        // console.log(response.data[0]);
        return (this.baggage = response.data);
      });
    // console.log(this.info);
  },
  props: {
    baggageId: {
      type: Number,
      default() {
        return 1, 2;
      }
    }
  }
};
</script>
<style scoped>
input {
  width: 260px;
}
.baggage-list {
  margin-bottom: 30px;
  text-align: center;
}
.trip-item {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.remove-item {
  cursor: pointer;
  margin-left: 20px;
  font-size: 24px;
}
.remove-item:hover {
  color: #037a9c;
}

.trip-item-left {
  display: flex;
  align-items: center;
}
.trip-item-label {
  font-family: "Sancreek", cursive;
  font-size: 20px;
  color: #037a9c;
  /* padding: 10px; */
  border: 1px solid white;
  /* margin-left: 12px; */
}
.trip-item-edit {
  width: 200px;
  border-color: #037a9c;
  font-size: 24px;
  color: #037a9c;
  /* margin-left: 12px; */
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
.trip-item-edit:focus {
  outline: none;
}
h3 {
  font-weight: bold;
  font-style: italic;
  color: #037a9c;
  font-family: "Bitter";
}
h1 {
  margin-top: 30px;
  font-weight: bold;
  /* font-style: italic; */
  color: #037a9c;
  font-family: "Bitter";
}
.ssss {
  display: flex;
}
.forward-btn {
  /* display: inline-block; */
  float: right;
  color: #037a9c;
  background: transparent;
  border: solid 2px;
  border-color: #037a9c;
  border-radius: 5px;
  /* margin-top: 30px; */
  margin-left: 15px;
  text-transform: uppercase;
  /* transform: skewX(-25deg); */
  padding: 5px;
}
.forward-btn > strong {
  color: #037a9c;
}
.forward-btn:hover {
  background: #037a9c;
}
.forward-btn > strong:hover {
  color: white;
  transition: 0.3s;
}
</style>
