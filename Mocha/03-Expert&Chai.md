## expect 断言 chai 断言库
> 查看 Test/03-Concept.md 认识概念

#### 代码实现
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

