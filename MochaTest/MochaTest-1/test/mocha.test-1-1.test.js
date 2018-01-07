const fzsArray = require('../src/FzsArray.js')
const fzsOrder = require('../src/FzsOrder.js')
const expect = require('chai').expect

// 测试套件(test suite)
describe('测试套件：fzsArray 测试', () => {
  var ary = []
  beforeEach(function () {
    ary = [1, 2, 3, 4]
    aryStr = fzsArray.aryToString(ary)
  })

  it('Case1 : to.be.equal 让 [1, 2, 3, 4] to string', function () {
    expect(fzsArray.aryToString([1, 2, 3, 4])).to.be.equal('1,2,3,4')
  })

  it('Case2:  to.be.not.equal 数组转化 string，最后不能带上逗号 ,', function () {
    var str = aryStr.substr(aryStr.length - 1, 1)
    expect(str).to.be.not.equal(',')
  })

  it('Case3:  to.include 数组转化 string，头部必定包含 1,2,3', function () {
    expect(aryStr).to.include('1,2,3')
  })

  it('Case4:  to.match 使用正则匹配 string 包含 1,2,3', function () {
    expect(aryStr).to.match(/1,2,3/)
  })

  it('Case5:  to.match/to.be.deep/to.be.ok/to.be.an/to.contain and so on...', function () {
    expect(aryStr).to.match(/1,2,3/)
  })
})

describe('测试套件：使用 skip 跳过一些测试，使用 only 只执行一些测试', () => {
  console.log('下面这个用例使用 skip 将不会被执行')
  it('Case1 : 1 + 1 == 2', function () {
    expect(1 + 1).to.be.equal(2)
  })

  console.log('case2 将会被执行，且只执行这个用例， case1 被skip不会被执行，case3 被 only 机制忽略')
  it('Case2 : 1 + 2 == 3', function () {
    expect(1 + 2).to.be.equal(3)
  })

  console.log('case3 不会被执行')
  it('Case3 : 1 + 3 == 4', function () {
    expect(1 + 3).to.be.equal(4)
  })
})

describe('测试套件：异步测试 timeout & asyn', () => {
  var orderList = []
  var result = {}

  before(function (done) {
    fzsOrder.getAsynData(function (res) {
      result = res
      orderList = res.data
      done()
    })
  })

  it('Case1 : done() 异步获取订单数据，状态码需要为 success: true', function () {
    expect(result.success).to.be.ok
  })

  it('Case2 : done() 异步获取订单数据，订单数据需要大于3条', function () {
    expect(orderList.length > 1).to.be.ok
  })

  it('Case3: this.timeout() 下面异步获取一个大数据，mocha 默认超时时间 2000ms，使用 this.timeout 解除这个限制. ', function (done) {
    this.timeout(5000)
    var orderList3 = []
    fzsOrder.getAsynBigData(function (res) {
      orderList3 = res.data
      done()
      expect(orderList3.length > 10).to.be.ok
    })
  })
})





