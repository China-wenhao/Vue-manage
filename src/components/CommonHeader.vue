<template>
    <div>
        <header>
            <div class="l-content">
                <el-button plain icon="el-icon-menu" size="mini"
                @click="handdleMenu"
                ></el-button>
                <h3 style="color:#fff">首页</h3>
            </div>
            <div class="r-content">
                <el-dropdown trigger="click" size="mini">
                    <span>
                        <img class="user" :src="userImg">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>
    </div>
</template>
 
<script>
export default {
    name: "CommonHeader",
    data() {
        return {
            userImg: require('../assets/images/user.png')
        }
    },
    methods:{
        handdleMenu(){
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

 .el-breadcrumb__item {
    .el-breadcrumb__inner {
        font-weight: normal;

        &.is-link {
            color: #666
        }

        a {
            color: #666
        }
    }

    &:last-child {
        .el-breadcrumb__inner {
            color: #fff;
        }
    }
}
</style>