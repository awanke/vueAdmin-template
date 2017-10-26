<template>
  <div class="app-container" style="margin: 0;">
    <el-form ref="form" :model="form" label-width="120px" style="margin: 0;line-height: 10%; width: 70%;">
      <el-form-item label="base">
        <el-input v-model="form.base"></el-input>
      </el-form-item>
      <el-form-item label="url">
        <el-input v-model="form.url" style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="para">
        <el-input type="textarea" v-model="form.para"></el-input>
      </el-form-item>
      <el-form-item label="method">
        <el-radio-group v-model="form.method">
          <el-radio label="get"></el-radio>
          <el-radio label="post"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="type">
        <el-radio-group v-model="form.type">
          <el-radio label="json"></el-radio>
          <el-radio label="html"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
      <el-form-item label="Response" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit
                    highlight-current-row>
        <pre v-model="form.desc" style="line-height: 110%"> {{ form.desc}} </pre>
      </el-form-item>
    </el-form>
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
          url: 'http://www.baidu.com',
          para: '',
          method: 'get',
          type: 'json',
          desc: ''
        },
        list: {
          url: 'dft',
          res: 'old'
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
        getList(this.form.base, this.form.method, {"type": "json", "url": this.form.url}).then(response => {
          console.log(response);
          this.sleep(30)
          this.list = response;
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
