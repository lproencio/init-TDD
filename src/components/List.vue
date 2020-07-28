<template>
  <div class="list">
    <h1>This is an about page</h1>
    <p>{{ noticeList }}</p>
  </div>
</template>

<script>
export default {
  props: {
    noticeList: Object
  },
  watch: {
   noticeList() {
     console.log(this.noticeList);
   } 
  }
}
</script>