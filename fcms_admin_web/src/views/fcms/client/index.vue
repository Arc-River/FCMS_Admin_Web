<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="80px">
      <el-form-item label="用户ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="客户姓名" prop="clientName">
        <el-input
          v-model="queryParams.clientName"
          placeholder="请输入客户姓名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="姓名拼音" prop="clientPinyin">
        <el-input
          v-model="queryParams.clientPinyin"
          placeholder="请输入姓名拼音"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备注名称" prop="remarkName">
        <el-input
          v-model="queryParams.remarkName"
          placeholder="请输入备注名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所属项目" prop="projectName">
        <el-input
          v-model="queryParams.projectName"
          placeholder="请输入客户所属项目"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="客户邮箱" prop="email">
        <el-input
          v-model="queryParams.email"
          placeholder="请输入客户邮箱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input
          v-model="queryParams.phone"
          placeholder="请输入手机号码"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备用号码" prop="phoneStandby">
        <el-input
          v-model="queryParams.phoneStandby"
          placeholder="请输入备用手机号码"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model="queryParams.age"
          placeholder="请输入年龄"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="queryParams.sex" placeholder="请选择性别" clearable>
          <el-option
            v-for="dict in dict.type.sys_user_sex"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择状态" clearable>
          <el-option
            v-for="dict in dict.type.sys_normal_disable"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['fcms:client:add']"
        >新增
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['fcms:client:edit']"
        >修改
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['fcms:client:remove']"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['fcms:client:export']"
        >导出
        </el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table border v-loading="loading" :data="clientList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" fixed="left"/>
      <el-table-column label="客户ID" align="center" prop="clientId" min-width="100"/>
      <el-table-column label="用户ID" align="center" prop="userId" min-width="100"/>
      <el-table-column label="文件ID" align="center" prop="fileId" min-width="100"/>
      <el-table-column label="客户头像" align="center" prop="liveness" min-width="100">
        <template slot-scope="scope">
          <el-image
            style="width: 60px; height: 60px; border-radius: 30px;"
            :src="scope.row.avatarUrl"
            :preview-src-list="[scope.row.avatarUrl]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column label="客户姓名" align="center" prop="clientName" min-width="120"/>
      <el-table-column label="姓名拼音" align="center" prop="clientPinyin" min-width="160"/>
      <el-table-column label="所属项目" align="center" prop="projectName" min-width="160"/>
      <el-table-column label="客户邮箱" align="center" prop="email" min-width="160"/>
      <el-table-column label="手机号码" align="center" prop="phone" min-width="160"/>
      <el-table-column label="备用号码" align="center" prop="phoneStandby" min-width="160"/>
      <el-table-column label="人脸特征码" align="center" prop="faceCode" :show-overflow-tooltip="true" min-width="300"/>
      <el-table-column label="活体检测" align="center" prop="liveness" min-width="80">
        <template slot-scope="scope">
          <el-tag size="medium" v-if="scope.row.liveness">是</el-tag>
          <el-tag size="medium" v-if="!scope.row.liveness">否</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center" prop="age" min-width="50"/>
      <el-table-column label="性别" align="center" prop="sex" min-width="100">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_user_sex" :value="scope.row.sex"/>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center" prop="status" min-width="100">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_normal_disable" :value="scope.row.status"/>
        </template>
      </el-table-column>
      <el-table-column label="更新者" align="center" prop="updateBy" width="100"/>
      <el-table-column label="更新时间" align="center" prop="updateTime" width="160"/>
      <el-table-column label="创建者" align="center" prop="createBy" width="100"/>
      <el-table-column label="创建时间" align="center" prop="createTime" width="160"/>
      <el-table-column label="备注" align="center" prop="remark"/>
      <el-table-column label="操作" align="center" fixed="right" class-name="small-padding fixed-width" min-width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['fcms:client:edit']"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['fcms:client:remove']"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改客户信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户ID"/>
        </el-form-item>
        <el-form-item label="文件ID" prop="fileId">
          <el-input v-model="form.fileId" placeholder="请输入文件ID"/>
        </el-form-item>
        <el-form-item label="客户姓名" prop="clientName">
          <el-input v-model="form.clientName" placeholder="请输入客户姓名"/>
        </el-form-item>
        <el-form-item label="姓名拼音" prop="clientPinyin">
          <el-input v-model="form.clientPinyin" placeholder="请输入姓名拼音"/>
        </el-form-item>
        <el-form-item label="备注名称" prop="remarkName">
          <el-input v-model="form.remarkName" placeholder="请输入备注名称"/>
        </el-form-item>
        <el-form-item label="客户所属项目" prop="projectName">
          <el-input v-model="form.projectName" placeholder="请输入客户所属项目"/>
        </el-form-item>
        <el-form-item label="客户邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入客户邮箱"/>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号码"/>
        </el-form-item>
        <el-form-item label="备用手机号码" prop="phoneStandby">
          <el-input v-model="form.phoneStandby" placeholder="请输入备用手机号码"/>
        </el-form-item>
        <el-form-item label="活体检测" prop="liveness">
          <el-input v-model="form.liveness" placeholder="请输入活体检测"/>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"/>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option
              v-for="dict in dict.type.sys_user_sex"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="头像地址" prop="avatar">
          <el-input v-model="form.avatar" placeholder="请输入头像地址"/>
        </el-form-item>
        <el-form-item label="头像Base64" prop="avatarBase">
          <el-input v-model="form.avatarBase" type="textarea" placeholder="请输入内容"/>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in dict.type.sys_normal_disable"
              :key="dict.value"
              :label="dict.value"
            >{{ dict.label }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listClient, getClient, delClient, addClient, updateClient } from '@/api/fcms/client'

