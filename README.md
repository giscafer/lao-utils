# lao-utils

常用工具集函数

## 使用
**Node.js**
	
	npm install lao-utils --save

**AMD/CMD、浏览器环境**

	引入dist目录下源码文件

## 函数

- `uuid()` 	&nbsp;生成一个uuid串（伪guid）
- `is(x,y)` 	&nbsp;比较x和y是否相等
- `isInteger(value)` 	&nbsp;是否是整数
- `isNumber(value)` 	&nbsp;是否是数字
- `isNaN(value)` 	&nbsp;是否是`NaN`
- `date(format,timestamp)` 	&nbsp;格式化日期 **eg:** `laoUtils.date('yyyy-MM-dd'); //2016-02-26`