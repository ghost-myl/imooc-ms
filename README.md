笔记

1. 类组件中声明方法用箭头函数 不用再bind(this) handleClick=()=>{}

2. 让create-react-app支持less 需要eject 修改配置项

3. 按需加载 babel-plugin-import

4. antd 栅格系统
	<Row span={3}></Row> 
	<Row span={21}></Row> 


5. src或ajax请求地址中 '/...' 为public文件夹下的文件 即以打包后bundle.js的位置为当前位置

6. componentWillMount 一般访问接口 把数据存储在state中 （类似vue中created）

7. state={} 类组件中初始化state

8. 对于 obj={a: {a1: n, a2: n}, b: n, c: n} 遍历每一对键值对 用递归（同对象深拷贝原理）

9. encodeURI() encodeURIComponent() 区别
encode-URIComponent()主要用于对URI中的某一段(例如前面URI中的illegal value．htm)进行编码。encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；
而encodeURIComponent()则会对它发现的任何非标准字符进行编码。

10. less模块化开发 
	把less变量放在一个文件中
	在模块less中先用@import导入这个文件中的变量再使用

11. jsonp API

	jsonp(url, opts, fn)

	opts 对象 可选
	{
		param: 'callback函数名',
		timeout
	}
	fn callback函数体

12. calc(四则运算)
	CSS3 新增方法
	例: width: calc(100% - 10px)
	运算符前后都需要保留一个空格

13. Router内的根节点 可以写成组件 这个组件在打开页面默认加载 并可以通过this.props.children获取这个组件包裹的路由

14. react-router 4
	1> 写浏览器端应用 安装react-router-dom
写react-native 安装react-native-dom
两者都会将react-router当做依赖安装
	2> 允许匹配多个路由 如果只想匹配第一个路由 用switch包裹 （reatc-router3中无法匹配多个路由 ）

15. 高100vh overflow:auto 实现局部滚动

16. 弹框（antd模态框）
	移动端（如输入验证码）一般水平垂直居中
	PC一般在屏幕偏上 体验更好



