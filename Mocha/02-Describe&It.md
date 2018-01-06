## describe & it 测试套件 与 测试用例
> 查看 Test/03-Concept.md 认识概念

#### 代码实现
```javascript
// 测试套件(test suite)
describe('test suite title', () => {

  // 测试用例 (test case)，测试的最小单位
  it('test case title', function () {
    
    // 断言库，这里用到的是 chai
    expect('').to.be.equal('')
  })
})
```

