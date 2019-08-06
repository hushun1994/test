<template>
  <div class="app">
    <!-- {{ name }} -->
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: 'zhou'
    }
  }
  
}
</script>

<style>
.app {
  font-size: 20px;
  font-weight: bold;
}
</style>
