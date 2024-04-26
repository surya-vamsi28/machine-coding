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
  let lastRan = null;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastTimeout);
      lastTimeout = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit);
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