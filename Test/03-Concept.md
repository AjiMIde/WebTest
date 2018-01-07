#### TDD/BDD
##### Test Driven Development 测试驱动开发，敏捷开发最佳实践之一。
* 敏捷开发中的一项核心实践和技术，**一种设计方法论**。
* 原理: 在开发功能代码之前，先编写单元测试用例代码，测试代码确定需要编写什么产品代码（测试驱动开发）。
* 测试驱动开发并不只是单纯的测试工作，而是把需求分析，设计，质量控制量化的过程。
* TDD的重要目的不仅仅是测试软件，测试工作保证代码质量仅仅是其中一部分，而且是在开发过程中帮助客户和程序员去除模棱两可的需求。TDD首先考虑使用需求（对象、功能、过程、接口等），主要是编写测试用例框架对功能的过程和接口进行设计，而测试框架可以持续进行验证。

##### Behavior Driven Development 行为驱动开发
* BDD是第二代的、由外及内的、基于拉(pull)的、多方利益相关者的(stakeholder)、多种可扩展的、高自动化的敏捷方法。
* 它描述了一个交互循环，可以具有带有良好定义的输出（即工作中交付的结果）：已测试过的软件
* 更关注需求，而非技术。

#### describe
* describe 称为“测试套件” test suite，表示一组测试，可多个嵌套；
* it 称为“测试用例” test case/spec，表示一个单独测试，包含在 test suite 里面；
* expert 为“断言” expectation，即判断结果是否与预期一致；
* 一个 test suite 可包含多个 test suite，或多个 test case；一个 test case 应包含一个或多个 expert 断言；
```javascript
describe('', () => {
  it('', function () {
    expect('').to.be.equal('')
  })
})
```

#### Hook function 钩子函数
* before 在所有测试用例执行之前执行
* after 在所有测试用例执行之后执行
* beforeEach 在每一个测试用例执行之前都执行
* afterEach 在每一个测试用例执行之后都执行
```javascript
describe('hooks', function() {

  before(function() {
  });

  after(function() {
  });

  beforeEach(function() {
  });

  afterEach(function() {
  });
});
```
