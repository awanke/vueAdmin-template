<template>
  <div class="app-container" style="margin: 0;">
    <!--<el-form ref="form" :model="form" label-width="120px" style="margin: 0;line-height: 10%; width: 70%;">-->
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="url">
        <el-input v-model="form.url" style="width: 100%;"></el-input>
      </el-form-item>
       <el-form-item label="sql">
        <el-input v-model="form.sql" style="width: 100%;"></el-input>
      </el-form-item>

      <el-form-item label="para">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='RID' width="95">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="id" width="110" align="center"><template scope="scope"><span>{{scope.row.id}}</span></template></el-table-column>
      <el-table-column label="utime" width="210" align="center"><template scope="scope"><span>{{scope.row.utime}}</span></template></el-table-column>
      <el-table-column label="docid" width="210" align="left"><template scope="scope"><span>{{scope.row.docid}}</span></template></el-table-column>
      <el-table-column label="title" width="510" align="left"><template scope="scope"><span>{{scope.row.title}}</span></template></el-table-column>
      <!--<el-table-column label="row" width="210" align="center"><template scope="scope"><span>{{scope.row}}</span></template></el-table-column>-->
    </el-table>
    <pre>{{form.desc}}</pre>
  </div>
</template>

<script>
  import {getList} from '@/api/data'
  import ElForm from "../../../node_modules/element-ui/packages/form/src/form.vue";

  export default {
    components: {ElForm},
    data() {
      return {
        form: {
          base: 'http://sasmbp:7210/api/open',
          url: 'http://test.ts.netease.com/api/db/sql',
          sql: 'select id,utime,docid,pushtype,title from push order by id desc limit 5',
          para: '',
          method: 'get',
          type: 'json',
          desc: ''
        },
        list: [],

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
        return statusMap["success"]
      }
    },
    created() {
      this.fetchData()
    },

    methods: {
      change() {
        this.form.desc = {};
        this.form.desc["req"] = JSON.parse(JSON.stringify(this.form));
        this.form.desc["res"] = JSON.parse(JSON.stringify(this.list));
      },

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },

      fetchData() {
        this.listLoading = true;
        this.list.res = "old";
        getList(this.form.base, this.form.method, {
          "type": "json",
          "url": this.form.url,
          "para": {"sql": this.form.sql}
        }).then(response => {
          console.log(response);
          this.sleep(30)
          this.list = JSON.parse(response.res);
          console.log(this.list);
          this.listLoading = false
          this.change();
        })
      },
      onSubmit() {
        this.fetchData();
        this.$message("over url=" + JSON.stringify(this.form.url))
      }
    }
  }
</script>
