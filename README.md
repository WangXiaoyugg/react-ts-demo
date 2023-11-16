# React-ts-demo
一个学习 React, typescript 的 demo 项目。

## 项目搭建
1. 了解 React 常见的脚手架，创建项目
2. 配置编码规范, eslint, prettier
3. 代码提交到Git仓库, husky, commitlint

### Vite 和 Webpack 的 区别
1. Create-React-App 内部使用 webpack 进行打包
2. Vite 比 Webpack 打包项目更快（启动时，代码更新时）,Vite 使用 ES Module 的语法（开发环境）
3. 但技术选型要综合考虑，包括稳定性、成本、效率等。

## JSX 和 组件
1. 学习JSX 基本语法
2. 学会React组件基础知识
3. 实战： 开发一个列表页

### 标签
1. 大写表示组件，小写表示html标签
2. 标签必须要闭合
3. 每个JSX只能有一个根节点
   
### 属性
1. class 要改为 className
2. style 要使用JS对象，而且 key用驼峰写法
3. for 要改为 htmlFor

### 事件
1. 使用onXxx 的形式
2. 必须要传入一个函数
3. 注意TS 的类型

### 插入JS变量
1. 使用 {XXX} 插入变量， 函数，表达式
2. 可插入文本，属性
3. 可用于注释

### 条件判断
1. &&
2. 条件表达式

### 循环
1. 使用数组map

### 组件
1. 父子组件通信
2. 组件自定义Props的 TS 类型 

### 列表实战
1. List 组件
2. QuestionCard 组件


### JSX 和 模板的区别
1. 判断， Vue 模板使用 v-if，v-else,  React JSX 使用条件表达式
2. 循环， Vue 模板使用 v-for, React JSX 使用 map。
3. React能用JS就用JS, Vue 自定义很多指令