# vue3-1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目目录重要文件解析
- public
    - index.html 入口文件
- src 项目页面主要逻辑代码
    - assets 静态资源-图片
    - components 各个组件代码，vue文件
        - AsyncShow.vue Suspense异步请求组件demo
        - GirlShow.vue Suspense异步请求组件demo.真实请求
        - HelloWorld.vue 
        - MyModel.vue Teleport组件demo，可挂载到指定的DOM元素上（用途：模态框、蒙层）
        - TimeMudle.vue 时间显示组件
    - hooks 模块代码，ts文件
        - useNowTime.ts 显示当前时间模块
        - useUrlGetAvator.ts axios请求
    - App.vue 入口vue文件
- package.json 项目配置文件