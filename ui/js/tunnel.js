const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const confirm = document.getElementById('confirmation');
const congrats = document.getElementById('congratulations');

const goToStep2 = function(){
    step1.classList.add('u-d-none');
    step2.classList.remove('u-d-none');
}
const goToStep3 = function(){
    step2.classList.add('u-d-none');
    step3.classList.remove('u-d-none');
}
const confirmation = function(){
    step3.classList.add('u-d-none');
    confirm.classList.remove('u-d-none');
}
const congratulations = function(){
    confirm.classList.add('u-d-none');
    congrats.classList.remove('u-d-none');
}
const change = function(step){
    confirm.classList.add('u-d-none');
    document.querySelectorAll('step').forEach(element => {
        element.classList.add('u-d-none');
    }); 
    document.getElementById(step).classList.remove('u-d-none');
}
const submit = function(){
    congrats.classList.add('u-d-none');
    step1.classList.remove('u-d-none');
}
