<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
<!--aria-label/aria-labelledby这两个属性是为特殊网页阅读器设置的属性，
在一些特殊设备上，当浏览到这样的内容设备会将内容读出来。是为了一些有视力障碍的人能够同样”浏览”网页而准备的
role
role 就是角色, 在既有的HTML 网页当中, 额外描述这段HTML 的功能. 例如:
如果一个网页中有两个同样的role, 就要进一步用不同的(aria-)label 来区隔.
role 本质上是增强语义性，当现有的HTML标签不能充分表达语义性的时候，就可以借助role来说明
-->
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Animal Rescue League</strong>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span><!--必须三个-->
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link v-if="$auth.isAuthenticated" to="/profile" class="navbar-item">Profile</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!--检查SDK Client是否加载完全-->
            <div v-if="!$auth.loading">
              <a v-if="!$auth.isAuthenticated" v-on:click="login" class="button"><strong>Sign In</strong></a>
              <a v-if="$auth.isAuthenticated" v-on:click="logout" class="button"><strong>Log Out</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Nav.vue',
  methods: {
    login () {
      this.$auth.loginWithRedirect();
    },
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>
