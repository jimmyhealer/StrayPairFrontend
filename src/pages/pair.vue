<template>
  <div id="pair" style="height: 100vh">
    <div class="container h-75">
      <div class="row h-100 justify-content-center align-content-center">
        <StrayIntroCard class="col-4" imgsrc="dog1.jpg" description="我是一隻好狗狗"/>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-around">
        <button class="btn btn-default col-1">
          <img src="@/assets/img/goodbye.png" alt="goodbye" style="max-width: 80px">
        </button>
        <button class="btn btn-default col-1">
          <img src="@/assets/img/heart.png" alt="heart" style="max-width: 80px">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import StrayIntroCard from '../components/strayIntroCard.vue'

export default {
  name: 'pair',
  components: {
    StrayIntroCard
  }
}
</script>

