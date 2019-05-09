<template>
  <div class="v-header">
    <div class="app">
      <i class="el-icon-s-platform"></i>
      管理后台
    </div>
    <div class="handle">
      <p>您好，管理员</p>
      <a href="javascript:;">
        <i class="el-icon-switch-button"></i>
        退出
      </a>
    </div>
  </div>
</template>

<style lang="stylus">
.v-header {
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  font-size: 15px;
  color: #fff;

  i {
    font-size: 16px;
  }

  .handle {
    display: flex;

    a {
      margin-left: 15px;
      color: #fff;

      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>

