function asyncHtttpRequest(duration, text) {
  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${text} downloaded in ${duration} ms`);
      resolve(`<h1>title of ${text}</h1><p>body of ${text}<p>`);
    }, duration);
  });
  return mypromise;
}

export function asyncGetChapter1() {
  return asyncHtttpRequest(1500, 'Chapter 1');
}

export function asyncGetChapter2() {
  return asyncHtttpRequest(2000, 'Chapter 2');
}

export function asyncGetChapter3() {
  return asyncHtttpRequest(1750, 'Chapter 3');
}
