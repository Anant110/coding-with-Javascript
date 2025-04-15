function confirmEnding(str, target) {
    // return str.slice(-target.length)===target;

    return str.endsWith(target)===target; 
  }
  
  confirmEnding('Bastian', 'n');