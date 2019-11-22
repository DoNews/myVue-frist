<!--  -->
<template>
  <div class="vueResource">
    <h1>VUE-RESOURCE</h1>
    <h2>一、vue-resource特点</h2>
    <div>1、体积小：vue-resource非常小巧，在压缩以后只有大约12KB，服务端启用gzip压缩后只有4.5KB大小，这远比jQuery的体积要小得多。</div>
    <div>2、支持主流浏览器：和Vue.js一样，vue-resource除了不支持IE 9以下的浏览器，其他主流的浏览器都支持</div>
    <div>3、支持Promise API和URI Templates：Promise是ES6的特性，Promise的中文含义为“先知”，Promise对象用于异步计算。 URI Templates表示URI模板，有些类似于ASP.NET MVC的路由模板</div>
    <div>4、支持拦截器：拦截器是全局的，拦截器可以在请求发送前和发送请求后做一些处理。 拦截器在一些场景下会非常有用，比如请求发送前在headers中设置access_token，或者在请求失败时，提供共通的处理方式。</div>
    <h2>一、安装与应用</h2>
    <div>1 NPM： npm install vue-resource --save-dev</div>
    <div>2：引入Vue框架 */import Vue from 'vue'/*引入资源请求插件*/import VueResource from 'vue-resource'/*使用VueResource插件*/Vue.use(VueResource)</div>
    <h2>语法</h2>
    <div>
      引入vue-resource后，可以基于全局的Vue对象使用http，也可以基于某个Vue实例使用http<br/>
      // 基于全局Vue对象使用http<br/>
      Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);<br/>
      Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);<br/>
      // 在一个Vue实例内使用$http<br/>
      this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);<br/>
      this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);<br/>
      在发送请求后，使用then方法来处理响应结果，then方法有两个参数，第一个参数是响应成功时的回调函数，第二个参数是响应失败时的回调函数。<br/>
      then方法的回调函数也有两种写法，第一种是传统的函数写法，第二种是更为简洁的ES 6的Lambda写法：<br/>
      // 传统写法<br/>
      this.$http.get('/someUrl', [options]).then(function(response){<br/>
      // 响应成功回调<br/>
      }, function(response){<br/>
      // 响应错误回调<br/>
      });<br/>
      // Lambda写法 es6<br/>
      this.$http.get('/someUrl', [options]).then((response) => {<br/>
      // 响应成功回调<br/>
      }, (response) => {<br/>
      // 响应错误回调<br/>
      });
      1、支持的HTTP方法：vue-resource的请求API是按照REST风格设计的，它提供了7种请求API：<br/>
      get(url, [options])<br/>
      head(url, [options])<br/>
      delete(url, [options])<br/>
      jsonp(url, [options])<br/>
      post(url, [body], [options])<br/>
      put(url, [body], [options])<br/>
      patch(url, [body], [options])<br/>
      除了jsonp以外，另外6种的API名称是标准的HTTP方法。当服务端使用REST API时，客户端的编码风格和服务端的编码风格近乎一致，这可以减少前端和后端开发人员的沟通成本。<br/>
      2、options对象<br/>
      发送请求时的options选项对象包含以下属性：<br/>
      3、emulateHTTP的作用<br/>
      如果Web服务器无法处理PUT, PATCH和DELETE这种REST风格的请求，你可以启用enulateHTTP现象。启用该选项后，请求会以普通的POST方法发出，并且HTTP头信息的X-HTTP-Method-Override属性会设置为实际的HTTP方法。<br/>
      Vue.http.options.emulateHTTP = true;<br/>
      4、emulateJSON的作用<br/>
      如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。<br/>
      Vue.http.options.emulateJSON = true;<br/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getCustomers: function () {
      this.$http.get(this.apiUrl).then((response) => {
        this.$set('gridData', response.data)
      }, (response) => {
        console.log('出错了')
      }).catch(function (response) {
        console.log(response)
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.vueResource
  width 100%
  min-height 100%
  div
    text-align left
    margin 10px
</style>
