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
			laoUtils.date('yyyy-MM-dd HH:mm:ss',1456491495000).should.equals('2016-02-26 20:58:15');
			laoUtils.date('yyyyMMdd',1456491495000).should.contains('20160226');
			laoUtils.date('yyyy年MM月dd日').should.contains('年');
			done();
		});
	});
});