const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const regex = /[^a-zA-Z0-9]/g;

function palindrome(str) {
  const lowCase = str.toLowerCase();
  const reverseText = lowCase.split("").reverse("").join("");

  if (lowCase === reverseText) {
    return (resultText.innerHTML = `<p>${textInput.value} is a palindrome</p>`);
  } else {
    return (resultText.innerHTML = `<p>${textInput.value} is not a palindrome</p>`);
  }
}

checkButton.addEventListener("click", () => {
  let word = textInput.value.replace(regex, "");
  if (word) {
    palindrome(word);
  } else {
    alert("Please input a value");
  }
});

// let result;
// let arrResult;
// let resultWord = "";

// textInput.addEventListener("input", (e) => {
//   resultWord = e.target.value.toUpperCase();
//   result = e.target.value.split("").reverse().join("").toUpperCase();
// });

// checkButton.addEventListener("click", () => {
//   if (resultWord) {
//     clickBtn();
//   } else {
//     alert("Please input a value");
//   }
// });

// const clickBtn = () => {
//   const resultTransform = result.replace(/[^a-zA-Z0-9]/g, "");
//   const resultWordTransform = resultWord.replace(/[^a-zA-Z0-9]/g, "");

//   if (resultWordTransform == resultTransform) {
//     buttonResult.innerText = resultWord + " is a palindrome";
//   } else {
//     buttonResult.innerText = resultWord + " is not a palindrome";
//   }
// };
