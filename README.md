# lao-utils
[![Build Status](https://travis-ci.org/giscafer/lao-utils.svg?branch=master)][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]

JavaScript常用函数工具集

## 使用
**Node.js**
	
	npm install lao-utils --save

**AMD/CMD、浏览器环境**

	引入dist目录下源码文件

## 函数
	
	21个常用函数

- `isIE(ver)` 	&nbsp;判断是否是IE浏览器
 **eg:** `laoUtils.isIE(8);//判断是否是IE8` `laoUtils.isIE();//判断是否是IE`
- `uuid()` 	&nbsp;生成一个uuid串（伪guid）
- `is(x,y)` 	&nbsp;比较字符x和字符y是否相等
**eg:** `特殊例子：laoUtils.is(-0,+0); //false`,`laoUtils.is(NaN,NaN); //true`
- `isInteger(value)` 	&nbsp;是否为整数
- `isNumber(value)` 	&nbsp;是否为数字
- `isString(value)` 	&nbsp;是否为字符串
- `isNaN(value)` 	&nbsp;是否为`NaN`
- `isDom(obj)` 	&nbsp;判断obj是否为Dom对象
- `date(format,timestamp)` 	&nbsp;格式化日期
 **eg:** `laoUtils.date('yyyy-MM-dd'); //2016-02-26`
- `copyObject(obj)` 	&nbsp;复制对象（浅拷贝，并且undefined属性不会被复制）
- `clone(obj)` 	&nbsp;对一个object进行深度拷贝
- `merge(a,b,c,...rest)` 	&nbsp;合并对象
**eg:** `laoUtils.merge({a:1},{b:2},{b:3,c:3}); //{a:1,b:3,c:3}`
- `arrayOf(a,b,c,...rest)` 	&nbsp;将一组值转换为数组（将参数转为数组）
**eg:** `laoUtils.arrayOf(1,2,3); //[1,2,3]`
- `includes(arr,value)` 	&nbsp;数组arr是否包含给定的值value.
 **eg:** `laoUtils.includes([1,2,3],3); //true`
- `contains(str,value)` 	&nbsp;判断一个字符串是否被包含在另一个字符串中.
 **eg:** `laoUtils.contains('giscafer','g'); //true`
- `isArray(arr)` 	&nbsp;判断arr是否为数组
- `inherits(clazz, baseClazz)` 	&nbsp;构造类继承关系（clazz继承于baseClazz）
- `extend(des, source)` 	&nbsp;源对象`source`的所有属性复制到目标对象`des`（undefined属性不会被复制）
- `compact(array)` 	&nbsp;去除数组中假值元素，比如`false`,`null`,`0`,`""`,`undefined`,和`NaN`都是假值
- `isExpect(value)` 	&nbsp;是否为非null,undefined和空字符以外的值
- `isFloat(value)` 	&nbsp;value是否为浮点值

## License

MIT

[npm-image]: https://img.shields.io/npm/v/lao-utils.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/lao-utils
[coveralls-image]: https://coveralls.io/repos/github/giscafer/lao-utils/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/giscafer/lao-utils?branch=master
[travis-image]: https://travis-ci.org/giscafer/lao-utils.svg?branch=master
[travis-url]: https://travis-ci.org/giscafer/lao-utils