function nonConstructibleChange (coins: number[]): number {
  const sortedArray = coins.sort((a, b) => { return b - a });
  
  if (sortedArray.length > 1 && sortedArray[0] !== sortedArray[1]) {
  	  sortedArray.shift();
  }
  
  const sumAmount = sortedArray.reduce((current, amount) => { 
    if (current > 0) { 
      return current + amount 
    } else {
      return amount;
    }  
  }, 0);
  
  return sumAmount + 1;
}


function sortedSquaredArray (numericList: number[]): number[] {
  const squaredArray = numericList.map(item => { return item * item }).sort((a, b) => { return a - b });
    
  return squaredArray;
}
