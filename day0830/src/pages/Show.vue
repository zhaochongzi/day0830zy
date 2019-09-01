<template>
    <div>
        <Header />
        <div class="bannerbox">
            <swiper>
                <swiper-slide v-for="(item,index) in data.bannerimg" :key="index">
                    <img :src="item.img">
                </swiper-slide>
            </swiper>
        </div>
        <div class="button">
            <button @click="clicktoAdmission">免费专区</button>
            <button @click="clicktoFemale">女频专区</button>
        </div>
        <div>
            <p class="rexo">编辑力荐</p>
            <dl class="rexommend">
                <dt>
                    <img :src="data.Recommend.img">
                </dt>
                <dd>
                    <p class="name">{{data.Recommend.name}}</p>
                    <p class="details">{{data.Recommend.details}}</p>
                    <p class="autho">
                        <span>{{data.Recommend.author}}</span>
                        <span>
                            <span v-for="(item,index) in data.Recommend.type" :key="index" class="allitem">
                                <span class="title">{{item}}</span>
                            </span>
                        </span>
                    </p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import '../mock'
import axios from 'axios'
import Header from '../components/Header'
export default {
     data(){
        return{
            data:[]
        }
    },
    components:{
        Header
    },
    created(){
        axios.get('/api/data').then(res=>{
            this.data=res.data.data
            console.log(this.data)
        })
    },
    methods:{
        clicktoAdmission(){
            this.$router.push({
                path:'/show/admission'
            })
        },
        clicktoFemale(){
            console.log('女频专区')
        }
    }
}
</script>
<style scoped>
.bannerbox{
    width:100%;
    height:10rem;
}
swiper{
    width:100%;
    height:100%;
}
swiper-slide{
    width:100%;
    height:100%;
}
img{
    width:100%;
    height:150px;
}
.button{
    width:100%;
    height:50px;
    display:flex;
    justify-content: space-around;
}
.button button{
    width:180px;
    height:40px;
}
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