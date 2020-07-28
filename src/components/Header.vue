<template>
  <div class="header">
    <h1>header</h1>
    <div class="input">
      <div class="input-notice">
        <label for="">description:</label>
        <input type="text" />
      </div>
      <div class="input-notice">
        <label for="">relevance:</label>
        <input type="text" />
      </div>
    </div>
    <button class="btn-submit" @click="submit">submit</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      id: Number,
      description: String,
      relevance: Number
    }
  },
  methods: {
    submit() {
      const notice = {
        id: this.id,
        description: this.description,
        relevance: this.relevance,
      }
      this.$emit("emit-notice", notice);
    }
  },
  mounted() {
    const initNotice = {
      id: 1,
      description: "You are the beast",
      relevance: 3
    }
    this.$emit("emit-notice", initNotice);
  }
};
</script>
