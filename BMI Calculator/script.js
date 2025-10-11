const cont = document.querySelector('.container');
cont.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `⚠️ Please give a valid height (${height})`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `⚠️ Please give a valid weight (${weight})`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = '';
    if (bmi < 18.5) {
      message = "You are Underweight 🟡";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message = "You have a Normal weight 🟢";
    } else if (bmi >= 25 && bmi < 29.9) {
      message = "You are Overweight 🟠";
    } else {
      message = "You are Obese 🔴";
    }

    result.innerHTML = `<h3>Your BMI is ${bmi}</h3><p>${message}</p>`;
  }
});
