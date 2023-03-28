const range = document.querySelector('input[type="range"]');
const rangeValue = function(){
  const newValue = range.value;
  console.log(newValue);
  document.querySelector('.value').innerHTML = newValue + " jours";
  document.querySelector('.income').innerHTML = Math.round(newValue * 18.3) + " €"}
range.addEventListener("input", rangeValue);

const btnCalcul = document.getElementById('btn-calcul');
const formCalcul = document.getElementById('form-calcul');
const calcul = document.getElementById('calcul');

const calculation = function(){
    formCalcul.classList.add('u-d-none');
    calcul.classList.remove('u-d-none');
}