function bouncer(arr) {
    const fil=arr.filter(num=>{
      return Boolean(num); //converts any value to true or false
    })
    return fil;
}
  
bouncer([7, 'ate', '', false, 9]);