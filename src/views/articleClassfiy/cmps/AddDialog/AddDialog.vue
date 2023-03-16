<template>
  <el-dialog
    title="新建"
    :visible="true"
    @close="$emit('dialogCancel')"
    width="60%">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" prop="description">
        <el-input v-model="form.description" type="textarea" :rows="3" placeholder="请输入分类描述"></el-input>
      </el-form-item>
      <el-form-item label="分类排序" prop="sort">
        <el-input-number v-model="form.sort" :min="0" :max="10000" label="分类排序"></el-input-number>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button @click="$emit('dialogCancel')">取消</el-button>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { createArticleClassfiy } from '@/api/article'
import { Message } from 'element-ui'
export default {
  name: 'AddDialog',
  data () {
    return {
      form: {
        name: '',
        sort: '',
        description: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
        ],
        sort: [
          { required: true, message: '请输入分类排序', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    'form.sort' (n) {
      if (n === undefined || n === '') {
        this.$set(this.form, 'sort', 0)
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          createArticleClassfiy(this.form).then(res => {
            if (res.code !== 1) {
              Message.error(res.message)
            } else {
              this.$message({
                type: 'success',
                message: '新增成功'
              })
              this.$emit('dialogCancel')
              this.$emit('dialogCreate')
            }
          })
            .catch(err => {
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
