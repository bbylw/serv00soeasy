// ==UserScript==
// @name         serv00soeasy
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  自动填充表单
// @author       DABO
// @match        *://*.serv00.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // 设置邮箱域名配置
    const EMAIL_CONFIG = {
        useFixedEmail: false, // 设置为 true 使用固定邮箱，false 使用固定后缀前缀随机邮箱
        fixedEmail: 'xxx@xxx.com',  // 修改为你的固定邮箱，例如 'xxx@xxx.com'
        suffixDomain: 'xxx.com',    // 修改为你的域名后缀，例如 'xxx.com'
    };

    // 生成随机字符串（5个字母）
    function generateRandomString() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return result;
    }

    // 随机生成名字
    function generateRandomName() {
        return {
            firstName: generateRandomString(),
            lastName: generateRandomString()
        };
    }

    // 生成随机邮箱
    function generateRandomEmail(firstName, lastName) {
        // 生成随机数字（0-999）
        const randomNum = Math.floor(Math.random() * 1000);
        // 生成邮箱前缀
        const emailPrefix = `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomNum}`;
        
        // 根据配置选择邮箱生成方式
        if (EMAIL_CONFIG.useFixedEmail) {
            return EMAIL_CONFIG.fixedEmail;
        } else {
            return `${emailPrefix}@${EMAIL_CONFIG.suffixDomain}`;
        }
    }

    // 生成随机用户名
    function generateRandomUsername(firstName, lastName) {
        return `${firstName.toLowerCase()}${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}`;
    }

    // 自动填充表单
    async function autoFillForm() {
        const name = generateRandomName();
        const email = generateRandomEmail(name.firstName, name.lastName);
        const username = generateRandomUsername(name.firstName, name.lastName);

        // 填充名字字段
        const firstNameInputs = document.querySelectorAll('input[name*="first_name" i], input[id*="first_name" i]');
        firstNameInputs.forEach(input => input.value = name.firstName);

        // 填充姓氏字段
        const lastNameInputs = document.querySelectorAll('input[name*="last_name" i], input[id*="last_name" i]');
        lastNameInputs.forEach(input => input.value = name.lastName);

        // 填充用户名字段
        const usernameInputs = document.querySelectorAll('input[name*="username" i], input[id*="username" i]');
        usernameInputs.forEach(input => input.value = username);

        // 填充邮箱字段
        const emailInputs = document.querySelectorAll('input[type="email"], input[name*="email" i], input[id*="email" i]');
        emailInputs.forEach(input => input.value = email);

        // 填充答案字段
        const answerInputs = document.querySelectorAll('input[name*="question" i], input[id*="question" i]');
        answerInputs.forEach(input => input.value = "free");

        // 自动勾选服务条款复选框
        const tosCheckboxes = document.querySelectorAll('input[type="checkbox"][name="tos"], input[type="checkbox"][id*="tos" i]');
        tosCheckboxes.forEach(checkbox => checkbox.checked = true);
    }

    // 添加重试机制
    let retryCount = 0;
    const MAX_RETRIES = 3;

    async function tryFillForm() {
        try {
            await autoFillForm();
        } catch (error) {
            console.error('表单填充失败:', error);
            if (retryCount < MAX_RETRIES) {
                retryCount++;
                setTimeout(tryFillForm, 1000); // 1秒后重试
            }
        }
    }

    // 事件监听器
    document.addEventListener('DOMContentLoaded', tryFillForm);
    window.addEventListener('load', tryFillForm);
})();
