module.exports = {
  getAsynData (callback) {
    setTimeout(function () {
      var data = [{index: 0, value: 'Goods 1'}, {index: 1, value: 'Goods 2'}]
      var res = {
        success: true,
        data: data
      }
      callback(res)
    }, 1000)
  },

  getAsynBigData (callback) {
    setTimeout(function () {
      var data = [
        {index: 0, value: 'Goods 1'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
        {index: 1, value: 'Goods 2'},
      ]
      var res = {
        success: true,
        data: data
      }
      callback(res)
    }, 3000)
  }
}

