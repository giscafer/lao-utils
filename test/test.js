/**
 * Mocha BDD Test
 * @author giscafer <giscafer@outlook.com>
 */
var should=require('chai').should();
var laoUtils=require('../index');
describe('test.js',function(){
	describe('#uuid()',function(){
		it('generate a uuid',function(done){
			laoUtils.uuid().should.be.length(36);
			done();
		});
	});
	describe('#is()',function(){
		it('should be Same-value equality',function(done){
			var flag=laoUtils.is(1,2);
			var foo=laoUtils.is('foo','foo');
			var obj=laoUtils.is({},{});
			var zero=laoUtils.is(-0,+0);
			var nan=laoUtils.is(NaN,NaN);
			flag.should.be.false;
			foo.should.be.true;
			obj.should.be.false;
			zero.should.be.false;
			nan.should.be.true;
			done();
		});
	});
	describe('#isInteger()',function(){
		it('should be the Integer',function(done){
			laoUtils.isInteger(25).should.be.true;
			laoUtils.isInteger(25.0).should.be.true;
			laoUtils.isInteger(25.1).should.be.false;
			laoUtils.isInteger('25').should.be.false;
			laoUtils.isInteger(true).should.be.false;
			laoUtils.isInteger(null).should.be.false;
			done();
		});
	});
	describe('#isNumber()',function(){
		it('should be the Number',function(done){
			laoUtils.isNumber(25).should.be.true;
			laoUtils.isNumber(25.1).should.be.true;
			laoUtils.isNumber('25').should.be.false;
			laoUtils.isNumber(true).should.be.false;
			laoUtils.isNumber(null).should.be.false;
			laoUtils.isNumber('giscafer').should.be.false;
			done();
		});
	});
	describe('#isString()',function(){
		it('should be the String',function(done){
			laoUtils.isString(25.1).should.be.false;
			laoUtils.isString('25').should.be.true;
			laoUtils.isString(true).should.be.false;
			laoUtils.isString(null).should.be.false;
			laoUtils.isString('giscafer').should.be.true;
			done();
		});
	});
	describe('#isNaN()',function(){
		it('should be the NaN',function(done){
			laoUtils.isNaN(NaN).should.be.true;
			laoUtils.isNaN(5).should.be.false;
			laoUtils.isNaN('25').should.be.false;
			laoUtils.isNaN(true).should.be.false;
			laoUtils.isNaN(null).should.be.false;
			laoUtils.isNaN(1/NaN).should.be.true;
			done();
		});
	});
	describe('#date()',function(){
		it('the date should be formatting',function(done){
			laoUtils.date('yyyy-MM-dd',1456491495000).should.contains('2016-02-26');
			laoUtils.date('yyyy/MM/dd',1456491495000).should.contains('2016/02/26');
			laoUtils.date('yyyy年MM月dd日',1456491495000).should.contains('2016年02月26日');
			laoUtils.date('yyyy-MM-dd HH:mm:ss',new Date('2016-02-26 20:58:15')).should.contains('2016-02-26 20:58:15');
			laoUtils.date('yyyyMMdd',1456491495000).should.contains('20160226');
			laoUtils.date('yyyy年MM月dd日').should.contains('年');
			done();
		});
	});
	describe('#copyObject()',function(){
		it('should copy a obj,return a new obj',function(done){
			var obj={name:'jack',age:30,sex:undefined};
			var newObj=laoUtils.copyObject(obj);
			newObj.should.be.not.equals(obj);
			newObj.name.should.be.equals('jack');
			newObj.age.should.be.equals(30);
			newObj.hasOwnProperty('sex').should.be.false;
			done();
		});
	});
	describe('#isDom()',function(){
		it('should be a Dom Object',function(done){
			done();
		});
	});
	describe('#clone()',function(){
		it('should be deep-clone a Object',function(done){
			var Foo=function(){
				this.name='Tom'
			};
			Foo.prototype.sex='man';
			var person=new Foo();
			person.age=20;
			var newPerson=laoUtils.clone(person);
			newPerson.age.should.be.equals(20);
			newPerson.name.should.be.equals('Tom');
			newPerson.sex.should.be.equals('man');
			done();
		});
	});
	describe('#merge()',function(){
		it('should be merge args',function(done){
			var newObj=laoUtils.merge({a:1},{b:2},{b:3,c:3});
			newObj.a.should.be.equals(1);
			newObj.b.should.be.equals(3);
			newObj.c.should.be.equals(3);
			done();
		});
	});
	describe('#arrayOf()',function(){
		it('should be transfer args to Array',function(done){
			var arr=laoUtils.arrayOf(1,'a',null);
			var BUILTIN_OBJECT=Object.prototype.toString.call(arr);
			BUILTIN_OBJECT.should.be.equals('[object Array]');
			arr[1].should.be.equals('a');
			arr.should.be.length(3);
			done();
		});
	});
	describe('#includes()',function(){
		it('arr should be includes value',function(done){
			laoUtils.includes([1,'a',null],'a').should.be.true;
			laoUtils.includes([1,'a',null],1).should.be.true;
			laoUtils.includes([1,'a',null],null).should.be.true;
			laoUtils.includes([1,'a',null],'b').should.be.false;
			done();
		});
	});
	describe('#contains()',function(){
		it('arr should be contains value',function(done){
			laoUtils.contains('abc1234','a').should.be.true;
			laoUtils.contains('abc1234',1).should.be.true;
			laoUtils.contains('abc1234',null).should.be.false;
			laoUtils.contains('abc1234','b').should.be.true;
			laoUtils.contains('abc1234',5).should.be.false;
			done();
		});
	});
	describe('#isArray()',function(){
		it('arr should be a instance of Array',function(done){
			laoUtils.isArray(['abc1234','a']).should.be.true;
			laoUtils.isArray([]).should.be.true;
			laoUtils.isArray(null).should.be.false;
			laoUtils.isArray('b').should.be.false;
			laoUtils.isArray(NaN).should.be.false;
			done();
		});
	});
	describe('#inherits()',function(){
		it('clazz should be inherits from baseClazz',function(done){
			function A(){}
			A.prototype.name='A';
			A.prototype.walk=function(){
				return 'walk';
			};
			function B(){
				this.name='B';
				this.run=function(){
					return 'run';
				};
			}
			laoUtils.inherits(B,A);
			var b=new B();
			b.walk().should.be.equals('walk');
			b.run().should.be.equals('run');
			b.name.should.be.equals('B');
			done();
		});
	});
	describe('#extend()',function(){
		it('should be des extend from source',function(done){
			var source={name:'Jack',sex:undefined,country:'China'};
			var des={name:'Tom',age:20,tel:15110195197};
			var destination=laoUtils.extend(des,source);
			destination.name.should.be.equals('Jack');
			destination.age.should.be.equals(20);
			destination.tel.should.be.equals(15110195197);
			destination.country.should.be.equals('China');
			destination.hasOwnProperty('sex').should.be.false;
			done();
		});
	});
});
