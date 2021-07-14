<template>
  <div class="image">
    <b-img :src="urls"></b-img>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    urls: String
  }
}
</script>

<style scoped>
.image{
  width: 960px;
  height: 100vh;
  overflow: hidden;
}
img{
  width: 960px;
  height: 100vh;
  background-size: cover;
}

.mask{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 960px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.mask h1{
  color: azure;
  font-size: 72px;
}
</style>