setTimeout(() => { 
    console.log("I am the most beautiful animal in the universe!");
}, 2000);

const message = function() {  
    console.log("WHERE IS WALDO?");
}
 
setTimeout(message, 4000);

//DOWNLOADING AND PROCESSING PICTURES

function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  const url1 = '/Users/mariacarlotahancock/Desktop/CALLBACK/Kuzco Llama.png';
  const url2 = '/Users/mariacarlotahancock/Desktop/CALLBACK/Olaf.png';
  const url3 = '/Users/mariacarlotahancock/Desktop/CALLBACK/Tweety.png';
  const url4 = '/Users/mariacarlotahancock/Desktop/CALLBACK/Im ready.png';
  
  download(url1, function (url) {
    console.log(`Processing ${url}`);
    download(url2, function (url) {
      console.log(`Processing ${url}`);
      download(url3, function (url) {
        console.log(`Processing ${url}`);
        download(url4, function (url) {
          console.log(`Processing ${url}`);
        });
      });
    });
  });

  //ARRAY OF NUMBERS
  function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 3 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [6, 65, 56, 67, 76, 25, 52];
  console.log(filter(numbers, isOdd));

  let oddNumbers = filter(numbers, (number) => number % 2 != 0);
  let evenNumbers = filter(numbers, (number) => number % 3 == 0);

  console.log(evenNumbers);



  