/**
 * 
 * @param {*} arr 
 * @returns 
 * *   old school with nested for loop high complexity and space 
 * function unique(arr) {
  const result = [];
  for (const i of arr) {
    let noRepeat = true;

    for (const j of result) {
      if (i === j) {
        noRepeat = false;
        break;
      }
    }

    if (noRepeat) {
      result.push(i);
    }
  }

  return result;
}

// 🎉  [ 1, 3, 2 ]
console.log(unique([1, 1, 3, 2, 2]));

 */
function unique(arr) {
    const result = [];
  
    for (const item of arr) {
      // 👉 Option 1
      if (!result.includes(item)) {
        result.push(item);
      }
  
      // 👉 Option 2
      // if (result.indexOf(item) === -1) {
      //   result.push(item);
      // }
    }
  
    return result;
  }
  
 function unique(arr) {
    const result = arr.reduce((previousValue, currentValue) => {
      // 👉 Option 1
      if (!previousValue.includes(currentValue)) {
        previousValue.push(currentValue);
      }
  
      // 👉 Option 2 👉
      // if (previousValue.indexOf(currentValue) === -1) {
      //   previousValue.push(currentValue);
      // }
  
      return previousValue;
    }, []);
  
    return result;
  }
  
  // 🎉  [ 1, 3, 2 ]
  console.log(unique([1, 1, 3, 2, 2]));

  // * source :https://levelup.gitconnected.com/6-ways-to-remove-duplicates-from-a-javascript-array-44b5e05e2eb9

  //*****************simple way *********** */

  function unique(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    // 👉 Option 1
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
      }
    }  return result;
  }
  // 🎉  [ 1, 2, 3 ]
  console.log(unique([1, 1, 3, 2, 2]));
  