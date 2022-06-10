// code your solution here
function superbowlWin(record){
    for (const item of record) {
        if (item.result === "W") {
          return item.year;
        }
      }
      return
}