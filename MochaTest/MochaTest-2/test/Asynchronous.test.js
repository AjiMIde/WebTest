const fzsArray = require('../src/fzsArray.js')
const expect = require('chai').expect

// 测试套件(test suite)
describe('套件：基本的 equal 断言测试', () => {
  // 测试用例 (test case)，测试的最小单位
  it('Case 1 "to be equal" : 1 + 1 === 2', function () {
    // 断言库，这里用到的是 chai
    expect(1 + 1).to.be.equal(2)
  })

  it('用例1--让 [1, 2, 3, 4] to string', function () {
    // 断言库，这里用到的是 chai
    expect(fzsArray.aryToString([1, 2, 3, 4])).to.be.equal('1,2,3,4')
  })

  it('用例2--让 [1, 2, 3, {a: aa, b: bb}] to string', function () {
    expect(fzsArray.aryToString([1, 2, 3, {a: 'a', b: 'b'}])).to.be.equal('1,2,3,{"a":"a","b":"b"}')
  })

  let test = false
  if (test) {

    it('这里是示例部分，不被执行谢谢', function () {
      // 不等
      expect(1 + 1).to.be.not.equal(3)

      // 深度匹配
      expect(foo).to.be.deep.equal({bar: 'baz'})

      // boolean
      expect('?').to.be.ok

      // typeof
      expect('test').to.be.a('string');
      expect({foo: 'bar'}).to.be.an('object');
      expect(foo).to.be.an.instanceof(Foo);

      // include
      expect([1, 2, 3]).to.include(2);
      expect('foobar').to.contain('foo');
      expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');

      // empty
      expect([]).to.be.empty;
      expect('').to.be.empty;
      expect({}).to.be.empty;

      // match
      expect('foobar').to.match(/^foo/)
    })
  }
})


