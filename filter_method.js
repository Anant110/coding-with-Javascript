function getIndexToIns(arr, num) {
    return arr.filter(n=>n<num).length //output:[10,20].length=2
  }
  
  getIndexToIns([10, 20, 30, 40, 50], 30);