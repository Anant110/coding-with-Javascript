function whatIsInAName(collection, source) {
    const sourcekeys=Object.keys(source);
    return collection.filter
    (
      obj=>sourcekeys.every
      (
       key=>obj.hasOwnProperty(key) && obj[key]===source[key]
      )
    )
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" });