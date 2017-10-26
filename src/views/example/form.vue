<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="base">
        <el-input v-model="form.base" style="width: 40%;"></el-input>
      </el-form-item>
      <el-form-item label="url">
        <el-input v-model="form.url" style="width: 40%;"></el-input>
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
      <el-form-item label="Response">
        <pre v-model="form.desc" style="line-height: 110%"> {{ form.desc | json }} </pre>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          base: 'http://sasmbp:7210/api/open',
          url: 'http://baidu.com',
          para: '',
          method: 'get',
          type: 'json',
          desc: ''
        }
      }
    },

    methods: {
      onSubmit() {
        this.form.desc = "";
        console.log(this.form);
        this.form.name = 'ss';
        this.form.desc = JSON.parse(JSON.stringify(this.form));
        this.$message(this.form.url)
      }
    },
    filters: {
      json: (value) => {
        return JSON.stringify(value, null, 2)
      }
    },
  }

</script>
