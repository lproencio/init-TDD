<template>
  <div class="header">
    <h1>header</h1>
    <div class="input">
      <div class="input-notice">
        <label for="">description:</label>
        <input data-cy="input-desc" type="text" v-model="description" />
      </div>
      <div class="input-notice">
        <label for="">relevance:</label>
        <input data-cy="input-relevance" type="number" v-model="relevance" />
      </div>
    </div>
    <div class="btn-submit">
      <button
        data-cy="btn-submit"
        :class="{ disabled: isDisabled }"
        :disabled="isDisabled"
        @click="submit"
      >
        submit
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        id: 1,
        description: "",
        relevance: null,
      };
    },
    computed: {
      isDisabled() {
        if (!this.description || !this.relevance) {
          return true;
        } else {
          return false;
        }
      },
    },
    methods: {
      submit() {
        const notice = {
          id: this.id,
          description: this.description,
          relevance: this.relevance,
        };
        this.$emit("emit-notice", notice);
      },
    },
  };
</script>
