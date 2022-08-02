## 开发

> 人脸客户管理系统

```bash
# 进入项目目录
cd fcms_admin_ui

# 安装依赖
npm install

# 启动服务
npm run dev
```
浏览器访问 http://localhost:8088

* 超级管理员 superadmin abcd1234
* 管理员
* 代理
* 会员

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```