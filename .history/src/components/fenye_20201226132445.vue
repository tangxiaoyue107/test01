<template>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="this.cpagesize"
      layout="prev, pager, next, jumper"
      :total="this.cpagecount">
    </el-pagination>
  </div>
</template>
<script>
export default {
      methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.$emit('envirclick',val);
      }
    },
    props:['cpagecount','cpagesize'],
    data() {
      return {
        currentPage1: 1,
      };
    }
}
</script>
