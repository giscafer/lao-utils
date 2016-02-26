/**
 * 工具集
 * @author giscafer
 */
!(function(name, definition) {
    var hasDefine = typeof define === 'funciton',
        hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        //AMD/CMD
        define(difinition);
    } else if (hasExports) {
        //Node.js
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('laoUtils', function() {
    var LaoUtils = function() {};
    /**
     * ES5中使用全等===会出现以下情况
     * +0 === -0 //true
     * NaN === NaN // false
     * 此方法可以弥补这个缺陷
     */
    LaoUtils.prototype.is = function(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    };
    /**
     * 是否为整数
     * @param   {Mixed}    value
     * @return  {Boolean} 
     */
    LaoUtils.prototype.isInteger = function(value) {
        return typeof value === 'number' && isFinite(value) &&
            value > -9007199254740992 && value < 9007199254740992 &&
            Math.floor(value) === value;
    };
    /**
     * 是否为数字
     * @param   {Mixed}    value
     * @return  {Boolean} 
     */
    LaoUtils.prototype.isNumber = function(value) {
        return (!isNaN(value) && typeof value === 'number');
    };
    /**
     * 是否为NaN
     * @param   {Mixed}    value
     * @return  {Boolean} 
     */
    LaoUtils.prototype.isNaN = function(value) {
        return (typeof value === 'number' && isNaN(value));
    };

    return new LaoUtils();
});
