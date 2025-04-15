function frankenSplice(arr1, arr2, n) {
    //...arr2.slice(0,n)-->extracting elements from 0 to n-1 
    //from arr2
    console.log([...arr2.slice(0,n),...arr1,...arr2.slice(n)])
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);