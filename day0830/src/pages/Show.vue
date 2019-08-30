<template>
    <div>
        <Header />
        <div class="bannerbox">
            <swiper>
                <swiper-slide v-for="(item,index) in data" :key="index">
                    <img :src="item.img">
                </swiper-slide>
            </swiper>
        </div>
        <div class="button">
            <button>免费专区</button>
            <button>女频专区</button>
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
            this.data=res.data.data.bannerimg
        })
    },
    mounted(){
      
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
    height:100px;
    display:flex;
    justify-content: space-around;
}
.button button{
    width:180px;
    height:40px;
}
</style>