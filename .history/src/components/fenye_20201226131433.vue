<template>
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="4"
      layout="prev, pager, next, jumper"
      :total="6">
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
        console.log(`当前页: ${val}`);
        this.$emit('envirclick',val);
      }
    },
    props:['cpagecount'],
    data() {
      return {
        currentPage1: 1,
      };
    }
}
</script>
