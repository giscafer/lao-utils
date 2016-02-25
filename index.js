/**
 * 工具集
 * @author giscafer
 * @version 1.0
 * @date    2016-02-25T21:22:17+0800
 */
!(function(name, definition) {
    var hasDefine = typeof define === 'funciton',
        hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        //AMD/CMD
        define(difinition);
    } else if(hasExports){
        //Node.js
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('laoUtils', function() {
	var LaoUtils=function(){};
	/**
	 * ES5中使用全等===会出现以下情况
	 * +0 === -0 //true
	 * NaN === NaN // false
	 * 此方法可以弥补这个缺陷
	 */
	LaoUtils.prototype.is=function(x,y){
		if(x===y){
			// 针对+0 不等于 -0的情况
			return x!==0 || 1/x===1/y;
		}
		// 针对NaN的情况
		return x!==x && y!==y;
	};
	return new LaoUtils();
});
