<template>
  <div class="app-container document">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        <blockquote class="text-warning" style="font-size: 14px">
          技术支持
          <br/>
          <el-link
            href="https://www.fcms.com"
            type="primary"
            target="_blank"
          >https://www.fcms.com
          </el-link
          >
          <br/>
          代码仓库
          <br/>
          <el-link
            href="https://www.github.com/fcms"
            type="primary"
            target="_blank"
          >https://github.com/fcms
          </el-link
          >
          <hr/>
          <span style="font-size: 10px">*提示：数据无价，请谨慎操作！</span>
        </blockquote>

        <hr/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>人脸客户管理系统</h2>
        <p>
          FCMS是一个人脸识别客户管理系统，助力销售人员业绩提升。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
        <p>
          <el-tag type="danger">&yen; 290,00.00</el-tag>
        </p>
        <p>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-cloudy"
            plain
            @click="goTarget('')"
          >商务咨询
          </el-button
          >
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2 class="text-blue">技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis</li>
              <li>Druid</li>
              <li>Fastjson</li>
              <li>MyBatis-plus</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Quill</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider/>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>更新日志</span>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v1.0.0 - 2022-06-05">
              <ol>
                <li>人脸特征提取</li>
                <li>1:1人脸对比</li>
                <li>1:N人脸检索</li>
              </ol>
            </el-collapse-item>
            <el-collapse-item title="v0.0.1 - 2022-05-28">
              <ol>
                <ul>🎯 项目启动 环境搭建</ul>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>联系信息</span>
          </div>
          <div class="body">
            <p>
              <i class="fa fa-envelope"></i> 邮箱：<a href="javascript:;">niyongsheng@Outlook.com</a>
            </p>
            <p>
              <i class="fa fa-bandcamp"></i> 微博：
              <el-link
                href="https://weibo.com/u/7317805089"
                target="_blank"
              >https://weibo.com/u/7317805089
              </el-link
              >
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>捐赠支持</span>
          </div>
          <div class="body">
            <vue-qr
              colorDark="#06B4FD"
              :text="aliPayUrl"
              :logoSrc="require('@/assets/pay_icon/zhifubao.png')"
              :size="200"
            />
            <vue-qr
              colorDark="#28C445"
              :text="wechatPayUrl"
              :logoSrc="require('@/assets/pay_icon/weixin.png')"
              :size="200"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vueQr from "vue-qr";

export default {
  name: "SuperadminHome",
  components: {
    vueQr
  },
  data() {
    return {
      // 版本号
      version: "1.0.0",
      aliPayUrl: 'HTTPS://QR.ALIPAY.COM/FKX015782HHDZBGCD48P8E',
      wechatPayUrl: 'wxp://f2f0ii5k6_-0jhGpfMV-bHZndnLPMOZCd7lo'
    };
  },
  methods: {
    goTarget(href) {
      // window.open(href, "_blank");
      window.location.href = 'tel:18853936112';
    },
  },
};
</script>

<style scoped lang="scss">
.document {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>
