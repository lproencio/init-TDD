<template>
  <div class="home">
    <Header @emit-notice="transmitNotice" />
    <List :noticeList="notice" v-if="showList"/>
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
      notice: Object,
      showList: false
    }
  },
  methods: {
    transmitNotice(newNotice) {
      this.notice = newNotice;
      this.showList = true;
    }
  }
};
</script>
