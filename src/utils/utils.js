export const debounceMaker = (fn, waitTime) => {
  let timeout;
  return (...args) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, waitTime);
  };
};

export const throttleMaker = (func, limit) => {
  let firstRun = true;
  return (...args) => {
    if (firstRun) {
      func(...args);
      firstRun = false;
      setTimeout(() => {
        firstRun = true;
      }, limit)
    }
  };
};

export const removeElementFromArray = (array, index) => {
  let arr = []
  for (let i=0; i < array.length; i++) {
    if (i !== index) {
      arr.push(array[i])
    }
  }
  return arr;
}

export const removeItemFromArray = (array, item) => {
  let arr = []
  for (let i=0; i < array.length; i++) {
    if (array[i] !== item) {
      arr.push(array[i])
    }
  }
  return arr;
}