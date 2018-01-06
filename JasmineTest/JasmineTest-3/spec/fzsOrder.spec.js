describe("FzsOrder Suite : Spy 监测任何 function 的调用和方法参数的调用痕迹", function() {
  var fzsOrder
  var orderA = {a: 'a'}
  var orderB = {b: 'b'}

  beforeEach(function() {
    fzsOrder = new FzsOrder();
    spyOn(fzsOrder, 'goBackIndex')
    spyOn(fzsOrder, 'cancelOneOrder')
  });

  it("当取消订单时，页面将回到首页, goBackIndex 将会被调用到，使用 toHaveBeenCalled ", function() {
    fzsOrder.cancel()
    expect(fzsOrder.goBackIndex).toHaveBeenCalled()
  });

  it("当取消一个特定订单时，该订单将会被调用到,  orderA 将会被作用参数使用到，使用 toHaveBeenCalledWith ", function() {
    fzsOrder.cancelOneOrder(orderA)
    /*
    复杂的业务处理逻辑
    */
    expect(fzsOrder.cancelOneOrder).toHaveBeenCalledWith(orderA)
  });
});

describe("FzsOrder Suite : jasmine.? 全局谓词使用", function() {
  var fzsOrder
  var orderList
  var result

  beforeEach(function() {
    fzsOrder = new FzsOrder();
    orderList = fzsOrder.getList()
    result = fzsOrder.getHttpResult()
  });

  it("jasmine.any : 获取到的订单须定为数组", function() {
    expect(orderList).toEqual(jasmine.any(Array))
  });

  it("jasmine.objectContaining : 获取到的订单，必须包含 key-word: success: true", function() {
    expect(result).toEqual(jasmine.objectContaining({
      success: true
    }))
  });
})


