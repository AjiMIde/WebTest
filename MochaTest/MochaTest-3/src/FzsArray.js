function FzsArray () {
}

/**
 * 将 tipArray 排成一个字符串如： '1,2,3....'
 * @param ary  Y tipArray 欲排序的数组
 * @returns String
 */
FzsArray.prototype.aryToString = function (ary) {
  var str = ''
  if (ary.length === 0) {
    return str
  } else {
    for (let item of ary) {
      if (Array.isArray(item)) {
        str = str + this.aryToString(item) + ','
      } else if (typeof item === 'object') {
        str = str + window.JSON.stringify(item) + ','
      } else {
        str = str + item + ','
      }
    }
    return str.substr(0, str.length - 1)
  }
}
