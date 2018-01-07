function FzsOrder () {
}
FzsOrder.prototype.goBackIndex = function () {
  console.log('go back index')
}

FzsOrder.prototype.cancel = function () {
  console.log('cancel the order and go back index')
  this.goBackIndex()
}

FzsOrder.prototype.cancelOneOrder = function () {
  console.log('A order will be cancel' + 'order')
}

FzsOrder.prototype.getList = function () {
  // do a http get list
  return [{index: 0, value: 'Goods 1'}, {index: 1, value: 'Goods 2'}]
}

FzsOrder.prototype.getHttpResult = function () {
  return {success: true, data: []}
}

FzsOrder.prototype.asynHttpResult = function (callback) {
  setTimeout(function () {
    var res = {}
    res.success = true
    res.data = [{index: 0, value: 'Goods 1'}, {index: 1, value: 'Goods 2'}]
    callback(res)
  }, 3000)
}
