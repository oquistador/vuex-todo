<template lang="pug">
  #app
    router-view
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="sass">
  html
    color: rgba(0, 0, 0, 0.85)
    font: 14px 'Avenir', Helvetica, Arial, sans-serif, normal

  #app
    color: rgba(0, 0, 0, 0.85)
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

  input
    font-family: 'Avenir', Helvetica, Arial, sans-serif, normal

  button
    background: #2196F3
    border: 0
    border-radius: 2px
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.25)
    color: #fff
    cursor: pointer
    font-size: 1em
    font-weight: 600
    line-height: 2em
    outline: 0
    padding: 0 2em
    text-transform: uppercase
</style>
