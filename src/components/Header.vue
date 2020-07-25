<template>
  <div class="header">
    <p>header</p>
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
      this.$emit("emit-notice", notice)
    }
  }
};
</script>
