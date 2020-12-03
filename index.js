const testVar = {}

function superbowlWin(arr) {
  console.log(arr)
  let win = arr.find(a => { return a.result == "W"});
  return win ? win.year : undefined
}
