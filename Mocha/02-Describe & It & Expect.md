#### describe & it 测试套件 与 测试用例
> 查看 Test/03-Concept.md 认识概念

**代码实现**
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


#### Expect 断言。断言有多个可选库，本案例采用 chai
> 查看 Test/03-Concept.md 认识概念

**代码实现**
```javascript
describe('', () => {

  it('', function () {
    
    expect('').to.be.equal('')
    
    // 不等
    expect(1 + 1).to.be.not.equal(3)
    
    // 深度匹配
    expect(foo).to.be.deep.equal({bar: 'baz'})
    
    // boolean
    expect('?').to.be.ok
   
    // typeof
    expect('test').to.be.a('string');
    expect({foo: 'bar'}).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);
    
    // include
    expect([1, 2, 3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');
    
    // empty
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;
    
    // match
    expect('foobar').to.match(/^foo/)
  })
  
})
```




