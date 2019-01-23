<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Slim msg="This is SLIM"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slim from '@/components/Slim.vue'

export default {
  name: 'home',
  components: {
    Slim
  }
}
</script>
