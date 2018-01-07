## only & skip

#### Only
> 使用 only 可快速只运行一个用例 <br>
> 注意 only 在同一套件或同一用例中，只能使用一次

```javascript
describe.only('', () => {
  it.only('', function () {
    expect('').to.be.equal('')
  })
})
```

#### Skip
> Skip 可以跳过（挂起）一个用例 <br>
> 推荐使用 skip 暂时挂起一些用例（而非注释），并且，可以使用 this.skip 来根据一些既有条件挂起一些用例
```javascript
describe.skip('', () => {
  it.skip('', function () {
  })
  it('', function () {
    if (true) {
      // expect
    } else {
      this.skip()
    }
  })
})
```

