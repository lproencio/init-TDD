<template>
  <div id="home">
    <Header @emit-notice="transmitNotice" />
    <List />
  </div>
</template>

<script>
import Header from "@/components/Header";
import List from "@/components/List";

export default {
  components: {
    Header,
    List
  },
  data() {
    return {
      notice: Array  
    }
  },
  methods: {
    transmitNotice(newNotice) {
      this.notice = newNotice;
    }
  }
};
</script>
