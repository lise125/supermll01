<template>
  <div class="goods-item" @click="goodsciclk()">
    <img :src="pand" alt="" @load="imgload()">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgloada:true
    }
  },
props:{
  goodsitem: {
      type: Object,
      default() {
        return [];
      },
    },
},
computed:{
  pand(){
    return this.goodsitem.image||this.goodsitem.show.img
  }
},
methods:{
  imgload(){
    if(!this.$route.path.indexOf("/home")){
      //判断是否是home页面在活跃
       this.$store.commit('imglodea',this.imgloada)
    }else if(!this.$route.path.indexOf("/detail")){
      //判断是否是detail页面活跃
      this.$store.commit('detailImglodea',this.imgloada)
    }
  },
  goodsciclk(){
    //点击了商品后跳转到相应的详情页面
    this.$router.push({
      path:'/detail',
      query:{
        id:this.goodsitem.iid
      }
    })
  }
}
}
</script>

<style>
 .goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color--pink);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>