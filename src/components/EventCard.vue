<template>
  <div class="event-card">
    <div class="card">
      <div class="card-content">
        <h2 class="is-size-4 has-text-weight-bold">{{event.name}}</h2>
        <small class="event-date">{{ event.date }}</small>
        <span>{{event.location}}</span>
      </div>
    </div>
  </div>
<!--
   1\ <small> 标签呈现小号字体效果。
  <small> 标签和它所对应的 <big> 标签一样，但它是缩小字体而不是放大。
  如果被包围的字体已经是字体模型所支持的最小字号，那么 <small> 标签将不起任何作用。
  2\rgba() 函数使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。
RGBA 即红色、绿色、蓝色、透明度（英语：Red, Green, Blue、Alpha）
相比rgb()多了一个透明度
  -->
</template>

<script>
export default {
  name: 'EventCard.vue',
  props: [
    'event'
  ]
}
</script>

<style lang="scss" scoped>
.card{
  background-image: url("../assets/cover.jpg");//报错the server responded with a status of 407 (Proxy Authentication Required)
  height: 200px;
  background-position: center;
  background-size: cover;
  text-align: center;
}
.card-content{
  padding-top: 50px;
  position: absolute;
  color: #FFF;
  background-color: rgba(0,0,0,0.35) ;
  top: 0;
  padding: 10px;
  height: 200px;
  width: 100%;
  span{
    font-size: 18px;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
  h2{
    margin-top: 10px;
  }
}
.event-date{
  background-color: #151515;
  color: #FFF;
  font-size: 0.75em;
  padding: 2px 10px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
