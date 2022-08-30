<template>
  <div>
     <!-- 开启关闭按钮 -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b" 
    :collapse="isCollapse">
      <h3>{{isCollapse?'后台':"通用后台管理系统"}}</h3>
      <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren" :key="item.name" index="item.path + '' " >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :key="item.name" index="item.path + '' ">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children"  index="item.path + '' " :key="subItem.path">
          <el-menu-item >{{subItem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name
      })
    }
  },
  // mounted(){
  //   console.log(this.$store.state.tab.iscollapse);
  // },
  computed:{
    noChildren(){
      return this.menu.filter(item=>!item.children)
    },
    hasChildren(){
      return this.menu.filter(item=>item.children)
    },
    isCollapse(){
      return this.$store.state.tab.iscollapse
    },
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border: none;
  height: 100vh;
    h3{
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
}
</style>