<template>
  <div class="app-container">
    <div>
      <pre>{{list}}</pre>
      <hr/>
      <el-form>
        <el-form-item label="response">
          <!--<el-input type="textarea" v-model="list.res" rows="8" style="size: 1000px"></el-input>-->
        </el-form-item>
      </el-form>
      <!--<div v-html="list">{{list.res}}</div>-->
    </div>
  </div>
</template>

<script>
  import {getList} from '@/api/data'
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form.vue";

  export default {
    components: {ElForm},
    data() {
      return {
        list: {
          url: 'dft',
          res: 'dft'
        },
        listLoading: true
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        console.log("status=" + status);
        return statusMap["success"]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true;
//        getList("get", {"type":"json","url":"http://abc.com"}).then(response => {
//          getList("get", {"type":"json","url":"http://test.ts.netease.com/alive"}).then(response => {
        getList("get", {"type": "json", "url": "http://www.baidu.com"}).then(response => {
          console.log(response);
          this.list = response;
          console.log(this.list);
          this.listLoading = false
        })
      }
    }
  }
</script>
