<template>
  <div id="taobao">
    <!-- <div id="nav">
      <div class="nav_in">
        <ull></ull>
        <ul class="nav_r">
          <li></li>
        </ul>
      </div>
    </div>
    <div id="top">aaaaa</div>
    <div id="container">bbbbb</div>
    <div id="bottom">ccccc</div> -->
    <Ull />
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import Ull from '@/taobao/component1'

export default {
  components: {
    Ull
  }
}
</script>

<style>
  @import url('./taobao.css');
</style>
