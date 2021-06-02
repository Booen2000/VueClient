<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">

          <h1 class="title">
             {{ event.name }}
          </h1>
          <h2 class="subtitle">
            <strong>Date:</strong>{{ event.date }}
            <br/>
            <strong>Time:</strong>{{event.time}}
          </h2>

        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">Description: {{ event.description }}</p>
        <p class="is-size-4">
          <strong>Location:</strong>
          {{event.location}}
        </p>
        <p class="is-size-4">
          <strong>Category:</strong>
          {{event.category}}
        </p>

        <div class="event-images columns is-multiline has-text-centered">
          <div class="column is-one-third"
               v-for="image in event.images"
               v-bind:key="image.id">
            <img v-bind:src="image" v-bind:alt="event.name" />

            {{$route.params.id}}<!--获取进入的参数，可以在此显示-->
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'EventSingle.vue',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'yangla',
          category: 'senior',
          description: 'He is a boy',
          featuredImage: 'https://placekitten.com/500/500', // ?
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          location: 'Beijing',
          date: '06-01-2000',
          time: '11:30' // ?
        },
        {
          id: 2,
          name: 'xumy',
          category: 'junior',
          description: 'She is a girl',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500'
          ],
          location: 'Nanjing',
          date: '12-23-2020',
          time: '12:00'
        },
      ],
      event: {},
    }
  },
  created () {
    const param = Number(this.$route.params.id);// 传入的是字符,需要转为数字
    // console.log(param, typeof (param));
    let event = this.events.find(item => item.id === param);
    this.event = event;
  }

}
</script>

<style scoped>
.event-single{
  margin-top: 30px;
  text-align: left;
}
.hero{
  margin-bottom: 70px;
}
.event-images{
  margin-top: 50px;
}
.description{
  margin-bottom: 30px;
}

</style>
