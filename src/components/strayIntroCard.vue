<template>
  <div class="StrayIntroCard">
    <div class="card text-center">
      <img v-bind:src="require('@/assets/img/'+imgsrc)" v-bind:alt="imgsrc"/>
      <div class="card-body">
        <div class="card-title">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrayIntroCard',
  props: {
    imgsrc: String,
    description: String
  }
}
</script>

