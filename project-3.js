const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bmi;

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight `;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }

  if (bmi < 18.6) {
    result.innerHTML = `You'r A Under Weight ${bmi}`;
  } else if (bmi >= 18.6 && bmi <= 25) {
    result.innerHTML = `Normal Weight ${bmi}`;
  } else {
    result.innerHTML = `Over Weight ${bmi}`;
  }
});
