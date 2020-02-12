# 基于SM3算法的在线文件完整性校验网站

## 简介

本网站提供文件的上传与下载，并通过SM3算法生成唯一的哈希值，用于检测文件的完整性。另外，本网站可单纯用于计算文件哈希值，计算过程均在前端完成，不涉及上传，保护用户隐私。

## 功能使用

打开主页网站点击“开始体验”按钮，跳转到文件上传页面。上传页面点击“选择文件”按钮，选择文件后可自动计算文件哈希值，之后选择是否上传，上传成功显示“已上传”。导航栏点击“文件下载列表”即可进入下载列表页面，列表中有文件的名称、哈希值和上传时间，点击想下载的文件名即可下载。

## 源码介绍

- 各个文件的英文名用于不同的页面，index为主页，upload为上传页面，download为下载页面
- /js 文件夹下是项目的所有JS文件，**SM3算法实现的代码文件为upload.js**
- /css 文件夹下是项目的所有CSS文件
- /res 文件夹下是gulp前端自动化生成的可以使用的HTML文件
- /src 文件夹下是真正的HTML源码
- 其余文件夹是gulp工具需要所配置的，与实现功能无关