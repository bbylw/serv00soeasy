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
如果你想使用固定域名（如 xxx@gmail.com），请这样配置：
```javascript
const EMAIL_CONFIG = {
    fixedDomain: 'gmail.com',    // 改为你想要的域名
    randomDomains: [],           // 保持空数组
    useRandomDomain: false       // 保持 false
};
```
这样会生成类似 `abcde12345@gmail.com` 的邮箱地址。

### 方式二：使用随机前缀邮箱
如果你想使用带随机前缀的邮箱（如 xxx@mail.xxx.com），请这样配置：
```javascript
const EMAIL_CONFIG = {
    fixedDomain: 'xxx.com',
    randomDomains: [
        {prefix: '', domain: 'xxx.com'},      // 生成 xxx@xxx.com
        {prefix: 'mail', domain: 'xxx.com'},  // 生成 xxx@mail.xxx.com
        {prefix: 'em', domain: 'xxx.com'}     // 生成 xxx@em.xxx.com
    ],
    useRandomDomain: true        // 改为 true 启用随机前缀
};
```
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
2. 支持大多数标准的表单字段命名方式
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
