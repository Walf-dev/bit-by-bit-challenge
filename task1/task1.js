function longestStringReduce(arr) {
  let string = document.getElementById("in").value;
  const regex = string.replace(/[^a-zA-Z ]/g, ""); //Ignore any character in the sentence that is not a letter or a space
  let tolowercase = regex.toLowerCase(); //convert the word to lowercase
  let myarr = tolowercase.split(" "); //convert into an array of words

  //function to check the word with the highest number of vowels
  function mostVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      //loop on sentence
      let x = word[i].toLowerCase();
      if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
        count++;
      }
    }
    return count;
  }

  //sort array of words
  myarr.sort((a, b) => {
    if (mostVowels(a) > mostVowels(b)) {
      return -1;
    } else if (mostVowels(a) < mostVowels(b)) {
      return +1;
    } else {
      if (a.toLowerCase() > b.toLowerCase()) {
        return +1;
      } else if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  //console.log(myarr);

  let result = myarr.reduce((a, b) => (a.length < b.length ? b : a), "");
  document.getElementById("out").innerHTML = `The result is: "${result}"`;
  //console.log(result);
}

//clear the input and the result
function MyClear() {
  document.getElementById("in").value = "";
  document.getElementById("out").innerHTML = "Output here";
}
