## Asyn & Timeout

#### Asyn: done()
> 使用 done() 来控制（通知）异步调用
> 可在 Hook Function/it 等使用 done()

```javascript
describe.only('', () => {
  it.only('', function (done) {
    var HttRequest = {}
    HttRequest.getData(function() {
      // do 
      done()
    })
  })
})
```

#### timeout: this.timeout()
> 用例集执行超时，mocha 会对一些用例的时间进行 timeout 限制（2000ms），可以通过 this.timeout()来控制 timeout 时间（或去掉 timeout 限制）
```javascript
describe('', () => {
  it('', function (done) {
    this.timeout(5000)    // 控制在 5000ms 内
    this.timeout(0)       // 不做 timeout 限制
    var HttRequest = {}
    HttRequest.getData(function() {
      // do 
      done()
    })
  })
})
```

