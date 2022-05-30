# Dummies-Crawler-Frontend
# 傻瓜式爬虫前端

## 实现内容：
页面整体布局，流程图绘制，个人主页与列表显示等

## 基本代码组成和功能：

### src/views 包含主要的功能性页面
###### home 静态页面，教程与视频示例；
###### error 静态页面，出错导航页面；
###### spider 爬虫相关页面:
###### spider/detail.vue 核心流程图绘制页面
###### spider/templates 各节点参数配置部分
###### spider/json 工具栏设置
###### datasource 数据源管理页面；
user 用户页面
---
### src/components
###### /main 整体页面布局
###### header-bar 头部导航和边栏折叠控制区域；
###### side-menu 系统名称、用户头像和边部菜单栏区域；
###### index.js main.vue 整体页面；
###### code-editor 脚本编辑（估计可删除）；
###### CronModal cron 选择框
---
### src/libs
流程图绘制功能实现核心模块

### src/api
爬虫、数据源、用户等信息管理