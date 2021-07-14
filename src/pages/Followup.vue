<template>
  <div class="container">
    <div class="pos-rel m-4">
      <div class="progress" style="height: 3px">
        <b-progress :value="value" :max="max"></b-progress>
      </div>
      <b-button pill variant="primary" class="pos-abs s0">6/18</b-button>
      <b-button pill variant="primary" class="pos-abs s50">6/21</b-button>
      <b-button pill variant="light" class="pos-abs s100">6/30</b-button>
    </div>
    <b-card title="Card title" sub-title="Card subtitle">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up
        the bulk of the card's content.
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Followup",
  data() {
    return {
      value: 50,
      max: 100,
    };
  },
};
</script>

<style scoped>
.progress {
  width: 100%;
}

.pos-rel {
  position: relative;
}

.pos-abs {
  position: absolute;
  top: 0;
  transform: translate(-50%,-50%);
}

.s0 {
  left: 0;
}

.s50 {
  left: 50%;
}

.s100 {
  left: 100%;
}
</style>