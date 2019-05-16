# 笔记

### 类组件中声明方法用箭头函数 
handleClick=()=>{} 不需要再bind(this) 

### 让create-react-app支持less
eject后在webpack.config.base.js修改loader配置项

### antd 栅格系统
在Row中设置 span={数字} 来分割（本质是百分比） 

### 路径问题
src或ajax请求地址中 '/...' 为public文件夹下的文件 即以打包后bundle.js的位置为当前位置

### componentWillMount 
可以发送ajax 访问接口 把数据存储在state中 （类似vue中created）

### state={} 
类组件中初始化state

### 遍历嵌套对象键值对
对于 obj={a: {a1: n, a2: n}, b: n, c: n} 遍历每一对键值对 用递归（同对象深拷贝原理）

### encodeURI() encodeURIComponent()
- encode-URIComponent() 主要用于对URI中的某一段(例如前面URI中的illegal value．htm)进行编码。
- encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号
；encodeURIComponent() 会对它发现的任何非标准字符进行编码

### less模块化开发 
把less变量放在一个文件中，在模块less中先用@import导入这个文件中的变量再使用

### jsonp API
- jsonp(url, opts, fn)
- opts 对象 可选
- { param: 'callback函数名', timeout	}
- fn callback函数体

### calc(四则运算)
- CSS3 新增方法
- 例: width: calc(100% - 10px)
- 运算符前后都需要保留一个空格

### router this.props.children
Router内的根节点 可以写成组件 这个组件在打开页面默认加载 并可以通过this.props.children获取这个组件包裹的路由

### react-router 4
- 写浏览器端应用 安装react-router-dom
写react-native 安装react-native-dom
两者都会将react-router当做依赖安装
- 允许匹配多个路由 如果只想匹配第一个路由 用switch包裹 （reatc-router3中无法匹配多个路由 ）

### 局部滚动
高100vh overflow:auto

### 弹框（antd模态框）
- 移动端（如输入验证码）一般水平垂直居中
- PC一般在屏幕偏上 体验更好



