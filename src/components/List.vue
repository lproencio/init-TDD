<template>
  <div class="list">
    <h1>Notice List</h1>
    <div class="body">
      <div data-cy="all-notice" class="all-notice" v-for="(item, i) in arrList" :key="i">
        <div class="notice">
          <div>
            <h2>{{ Object.keys(item)[0] }}</h2>
            <p>{{ item.id }}</p>
          </div>
          <div class="description">
            <h2>{{ Object.keys(item)[1] }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div>
            <h2>{{ Object.keys(item)[2] }}</h2>
            <p>{{ item.relevance }}</p>
          </div>
          <div>
            <h2>delete</h2>
            <button class="delete"><Close /></button>
          </div>
          <div>
            <h2>edit</h2>
            <button class="edit"><Pencil /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Close from "@/assets/svg/close.svg";
  import Pencil from "@/assets/svg/pencil.svg";

  export default {
    components: {
      Close,
      Pencil
    },
    props: {
      noticeList: Object
    },
    data() {
      return {
        arrList: [],
        newNotices: this.noticeList,
      };
    },
    watch: {
      noticeList() {
        this.arrList.push(this.noticeList);
      },
    },
  };
</script>
