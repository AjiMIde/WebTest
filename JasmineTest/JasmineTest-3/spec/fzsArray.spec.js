describe("FzsArray Suite", function () {
  var fzsArray
  var ary1 = [1, 2, 3, 4]
  var ary2 = [1, 2, [3, 4], 5]
  var ary3 = [1, 2, {a: 3}, 4]

  beforeEach(function () {
    fzsArray = new FzsArray();
  });

  describe('常规使用 toEqual 断言', function () {
    it("将一个一维数组按规则转成 string [1, 2, 3, 4] to '1,2,3,4'", function () {
      expect(fzsArray.aryToString(ary1)).toEqual('1,2,3,4')
    });

    it("将一个多维数组按规则转成 string [1, 2, [3, 4], 5] to '1,2,3,4,5'", function () {
      expect(fzsArray.aryToString(ary2)).toEqual('1,2,3,4,5')
      // expect(fzsArray.aryToString(ary2)).toEqual('1,2,[3,4],5')
    });
  })

  describe('使用其他断言', function () {
    it("not.toEqual : 将一个多维数组，包含有 object 的数组，不能被转成 string [1, 2, {a: 3}, 4] to '1,2,{a:3},4", function () {
      expect(fzsArray.aryToString(ary3)).not.toEqual('1,2,{a,3},4')
    });

    it("toBeTruthy() : 数组转化成 string 时，string 后面不能带有逗号", function () {
      var str = fzsArray.aryToString(ary1)
      str.substr(str.length - 1, 1)
      expect(str !== ',').toBeTruthy()
    });

    it("toBeFalsy() : 数组转化成 string 时，string 后面不能带有逗号", function () {
      var str = fzsArray.aryToString(ary1)
      str.substr(str.length - 1, 1)
      expect(str === ',').toBeFalsy()
    });

    it("toMatch() : 使用正则匹配匹配转化的 string", function () {
      var str = fzsArray.aryToString(ary3)
      expect(str).toMatch(/{"a":3}/)
    });

    it('.....and so on', function () {
      expect('1').toBeTruthy()
    })

  })


  // expect(player.currentlyPlayingSong).not.toEqual(aji);
  // expect(player.isPlaying).toBeFalsy();
  // expect(player.isPlaying).toBeTruthy();
});


