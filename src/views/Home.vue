<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the Memory of mine
          </h1>
          <h2 class="subtitle">
            Make sure you check out my upcoming mates below
          </h2>
          <div v-if="!$auth.loading" class="button-block">
            <button v-if="!$auth.isAuthenticated" v-on:click="login" class="button is-xl is-dark">Sign up to Browser Events</button>
            <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark">Welcome to memory, {{$auth.user.name}}</h3>
          </div>
        </div>
      </div>
    </section>
    <EventsList></EventsList>

  </div>
</template>

<script>
// @ is an alias to /src
import EventsList from '@/components/EventsList'
export default {
  name: 'Home',
  components: {
    EventsList
  },
  methods: {
    login () {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>

<style lang="scss" scoped>
/*
普通的style标签只支持普通的样式，如果想启用sass或者less，需要为style元素设置lang属性
*/
.hero {
  text-align: center;
  background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}
.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}
.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;
  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
.is-xl {
  font-size: 1.7rem;
}

</style>