export default {
  name: 'Client',
  dicts: ['sys_normal_disable', 'sys_user_sex'],
  data() {
    return {
      fallbackImg: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 客户信息表格数据
      clientList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        fileId: null,
        clientName: null,
        clientPinyin: null,
        remarkName: null,
        projectName: null,
        email: null,
        phone: null,
        phoneStandby: null,
        liveness: null,
        age: null,
        sex: null,
        avatar: null,
        avatarBase: null,
        status: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userId: [
          { required: true, message: '用户ID不能为空', trigger: 'blur' }
        ],
        fileId: [
          { required: true, message: '文件ID不能为空', trigger: 'blur' }
        ],
        clientName: [
          { required: true, message: '客户姓名不能为空', trigger: 'blur' }
        ],
        clientPinyin: [
          { required: true, message: '姓名拼音不能为空', trigger: 'blur' }
        ],
        avatar: [
          { required: true, message: '头像地址不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询客户信息列表 */
    getList() {
      this.loading = true
      listClient(this.queryParams).then(response => {
        this.clientList = response.rows
        this.total = response.total
        this.loading = false
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 表单重置
    reset() {
      this.form = {
        clientId: null,
        userId: null,
        fileId: null,
        clientName: null,
        clientPinyin: null,
        remarkName: null,
        projectName: null,
        email: null,
        phone: null,
        phoneStandby: null,
        liveness: null,
        age: null,
        sex: null,
        avatar: null,
        avatarBase: null,
        status: '0',
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null
      }
      this.resetForm('form')
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm')
      this.handleQuery()
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.clientId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset()
      this.open = true
      this.title = '添加客户信息'
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      const clientId = row.clientId || this.ids
      getClient(clientId).then(response => {
        this.form = response.data
        this.open = true
        this.title = '修改客户信息'
      })
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.clientId != null) {
            updateClient(this.form).then(response => {
              this.$modal.msgSuccess('修改成功')
              this.open = false
              this.getList()
            })
          } else {
            addClient(this.form).then(response => {
              this.$modal.msgSuccess('新增成功')
              this.open = false
              this.getList()
            })
          }
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const clientIds = row.clientId || this.ids
      this.$modal.confirm('是否确认删除客户信息编号为"' + clientIds + '"的数据项？').then(function() {
        return delClient(clientIds)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess('删除成功')
      }).catch(() => {
      })
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('fcms/client/export', {
        ...this.queryParams
      }, `client_${new Date().getTime()}.xlsx`)
    }
  }
}
</script>

<style lang="css"> .el-tooltip__popper{ max-width:400px } </style>
<style lang="scss" scoped>

</style>
