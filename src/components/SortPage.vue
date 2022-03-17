<template>
  <div>
    <button style="float: right; padding: 20px;" class="btn btn-primary">
      <div @click="ascending">
        최신순 정렬
      </div>
      <hr />
      <div @click="rollback">
        되돌리기 정렬
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: "SortPage",
  methods: {
    ascending() {
      this.$store.state.post.sort(function(a, b) {
        return b.id - a.id;
      });
    },
    rollback() {
      this.$store.state.post = [...this.$store.state.postOrigin];
    },
  },
};
</script>
<style></style>
