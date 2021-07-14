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
    <b-card title="領養狀況回報"> 
      <b-form @submit="onSubmit">

        <b-form-group id="input-group-2" label="內容回報:" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="form.content"
            placeholder="Enter content"
            rows="6"
            max-rows="6"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-form-file v-model="form.image" class="mt-3" plain @change="onFileChange"></b-form-file>
        <div id="imgpreview" class="mb-3">
          <img v-if="form.imgurl" :src="form.imgurl" />
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
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
      form: {
        content: '',
        image: null,
        imgurl: null,
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onFileChange(e) {
      console.log("file change");
      const file = e.target.files[0];
      this.form.imgurl = URL.createObjectURL(file);
      console.log(this.form.imgurl);
    }
  }
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

#imgpreview img{
  max-width: 100%;
  max-height: 500px;
}

</style>