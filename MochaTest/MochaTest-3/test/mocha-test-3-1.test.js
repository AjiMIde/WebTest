var expect = chai.expect
describe('FzsArray Suite', function () {
  var fzsArray
  var ary1 = [1, 2, 3, 4]
  var ary2 = [1, 2, [3, 4], 5]
  var ary3 = [1, 2, {a: 3}, 4]

  beforeEach(function () {
    fzsArray = new FzsArray();
  });

  it("将一个一维数组按规则转成 string [1, 2, 3, 4] to '1,2,3,4'", function () {
    // 断言库，这里用到的是 chai
    expect(fzsArray.aryToString(ary1)).to.be.equal('1,2,3,4')
  });

  it("将一个多维数组按规则转成 string [1, 2, [3, 4], 5] to '1,2,3,4,5'", function () {
    expect(fzsArray.aryToString(ary2)).to.be.equal('1,2,3,4,5')
  });

  it("not.toEqual : 将一个多维数组，包含有 object 的数组，不能被转成 string [1, 2, {a: 3}, 4] to '1,2,{a:3},4", function () {
    expect(fzsArray.aryToString(ary3)).to.be.equal('1,2,{a,3},4')
  });

  it("toBeTruthy() : 数组转化成 string 时，string 后面不能带有逗号", function () {
    var str = fzsArray.aryToString(ary1)
    str.substr(str.length - 1, 1)
    expect(str !== ',').to.be.ok
  });

  it("toMatch() : 使用正则匹配匹配转化的 string", function () {
    var str = fzsArray.aryToString(ary3)
    expect(str).to.match(/{"a":3}/)
  });
})
