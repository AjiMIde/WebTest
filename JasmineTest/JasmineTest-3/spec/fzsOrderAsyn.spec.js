describe("FzsOrderAsyn 异步测试套件：done ()", function() {
  var fzsOrder
  var result

  beforeEach(function(done) {
    fzsOrder = new FzsOrder();
    fzsOrder.asynHttpResult(function (res) {
      result = res
      done()
    })
  });

  it("使用 done() 通知用例已经完成异步数据的获取，现在观察 result.success 应为 true", function() {
    expect(result.success).toEqual(true)
  });
  it("使用 done() 通知用例已经完成异步数据的获取，现在观察 result.data 长度须大于0", function() {
    console.log(result.data.length)
    expect(result.data.length).toBeGreaterThan(0)
  });
});
