describe("FzsDate Suite: xit/xdescribe/pending", function() {
  var fzsDate
  var d1 = '2018-01-04'
  var d1 = '2018-01-05'

  beforeEach(function() {
    fzsDate = new FzsDate();
  });

  it("匹配今天的日期 2018-01-15", function() {
    expect(fzsDate.get('yyyy-MM-dd')).toEqual('2018-01-15')
  });

  xit("匹配今天的日期,时间 2018-01-04 12:00, 挂起", function() {
    expect(fzsDate.get('yyyy-MM-dd')).toEqual('2018-01-04')
  });

  it("匹配今天的日期,时间 2018-01-04 12:00, 使用 pending 挂起", function() {
    expect(fzsDate.get('yyyy-MM-dd')).toEqual('2018-01-04')
    pending('该用例已经挂起。')
  });

  xdescribe("FzsDate children Suite, pending", function() {
    it("匹配今天的日期,时间 2018-01-04 12:00, 使用 pending 挂起", function() {
      expect(fzsDate.get('yyyy-MM-dd')).toEqual('2018-01-04')
    });
  });
  // expect(player.currentlyPlayingSong).not.toEqual(aji);
  // expect(player.isPlaying).toBeFalsy();
  // expect(player.isPlaying).toBeTruthy();
});


