// Aji -s
// var Jasmine = require('jasmine');
// var jasmine = new Jasmine();
//
// jasmine.configureDefaultReporter({
//   // The `timer` passed to the reporter will determine the mechanism for seeing how long the suite takes to run.
//   timer: new jasmine.jasmine.Timer(),
//   // The `print` function passed the reporter will be called to print its results.
//   print: function() {
//     process.stdout.write(arguments);
//   },
//   // `showColors` determines whether or not the reporter should use ANSI color codes.
//   showColors: true
// });
//
// jasmine.onComplete(function(passed) {
//   if(passed) {
//     console.log('All specs have passed');
//   }
//   else {
//     console.log('At least one spec has failed');
//   }
// });
// // Aji -e

// 套件这是一个包含多个小测试用例的集合，可以说是一个 jasmine 测试的入口

describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  // 钩子函数
  /*
  beforeEach() :在describe函数中每个Spec执行之前执行；
  afterEach() :在describe函数中每个Spec执行之后执行;
  beforeAll() :在describe函数中所有的Specs执行之前执行，且只执行一次
  afterAll () : 在describe函数中所有的Specs执行之后执行，且只执行一次
   */
  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  // 测试用例 一个测试用例 specs 是包含到 suites 里面去了，这才是真正执行测试代码的代码块
  it("should be able to play a Song", function() {
    player.play(song);
    // 一个用例包含了多个测试代码状态的 expectation(断言)，expectation 是一个真假的断言
    // 这就是一个断言
    expect(player.currentlyPlayingSong).toEqual(song); // 只返回 true/false

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);

    expect(player).toBePlaying(song);

    /*
    expect(a).toBe(true)
    expect(b).not.toBe(true)
    expect(c).toEqual('???')  // 可以是对象，数组，等
    expect(d).toMatch(/bar/)  // 正则匹配
    expect(e).toBeDefined()   // 是否被定义
    expect(e).toBeNull()
    expect(e).toBeTruthy()    // 如 1 == true '0' == true
    expect(e).toBeFalsy()     // 如 0 == false undefined == false
    // ... 等等
     */
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});

