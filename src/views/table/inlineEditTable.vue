<template>
  <div class="app-container calendar-list-container">

    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="序号" width="80">
        <template scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="tm">
        <template scope="scope">
          <span>{{scope.row.tm}}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="作者">
        <template scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="edit">
        <template scope="scope">
          <span>{{scope.row.edit}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="标题">
        <template scope="scope">
          <el-input v-show="scope.row.edit" size="small" v-model="scope.row.title"></el-input>
          <span v-show="!scope.row.edit">{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="编辑" width="120">
        <template scope="scope">
          <el-button :type="scope.row.edit?'success':'primary'" @click='scope.row.edit=!scope.row.edit' size="small" icon="edit">{{scope.row.edit?'完成':'编辑'}}</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
console.log(format(new Date(2014, 1, 11), 'YYYY-MM-DD HH:mm'))

export default {
  name: 'inline_edit-table_demo',
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        const items = response
        console.log(items)
        this.list = items.map(v => {
          console.log(v)
          this.$set(v, 'edit', false)
          this.$set(v, 'title', v.userName)
          this.$set(v, 'tm', format(new Date(), 'YYYY-MM-DD HH:mm:SSS'))
          return v
        })
        this.listLoading = false
      })
    }
  }
}
</script>
