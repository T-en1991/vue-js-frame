<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar style="height: 100%;">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="menuSelect">
          <el-menu-item v-for="(item) in $store.state.menu.menuList" :index="item.menu_router" :key="item.id">
            <template v-slot:title>
              <i class="el-icon-location"></i>
              <span slot="title">{{item.menu_name}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
          <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>github</el-dropdown-item>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item divided @click.native="loginOut">login out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { removeToken } from '../utils/auth'

export default {
  name: 'layout',
  data () {
    return {
      searchContent: '',
      squareUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    loginOut () {
      this.$store.commit('user/SET_TOKEN', '')
      removeToken()
      this.$router.push({ path: '/login' })
    },
    getMenuList () {
      this.$store.dispatch('menu/ActionGetMenuList')
    },
    menuSelect (router) {
      this.$router.push({
        path: `/${router}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-header{
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #fff;
}
.el-aside {
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu{
  text-align: left;
  background-color: transparent;
}
.el-menu-item{
  color: rgb(191, 203, 217);
}
/deep/ .el-menu-item:focus  .el-menu-item:hover{
  background-color:#263445!important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

</style>
