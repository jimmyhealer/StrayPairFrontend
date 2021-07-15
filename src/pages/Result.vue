<template>
  <div class="container">
    <b-card title="" sub-title="" shadow>
      <SideBar />
      <b-row>
        <b-col cols="7">
          <div class="box">
            <label for="sex">性別: </label>
            <b-form-input id="sex" plaintext disabled v-model="pets[0]['sex']" />
          </div>
          <div class="box">
            <label for="age">年齡: </label>
            <b-form-input id="age" plaintext disabled v-model="pets[0]['age']" />
          </div>
          <div class="box">
            <label for="detail">詳細資料: </label>
            <b-form-textarea id="detail"  plaintext rows="9" no-resize disabled v-model="pets[0]['detail']" />
          </div>
        </b-col>
        <b-col cols="5">
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
          <div class="box">
            <label for="shelter">收容所: </label>
            <b-form-input id="shelter" plaintext disabled v-model="pets[0]['shelter']['name']" />
          </div>
          <div class="box">
            <label for="telphone">電話: </label>
            <b-form-input id="telphone" plaintext disabled v-model="pets[0]['shelter']['telphone']" />
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: "R",
  components:{
    SideBar
  },
  data(){
    return{
      pets: [
        {'sex': '男', 'age': '1', 'detail': '健康',
          'shelter': {'name': '新北流浪之家', 'telphone': '0854464554'}}
      ]
    }
  }
}
</script>

<style scoped>
.card{
  margin: 30px 0;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 3px 3px;
}

.box{
  margin: 9px 0;
}

.box label{
  margin: 3px 0 0;
}

input, textarea{
  text-align: center;
}
</style>