<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Checkout out our upcoming events
    </h2>

    <div class="columns is-multiline">
      <div class="column is-one-quarter"
           v-for="item in events" v-bind:key="item.id">
        <!--v-bind:event="item"-->
        <router-link v-bind:to="'/event/'+item.id">
          <EventCard v-bind:event="item"></EventCard> <!--event是card.vue的组件的自定义参数-->
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  name: 'EventsList.vue',
  components: {
    EventCard
  },
  data () {
    return {
      //  event: {},
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
    }
  }
}
</script>

<style  lang="scss" scoped>
.events{
  margin-top: 100px;
  text-align: center;
}

</style>
