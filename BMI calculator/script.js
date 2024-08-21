// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let height = parseInt(document.querySelector("#height").value);
//   let weight = parseInt(document.querySelector("#weight").value);
//   let results = document.querySelector("#results");

//   if (height === "" || height < 0 || height != NaN) {
//     results.innerHTML = `give a valid height ${height}`;
//   }
//   if (weight === "" || weight < 0 || weight != NaN) {
//     results.innerHTML = `give a valid height ${weight}`;
//   } else {
//    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//    //show the result
//    results.innerHTML = `${bmi}`
//   }
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

  if (height === "" || height < 0 || height != NaN) {
    results.innerHTML = `please give a valid ${height}`;
  }
  if (weight === "" || weight < 0 || weight != NaN) {
    results.innerHTML = `please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<sapn>${bmi}</span>`;
  }
});
