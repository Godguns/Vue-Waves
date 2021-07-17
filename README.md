# Vue-Waves 水波涟漪效果
一个简单的水波纹涟漪效果的Vue自定义指令
### 使用方法很简单：直接在项目中注册这个指令即可     
```javascript   
step1:   
//directives.js
import waves from './waves'       
step2:   
 // 自定义指令 对象，方便注册
const directives = {
  waves,
}
// >--> 批量注册指令
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}   
step3:   
// main.js
import install from './directives'
Vue.use(install)   
```   
## 使用的时候直接 v-waves 插入你想要产生效果的地方即可

