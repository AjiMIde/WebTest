const fzsArray = require('../src/fzsArray.js')
const expect = require('chai').expect

// 测试套件(test suite)
describe('测试套件：fzsArray 测试', () => {
  it('Case1 : 让 [1, 2, 3, 4] to string', function () {
    expect(fzsArray.aryToString([1, 2, 3, 4])).to.be.equal('1,2,3,4')
  })

  it('Case2: 让 [1, 2, 3, {a: aa, b: bb}] to string', function () {
    expect(fzsArray.aryToString([1, 2, 3, {a: 'a', b: 'b'}])).to.be.equal('1,2,3,{"a":"a","b":"b"}')
  })
})


