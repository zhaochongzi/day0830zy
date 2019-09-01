<template>
  <div>
    <Header />
    <div class="information">
      <ul>
        <li>剩余金额：</li>
        <li>推荐票：</li>
        <li>月票：</li>
      </ul>
    </div>
    <div class="conten">
        <div class="headr">
            <router-link to="/myBookshelf">我的书架</router-link>
            <router-link to="/recent">最近阅读</router-link>
        </div>
        <div>
            <router-view />
        </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style>
.information {
  width: 97%;
  height: 85px;
  padding:5px;
}
.information ul{
    width:95%;
    height:95%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.conten{
    width:100%;
}
.headr{
    display:flex;
    height:40px;
    justify-content: space-around;
    background:#ccc;
    align-items:center;
}
.headr a{
    color:#000;
}
</style>