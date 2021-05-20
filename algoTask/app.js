// NB : argument n refers to a number
const checkYuGiOh = (n) => {
  let list_multiples = [];
  // initialized an empty array to take in the the strings based of each condition

  if (isNaN(n) === true || n === "" || typeof n === "string") {
    console.log(`"invalid parameter: ${JSON.stringify(n)}"`);
  }
  // the above checks if the argument is a number or check if the argumrnt is an empty string or a string in disguise of a number
  // this return an error if the above condition are not met
  else {
    for (let i = 1; i <= n; i++) {
      // conditions, checking if the number provided is a factor and pushes the required string to the list_multiples array for each iteration
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        list_multiples.push("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        list_multiples.push("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        list_multiples.push("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        list_multiples.push("gi-oh");
      } else if (i % 2 === 0) {
        list_multiples.push("yu");
      } else if (i % 3 === 0) {
        list_multiples.push("gi");
      } else if (i % 5 === 0) {
        list_multiples.push("oh");
      } else {
        list_multiples.push(i);
      }
    }
    return list_multiples;
  }
};
checkYuGiOh(10);

const convertFahrToCelsius = (fahr) => {
  // the condition checks if the argument is a number or string
  // if true it convert Fahr To Celsius
  // or else it throws  an error
  if (typeof fahr === "number" || typeof fahr === "string") {
    let degreeCelcuis = ((fahr - 32) * 5) / 9;

    //round up  the degree to a Four(4) Decimal Point
    let roundUpdegreeCelcuis = degreeCelcuis.toFixed(4);
    return roundUpdegreeCelcuis;
  } else if (typeof fahr === "array") {
    return `${JSON.stringify(fahr)} is not a valid number but a/an array.`;
  } else if (typeof fahr === "object") {
    return `${JSON.stringify(fahr)} is not a valid number but a/an object.`;
  } else {
    return ` ${JSON.stringify(
      fahr
    )} is not a valid number but a/an ${typeof fahr}`;
  }
};
convertFahrToCelsius([1, 2, 3]);
