# lao-utils
[![Build Status](https://travis-ci.org/giscafer/lao-utils.svg?branch=master)](https://travis-ci.org/giscafer/lao-utils)
[![Coverage Status](https://coveralls.io/repos/github/giscafer/lao-utils/badge.svg?branch=master)](https://coveralls.io/github/giscafer/lao-utils?branch=master)

常用工具集函数

## 使用
**Node.js**
	
	npm install lao-utils --save

**AMD/CMD、浏览器环境**

	引入dist目录下源码文件

## 函数

- `uuid()` 	&nbsp;生成一个uuid串（伪guid）
- `is(x,y)` 	&nbsp;比较字符x和字符y是否相等
- `isInteger(value)` 	&nbsp;是否为整数
- `isNumber(value)` 	&nbsp;是否为数字
- `isString(value)` 	&nbsp;是否为字符串
- `isNaN(value)` 	&nbsp;是否为`NaN`
- `date(format,timestamp)` 	&nbsp;格式化日期 **eg:** `laoUtils.date('yyyy-MM-dd'); //2016-02-26`
- `copyObject(obj)` 	&nbsp;复制对象（浅拷贝）
- `clone(obj)` 	&nbsp;对一个object进行深度拷贝
- `merge(a,b,c,...rest)` 	&nbsp;合并对象
- `arrayOf(a,b,c,...rest)` 	&nbsp;将一组值转换为数组（换句话说，将参数转为数组）
- `includes(arr,value)` 	&nbsp;数组arr是否包含给定的值value
- `contains(value)` 	&nbsp;判断一个字符串是否被包含在另一个字符串中
- `isArray(arr)` 	&nbsp;判断arr是否为数组
- `inherits(clazz, baseClazz)` 	&nbsp;构造类继承关系（clazz继承于baseClazz）