<!--
 * @Description: 
 * @Autor: Lizijie
 * @Date: 2020-08-06 10:01:11
 * @LastEditors: Lizijie
 * @LastEditTime: 2020-08-06 11:14:50
-->
<template>
  <div class="home">
    <TopHeader />
    <div class="main">
      <webview class="webview" src="http://116.31.109.188:8000" useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"></webview>
    </div>
  </div>
</template>
<script>
import TopHeader from '@/components/TopHeader'
export default {
  name: 'Home',
  components: {
    TopHeader
  },
  mounted() {
    // const webview = document.querySelector('webview')
    // webview.addEventListener('dom-ready', () => {
    //   webview.openDevTools()
    // })
  }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0;
}
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    flex: 1;
    overflow-x: auto;
    .webview {
      height: 100%;
    }
  }
}
</style>