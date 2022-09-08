<template>
  <div>
    <button style="float: right; padding: 20px" class="btn btn-primary">
      <div @click="ascending">최신순 정렬</div>
      <hr />
      <div @click="rollback">되돌리기 정렬</div>
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'SortPage',
  computed: {
    ...mapState(['post']),
  },
  methods: {
    ascending() {
      this.post.sort(function (a, b) {
        return b.id - a.id;
      });
    },
    rollback() {
      // 변경 전: this.$store.state.post = [...this.$store.state.postOrigin];
      // 변경 후: state.post 값을 변경하기위해 mutations 적용
      this.$store.commit('setPost');
    },
  },
};
</script>
<style></style>
