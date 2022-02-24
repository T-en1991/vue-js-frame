<template>
  <el-dialog
    title="新建"
    :visible="true"
    @close="$emit('dialogCancel')"
    width="60%">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="菜单名称" prop="menu_name">
        <el-input v-model="form.menu_name" placeholder="请输入菜单名称"></el-input>
      </el-form-item>
      <el-form-item label="菜单路由" prop="menu_router">
        <el-input v-model="form.menu_router" placeholder="请输入菜单路由"></el-input>
      </el-form-item>
      <el-form-item label="菜单描述" prop="menu_description">
        <el-input v-model="form.menu_description" type="textarea" :rows="3" placeholder="请输入菜单描述"></el-input>
      </el-form-item>
      <el-form-item label="菜单排序" prop="menu_sort">
        <el-input-number v-model="form.menu_sort" :min="0" :max="10000" label="菜单排序"></el-input-number>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button @click="$emit('dialogCancel')">取消</el-button>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { createMenu } from '@/api/menu'
import {Message} from 'element-ui'
export default {
  name: 'AddDialog',
  data(){
    return{
      form: {
        menu_name:'',
        menu_sort:'',
        menu_description:'',
        menu_router:''
      },
      rules:{
        menu_name:[
          { required: true, message: '请输入菜单名称', trigger: 'blur' },
          {
            min:2,
            max:5,
            message: '长度在 2 到 5 个字符', trigger: 'blur'
          }
        ],
        menu_sort:[
          { required: true, message: '请输入菜单排序', trigger: 'blur' }
        ]
      }
    }
  },
  watch:{
    'form.menu_sort'(n){
      if (n===undefined||n===''){
        this.$set(this.form, 'menu_sort', 0)
      }
    }
  },
  methods:{
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          createMenu(this.form).then(res=>{
            if (res.code!==1){
              Message.error(res.message)
            }else{
              this.$message({
                type:'success',
                message:'新增成功'
              })
              this.$emit('dialogCancel')
              this.$emit('dialogCreate')
            }
          })
            .catch(err=>{
              console.log(err)
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
