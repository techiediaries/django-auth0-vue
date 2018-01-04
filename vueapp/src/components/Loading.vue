<template>

  <div class="spinner" v-if="loading">
    
    <img src="../assets/loading.svg" alt="loading"/>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Loading',
    props: ['loading'],
    data () {
        return {}
    }
  }
</script>

<style>
    h1{
        color: black;
    }
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
