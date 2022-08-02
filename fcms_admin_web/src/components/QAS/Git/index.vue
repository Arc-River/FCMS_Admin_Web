<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script>
export default {
  name: 'Git',
  data() {
    return {
      url: 'https://element.eleme.cn/#/zh-CN/component/button'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
