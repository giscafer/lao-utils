var should=require('chai').should();
var laoUtils=require('../index');
describe('test.js',function(){
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
});