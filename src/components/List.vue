<template>
  <div class="list">
    <h1>This is an about page</h1>
    <p>{{ arrList }}</p>
  </div>
</template>

<script>
export default {
  props: {
    noticeList: Object
  },
  data() {
    return {
      arrList: [],
      newNotices: this.noticeList
    }
  },
  watch: {
   noticeList() {
     this.arrList.push(this.newNotices);
   } 
  }
}
</script>