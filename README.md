# practice_lab

프로젝트 구조는 아래와 같다.
```
  src (a.k.a @) : vue 프로젝트
  ├ assets :
  |  ├ images : jpg, png, etc
  |  ├ stylesheets : css, scss, sass, etc
  |
  ├ shared_components
  |
  ├ routes
  |
  ├ config
  |  ├ prod.env.js
  |  ├ dev.env.js : prod.env를 상속
  |  ⌊ test.env.js : dev.env를 상속
  |
  ├ spa : (single page app) vue file
  |  ├ home
  |  |  ├ HomeView.vue
  |  |  ⌊ components
  |  |
  |  ├ about
  |  |  ├ AboutView.vue
  |  |  ⌊ components  
  |  |
  |  
  ├ store : vuex 상태관리
  
  ...
  
```


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

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
