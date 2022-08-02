<template>
  <div>
    <svg-icon icon-class="mobelPhone" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'Download',
  data() {
    return {
      path: '/downloadApp'
    }
  },
  methods: {
    goto() {
      this.$router.push(this.path)
    }
  }
}
</script>
