<template>
  <div class="app-container document">

    <div v-hasRole="['superadmin']" v-if="isSuperAdmin">
      <super-admin-home></super-admin-home>
    </div>

    <div v-hasRole="['admin', 'agent', 'auditor']" v-if="!isSuperAdmin">
      <el-alert
        style="margin-bottom: 10px"
        v-for="alert in noticeList"
        :title="alert.noticeTitle"
        type="warning"
        :description="alert.noticeContent"
        show-icon
      />
      <fcms-home></fcms-home>
    </div>

  </div>
</template>

<script>
import SuperAdminHome from '@/views/superadmin/home/index'
import FcmsHome from '@/views/fcms/home/index'
import { listNotice } from '@/api/system/notice'

export default {
  name: 'Index',
  components: {
    FcmsHome,
    SuperAdminHome
  },
  data() {
    return {
      isSuperAdmin: this.$store.getters.name == 'superadmin',
      noticeList: []
    }
  },
  mounted() {
    this.getNoticeData()
  },
  methods: {
    getNoticeData() {
      listNotice({ noticeType: 2 }).then(response => {
        this.noticeList = response.rows
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
