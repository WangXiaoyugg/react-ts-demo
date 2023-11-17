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


## React Hooks
1. React 内置Hooks
2. 自定义 Hooks
3. 使用第三方Hooks


### useState
1. state 是 内部的状态，state的更新会触发组件的更新
2. state 的更新是异步更新
3. 如果变量不在JSX中使用，用useRef 代替 useState
4. 可能会被合并, 使用函数不会被合并
5. 不可变数据，不去修改state的值，而是去传入一个新值

### immer
不可变数据


### useEffect
声明周期：创建，更新，销毁
React18开始，开发环境会执行两次useEffect, 模拟组件创建、更新、销毁的完整流程
生产环境会执行一次useEffect

### useRef
一般用于操作DOM
也可传入普通JS 变量，不会触发 rerender

### useMemo
可以缓存数据，不用每次执行函数都重新执行
可用于计算量较大的场景，缓存提高性能

### useCallback
缓存事件的回调函数

### 抽离公共部分 复用代码
1. 自定义hooks
2. 第三方hooks, react-use, a-hooks

### Hooks 的使用规则
1. 必须使用 useXXX 格式命名
2. 只能在两个地方调用hook, 组件内，其他的Hook
3. 必须保证每次的调用顺序一致，不能放在 if for 内部

### 闭包陷阱
当异步函数取state 时，可能不是最新的state;
可以用useRef来解决。

## React CSS 方案
1. 普通方式 ，内联style + 引入 css 文件
   1. classnames
   2. clsx
2. css Module 和 Sass
   1. 解决类名重复的问题
3. css inh js, styled-component, style-jsx, Emotion
