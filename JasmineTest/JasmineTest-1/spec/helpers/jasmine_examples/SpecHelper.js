beforeEach(function () {
  // 自定义匹配
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {  // compare 是固定函数，其中，actual 是实际输入，expected是预期
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying   // 返回 {pass: boolean}
          }
        }
      };
    }
  });
});
