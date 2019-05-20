# 笔记

### 类组件中声明方法用箭头函数 
	handleClick=()=>{} 不需要再bind(this) 

### 让create-react-app支持less
	eject后在webpack.config.base.js修改loader配置项

### 路径问题
	src或ajax请求地址中 '/...' 为public文件夹下的文件 即以打包后bundle.js的位置为当前位置

### componentWillMount 
	可以发送ajax 访问接口 把数据存储在state中 （类似vue中created）

### state={} 
	类组件中初始化state

### 遍历嵌套对象键值对
	对于 obj={a: {a1: n, a2: n}, b: n, c: n} 遍历每一对键值对 对于对象类型的键值用递归（同对象深拷贝原理）

### encodeURI() encodeURIComponent()
	- encodeURIComponent() 主要用于对URI中的某一段(例如前面URI中的illegal value．htm)进行编码。
	- encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号
	；encodeURIComponent() 会对它发现的任何非标准字符进行编码

### less模块化开发 
	把less变量放在一个文件中，在模块less中先用@import导入这个文件中的变量再使用

### jsonp API
	- jsonp(url, opts, fn)
	- url:
	- opts: { param: 'callback函数名', timeout	} (对象类型 可选)
	- fn: callback函数体

### calc(四则运算)
	- CSS3 新增方法
	- 例: width: calc(100% - 10px)
	- 运算符前后都需要保留一个空格

### router this.props.children
	- Router内的根节点 可以写成组件 这个组件在加载Router时默认加载 并可以通过this.props.children获取这个组件包裹的路由
	- Route内的根节点是组件 则在匹配地址时默认加载

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

### 同一事件 根据不同参数 将不同state修改为相同值 或调用同一类的不同函数
	handleClick=(type)=>{
		this.setState({
			[type]: sameValue
		})

		Fn[type](arg)
	}

### JSX模板语法
	如果需要在标记属性中写标记 需要用模板语法 且只能写一个根标记

### 遍历二维数组
	outerArr.map(innerArr=>innerArr.map(item=>{...}))

### 内存泄漏
	Link中的路径与路由不匹配时 无法正确加载组件 产生内存泄漏

### AntD 栅格系统
	原理
	1. 通过Row在水平方向放置一组Col，内容放在Col内。
	2. 设置Col的span值(1-24) 标识其跨越的范围，如果超过24会另起一行。

	支持和flex配合使用

	Row的gutter属性用来设置栅格的间隔（一般为16+8n）px

	响应式 设置单位为
	xs: 0~576px
	sm: 576px~768px
	md: 768px~992px
	lg: 992px~1200px
	xl: 1200px~1600px

	IE9无法使用响应式 引入matchMedia polyfill
	

### 性能优化
	删除框架组件实例中不必要的代码

### AntD 表单API
	通过 Form.create()(表单组件名) 将方法传入表单组件的props.form
	注册表单项 getFieldsDecorator(id,{initialValue, rules, required, message})(标记) 
	被该方法包装过的表单控件自动添加value(实现双向数据绑定) 和onChange
	设置表单值 setFiledsValue
	获取表单信息 getFieldsValue()
	同步提交表单信息 validateFields((err,values)=>{})
	重置表单信息 resetFields()

### AntD Table 
	dataSource中render方法 处理表单字段（如sex:1->男）
	rowSelection {selectedKeys, onChange} 选中表格项后的操作
	
### 分页 pagination(res,onChange的callback) 
	不需要刷新页面的变量 可以声明为组件的普通属性(this.属性名) 不需要放在state中
	封装request函数：
		发送接口地址和页码 
		接收对应页码的表格数据 
		修改state中的list和pagination

### 打开空白新页面
	window.open(url, '_blank')

### 使用通过脚本引入的全局变量
	React是基于模块化开发的单页应用 只能使用加载的变量(每个模块是一个作用域)
	要通过window.变量名访问通过脚本引入的全局变量

### Axios参数
	params: 添加到urlencode中，用于get请求
	data: 添加到请求体（body）中的， 用于post请求
	两者都传JS对象 Axios转成对应的数据格式

### ref
	React中通过ref获取HTML标记对应的真实DOM或类组件实例
	AntD中通过wrappedComponentRef获取组件实例
	（不能再函数组件上使用ref 因为没有实例）

	使用ref的场景：获取焦点 触发动画 媒体播放

	React16.3前推荐使用ref=回调函数 (ref=字符串有一些性能问题 将在新版本中被废弃)
	React16.3引入React.createRef()
		constructor(){
			super();
			this.myInput=React.createRef()
		}
		focusInput=()=>{
			this.myInput.current.focus()
		}
		render(){
			return (
				<div>
					<input ref={this.myInput}/>
				</div>
			)
		}
	
### React中使用ECharts
	按需加载
	先引入主模块 import echarts from 'echarts/lib/echarts'
	从'echarts/lib/component/...'中引入相应的组件
	引入 echarts-for-react 实现组件式开发 避免使用new

	在componentWillMount中注册主题registerTheme
	option{ title, tooltip, xAxis, yAxis, series:[{type, data},{},{}] }

### npm降级
	安装n插件
	n 版本号 安装对应版本的npm