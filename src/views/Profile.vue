<template>
  <div class="profile">
    <div class="section">
      <div class="container">
        <img v-bind:src="$auth.user.picture">
        <p class="is-size-3 " ><strong>Your account:</strong>{{ $auth.user.name }}</p>
        <p class="is-size-4">
          <strong>Your E-mail:</strong>
          {{ $auth.user.email }}
        </p>
      </div>
    </div>
    <div class="footer">
      <p class="is-size-2">User message:</p>
      <p>{{ JSON.stringify($auth.user,null) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile.vue'
}
</script>

<style scoped>

</style>
