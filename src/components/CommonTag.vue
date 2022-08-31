<template>
    <div class="tabs">
        <el-tag size="small"
        v-for="(item,index) in tag"
        :key="item.name"
        :closable="item.name !=='home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changMenu(item)"
        @close="handdleClose(item,index)"
        >
            {{item.label}}
        </el-tag>
    </div>
</template>

<script>
import { mapState , mapMutations } from 'vuex';
    export default {
        name:"CommonTag",
        computed:{
            ...mapState({
                tag : state=>state.tab.tabList
            })
        },
        methods:{
            ...mapMutations({
               close:'closeTag' 
            }),
            changMenu(item){
                this.$router.push(item.name)
            },
            handdleClose(item,index){
                const length= this.tag.length-1
                this.close(item)

                if(item.name !== this.$route.name){
                    return
                }
                if(index ===length ){
                    console.log("index ===length");
                    this.$router.push({
                        name:this.tag[index-1].name
                    })
                }else{
                    console.log("index!==length");
                    this.$router.push({
                        name:this.tag[index].name
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .tabs {
        padding: 20px;
        .el-tag {
            margin-right: 15px;
            cursor: pointer;
        }
    }
    </style>