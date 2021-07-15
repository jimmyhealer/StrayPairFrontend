<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="bye bl">
            <i class="fas fa-hand-spock fa-8x"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card-container" >
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/600/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
            </b-card>
          </div>
        </div>
        <div class="col-lg-3">
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
      data: [],
      number: []
    }
  },
  mounted() {
    api.getNumber().then((r) => this.number = r)
    this.$http.get('http://localhost:3000/petdata').then((res) => {this.data = res.data.data})
    console.log(this.data, this.number)
  },
  methods: {},
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