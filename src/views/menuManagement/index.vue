<template>
  <div class="menuManagement">
    <div class="menu_action">
      <el-button type="primary" @click="dialogCreate=true">新建</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;"
      stripe
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      >
      <el-table-column
        prop="id"
        label="菜单ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="menu_name"
        label="菜单名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="menu_router"
        label="菜单路由"
        width="300">
      </el-table-column>
      <el-table-column
        prop="menu_description"
        label="菜单描述"
      >
      </el-table-column>
      <el-table-column
        prop="menu_sort"
        label="菜单排序"
        width="120">
      </el-table-column>
      <el-table-column
        prop="created_time"
        label="创建时间"
        width="300">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template v-slot="scope">
          <el-button :disabled="scope.row.menu_sort<0" type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm
            style="margin-left: 10px"
            title="确定删除吗？"
            @confirm="handleDelete(scope.row)"
          >
            <el-button :disabled="scope.row.menu_sort<0" type="text" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="dialogCreate">
      <add-dialog @dialogCancel="dialogCreate=false" @dialogCreate="getMenuList"></add-dialog>
    </div>
    <div v-if="dialogEdit">
      <edit-dialog @dialogCancel="dialogEdit=false" @dialogEdit="getMenuList" :row="row"></edit-dialog>
    </div>
  </div>
</template>

<script>
import { getMenuList, deleteMenu } from '@/api/menu'
import AddDialog from './cmps/AddDialog/AddDialog'
import EditDialog from './cmps/EditDialog/EditDialog'
export default {
  name: 'menuManagement',
  data () {
    return {
      tableData: [],
      dialogCreate: false,
      dialogEdit: false,
      visible: false,
      row: null
    }
  },
  components: {
    AddDialog,
    EditDialog
  },
  created () {
    this.getMenuList()
  },
  methods: {
    getMenuList () {
      getMenuList().then((res) => {
        if (res.code !== 1) {
          this.$message.error(res.message)
        } else {
          this.tableData = res.data
        }
      })
    },
    handleEdit (row) {
      this.row = row
      this.dialogEdit = true
    },
    handleDelete (row) {
      deleteMenu({ id: row.id }).then(res => {
        if (res.code !== 1) {
          this.$message.error(res.message)
        } else {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getMenuList()
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.menuManagement{
  max-height: calc(100vh - 150px);
  overflow: auto;
  .menu_action{
    margin: 20px 0;
    text-align: end;
  }
}

</style>
