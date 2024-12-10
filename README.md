# serv00soeasy serv00自动填充表单脚本

## 简介
这是一个基于 Tampermonkey 的用户脚本，用于自动填充网页注册表单。脚本会在页面加载完成后自动执行，无需手动操作。

## 功能特点
- 自动生成随机用户名
- 自动生成随机英文姓名
- 支持固定邮箱域名和随机前缀邮箱
- 自动填充问题答案
- 自动勾选服务条款复选框
- 支持动态加载的表单

## 安装步骤
1. 首先安装 Tampermonkey 浏览器扩展
   - [Chrome 版本](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox 版本](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. 点击 Tampermonkey 图标，选择"添加新脚本"

3. 将脚本代码复制粘贴到编辑器中

4. 配置邮箱生成方式（二选一）：

### 方式一：使用固定邮箱域名

如果您希望每次使用固定的邮箱地址（例如`xxx@xxx.com`），请按照以下步骤配置：

1. 在脚本代码中找到`EMAIL_CONFIG`对象。
2. 将`useFixedEmail`设置为`true`：
   ```javascript
   const EMAIL_CONFIG = {
       useFixedEmail: true, // 设置为 true 使用固定邮箱
       fixedEmail: 'xxx@xxx.com', // 修改为你希望使用的固定邮箱地址
       suffixDomain: 'xxx.com'    // 这行可以保留或删除，因为不会被使用
   };
```
这样会生成类似 `abcde12345@gmail.com` 的邮箱地址。

### 方式二：使用随机前缀邮箱
   
如果您希望每次生成一个随机前缀但固定后缀的邮箱地址（例如randomPrefix@xxx.com），请按照以下步骤配置：

在脚本代码中找到EMAIL_CONFIG对象。
将useFixedEmail设置为false
const EMAIL_CONFIG = {
    useFixedEmail: false, // 设置为 false 使用随机前缀邮箱
    fixedEmail: 'xxx@xxx.com', // 这行可以保留或删除，因为不会被使用
    suffixDomain: 'xxx.com'    // 修改为你希望使用的域名后缀
};

这样会从配置的前缀中随机选择一个，生成对应格式的邮箱地址。

5. 按 Ctrl+S 保存脚本

## 邮箱生成说明
- 邮箱前缀（@符号前面的部分）总是随机生成的，由随机字母和数字组成
- 方式一只随机生成前缀，域名部分固定
- 方式二会随机选择一个前缀配置，可以生成多种格式的邮箱地址
- 两种方式通过 useRandomDomain 参数来切换

## 支持的表单字段
脚本会自动识别并填充以下字段：
- 名字 (first_name)
- 姓氏 (last_name)
- 用户名 (username)
- 电子邮箱 (email)
- 问题答案 (question)
- 服务条款复选框 (tos)

## 注意事项
1. 脚本会在页面加载完成后自动执行
2. 支持大多数标准的���单字段命名方式
3. 如果表单是动态加载的，脚本也会在 load 事件触发时尝试填充

## 更新日志
### v0.1
- 初始版本发布
- 实现基本的表单自动填充功能
- 添加随机数据生成
- 支持自动勾选服务条款

## 许可证
MIT License

## 作者
DABO

## 问题反馈
如有问题或建议，请在 GitHub 上提交 Issue。

## 待优化
- 希望大佬能帮忙实现自动识别并填入验证码的功能
