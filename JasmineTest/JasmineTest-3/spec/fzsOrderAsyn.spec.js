describe("FzsOrderAsyn 异步测试套件：done ()", function() {
  var fzsOrder
  var int

  beforeEach(function(done) {
    fzsOrder = new FzsOrder();
    fzsOrder.asynHttpResult()
    console.log(window.aji = fzsOrder)
    int = setInterval(function() {
      console.log(fzsOrder.asyning)
      if (fzsOrder.asyning === false) { // 如果已经终止异步，则往下走
        window.clearInterval(int)
        done()
      }
    }, 100)
  });

  it("当上面异步都成功之后，可以观察 fzsOrder 的异步为 false (表示异步成功)， result 也是获取到值的", function() {
    expect(fzsOrder.asyning).toEqual(false)
    console.log(fzsOrder.result.length)
    expect(fzsOrder.result.length).toBeGreaterThan(0)
  });

});
