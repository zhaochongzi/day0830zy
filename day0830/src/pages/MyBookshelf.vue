import axios from 'axios';
<template>
    <div>
        <p class="rexo">
            <span>共收藏5本</span>
            <span>编辑</span>
        </p>
        <dl class="rexommend">
            <dt>
                <!-- <img :src="data.Recommend.img"> -->
            </dt>
            <dd>
                <!-- <p class="name">{{data.Recommend.name}}</p> -->
                <!-- <p class="details">{{data.Recommend.details}}</p> -->
                <!-- <p class="autho">
                    <span>{{data.Recommend.author}}</span>
                    <span>
                        <span v-for="(item,index) in data.Recommend.type" :key="index" class="allitem">
                            <span class="title">{{item}}</span>
                        </span>
                    </span>
                </p> -->
            </dd>
        </dl>
    </div>
</template>
<script>
import '../mock'
import axios from 'axios'
export default {
    daata(){
        return{
            data:[],
            count:0
        }
    },
    created(){
        axios.get('/api/data').then(res=>{
            this.data = res.data.data
        })
    }
}
</script>
<style scoped>

.rexommend{
    width:95%;
    height:150px;
    display:flex;
    margin:10px;
}
.rexommend dt{
    flex:3;
    margin-right:10px
}
.rexommend dt img{
    width:100%;
    height:130px;
}
.rexommend dd{
    flex:8;
}
.rexo{
    margin-left:10px;
}
.details{
    width:100%;
    height:60px;
    font-size:13px;
    color:#aaa;
    margin:3px 0;
}
.name{
    margin:10px 0;
}
.autho{
    width:100%;
    height:20px;
    display:flex;
    justify-content: space-between;
    font-size:12px;
}
.title{
    padding:3px;
    background:#fada;
    margin-left:3px;
}
</style>