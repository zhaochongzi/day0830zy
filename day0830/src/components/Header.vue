<template>
    <div class="header">
        <router-link tag="li" to="/show">首页</router-link>
        <router-link tag="li" to="/list">分类</router-link>
        <router-link tag="li" to="/ranking">排行</router-link>
        <router-link tag="li" to="/bookshelf">书架</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
.header{
    height:50px;
    width:100%;
    background:#333333;
    color:#fff;
    display:flex;
    justify-content: space-around;
    align-items:center;
}
.header a{
    color:#fff;
}
</style>