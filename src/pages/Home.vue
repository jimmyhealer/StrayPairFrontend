<template>
  <div v-if="begin">
    <div class="container">
      <div class="row">
        <div class="col-lg-3" @click="bye">
          <div class="bye bl">
            <i class="fas fa-hand-spock fa-8x"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-container" >
            <b-card
              v-for="(item, index) in data | index === cur"
              :key="index"       
              :title="item.variety"
              :img-src="require(`@/assets/${item.image}`)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
             />
          </div>
        </div>
        <div class="col-lg-3" @click="like">
          <div class="like bl">
            <i class="fas fa-heart fa-8x"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api.js'

export default {
  name: "Home",
  data() {
    return{
      petdata: [],
      number: [],
      cur: 0,
      curindex: 0,
      begin: false
    }
  },
  mounted() {
    this.cur = this.number[this.curindex]
    api.getNumber().then((r) => this.number = r.data)
    this.$http.get('http://localhost:3000/petdata').then((res) => {
      this.begin = true
      this.petdata = res.data
    })
  },
  methods: {
    like(){
      
    },
    bye(){

    }
  },
};
</script>

<style scoped>
.container {
  /* display: flex; */
  margin: 120px auto;
}

.card{
  margin: auto;
}

.col-lg-3{
  padding: 60px 0 0;
  margin: auto;
}

.bl{
  height: 200px;
  width: 200px;
  margin: auto;
  border-radius: 50%;
  background-color: rgba(255, 12, 37, 0.5);
  box-shadow: rgba(0, 0, 0, 0.5) 3px 3px 3px;
}

.bl i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}
</style>