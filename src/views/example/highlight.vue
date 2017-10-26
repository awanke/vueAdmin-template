<template>
  <div class="app-container">
    1
    {{ da }}
    2
    <pre>{{ da }}</pre>
    3
    <pre>{{ da | json }}</pre>
    4
  </div>

</template>

<script>
  var da = {"base":"http://sasmbp:7210/api/open","url":"http://baidu.com","para":"","method":"get"};
  export default {
//    el: '#app',
    data() {
      return {
        list: null,
        da: da,
        message: JSON.stringify(da, null, 4),
        listLoading: true,


    }
      this.getReady(); // Ready
      hljs.initHighlightingOnLoad();
    },
    filters: {
      json: (value) => { return JSON.stringify(value, null, 2) }
    },
  }
</script>
