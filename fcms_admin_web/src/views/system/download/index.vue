<template>
  <div class="app-container">
    <el-row>
      <el-card class="update-log">
        <div slot="header" class="clearfix">
          <span>App下载</span>
        </div>
        <div class="body">
          <el-col v-if="apkDownloadUrl.length > 10" :xs="24" :sm="12" :md="6" :lg="6">
            <vue-qr
              colorDark="#A4C439"
              :text="apkDownloadUrl"
              :logoSrc="require('@/assets/app/android.png')"
              :correctLevel="3"
              :size="220"
              :margin="20"
            />
            <p class="version"><a :href="apkDownloadUrl">版本：{{ apkVersion }}</a></p>
          </el-col>
          <el-col v-if="ipaDownloadUrl.length > 10" :xs="24" :sm="12" :md="6" :lg="6">
            <vue-qr
              colorDark="#000000"
              :text="ipaDownloadUrl"
              :logoSrc="require('@/assets/app/ios.png')"
              :correctLevel="3"
              :size="220"
              :margin="20"
            />
            <p class="version"><a :href="ipaDownloadUrl">版本：{{ ipaVersion }}</a></p>
          </el-col>
          <el-col v-if="miniAppLink.length > 10" :xs="24" :sm="12" :md="6" :lg="6">
            <vue-qr
              colorDark="#6159B2"
              :text="miniAppLink"
              :logoSrc="require('@/assets/app/mini.png')"
              :correctLevel="3"
              :size="220"
              :margin="20"
            />
            <p class="version"><a :href="miniAppLink">版本：{{ miniVersion }}</a></p>
          </el-col>
          <el-col v-if="appWebLink.length > 10" :xs="24" :sm="12" :md="6" :lg="6">
            <vue-qr
              colorDark="#009CF5"
              :text="appWebLink"
              :logoSrc="require('@/assets/app/web.png')"
              :correctLevel="3"
              :size="220"
              :margin="20"
            />
            <p class="version"><a :href="appWebLink">版本：{{ appVersion }}</a></p>
          </el-col>
        </div>
      </el-card>
    </el-row>

    <div v-hasPermi="['admin:app:upload']">
      <el-row style="margin-top: 20px">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>App上传</span>
          </div>
          <div class="body">
            <file-upload :value="value"></file-upload>
            <div>{{ value }}</div>
          </div>
        </el-card>
      </el-row>
    </div>

  </div>
</template>

<script>
import vueQr from 'vue-qr'
import { getConfigKeyValues } from '@/api/system/config'

export default {
  name: 'Download',
  components: {
    vueQr
  },
  data() {
    return {
      value: null,
      apkDownloadUrl: '',
      apkVersion: '',
      ipaDownloadUrl: '',
      ipaVersion: '',
      miniAppLink: '',
      miniVersion: '',
      appWebLink: '',
      appVersion: ''
    }
  },
  created() {
    this.goTargetLink()
  },
  methods: {
    goTargetLink() {

      getConfigKeyValues('app.download.android').then(res => {
        this.apkDownloadUrl = res.data.configValue
        this.apkVersion = res.data.configContent
      })

      getConfigKeyValues('app.download.ios').then(res => {
        this.ipaDownloadUrl = res.data.configValue
        this.ipaVersion = res.data.configContent
      })

      getConfigKeyValues('app.mini.link').then(res => {
        this.miniAppLink = res.data.configValue
        this.miniVersion = res.data.configContent
      })

      getConfigKeyValues('app.web.link').then(res => {
        this.appWebLink = res.data.configValue
        this.appVersion = res.data.configContent
      })
    }
  }
}
</script>

<style scoped>

.body {
  display: flex;
  align-content: center;
}

.version {
  color: #1890FF;
  font-size: 12px;
  font-style:italic;
  text-align: center;
  border: 1px solid #1890FF;
  border-radius: 4px;
  margin-left: 60px;
  width: 100px;
  height: 20px;
}
</style>
