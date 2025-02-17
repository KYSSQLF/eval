const btn= document.querySelector('#btn');
let counter=0;
btn.addEventListener("click", function (e) {
    counter ++;
    document.getElementById("count").textContent = counter;
});

function colorChange(color) {
    const bg = document.getElementById("body-color");
    bg.style.backgroundColor=color;

}
document.getElementById("clear").addEventListener('click', clearInput)
function clearInput() {
    const display =document.getElementById("display").value="" ;

    
}
function calculate() {
  const display = document.getElementById("display")
    console.log(display);
    const result= eval(display.value);
    display.value= result;
}
function appendNumber(nb){
    document.getElementById("display").value += nb
    
}
function calculerRemise() {
    const prixInitial = parseFloat(document.getElementById('prixInitial').value);//recupere les valeurs entrer*/
    const pourcentageRemise = parseFloat(document.getElementById('pourcentageRemise').value);//pareil*/
    
    if (isNaN(prixInitial) || isNaN(pourcentageRemise)) { //fonction qui verifie si les valeurs sont correctes sinon il afffiche une alert et se stop avec le return*/
        alert("Veuillez entrer des valeurs valides.");
        return;
    }

    const remise = prixInitial * (pourcentageRemise / 100); // prix initial x pourcentage /100 (formule pour calculer les pourcentage)*/
    const prixFinal = prixInitial - remise; 

    document.getElementById('prixFinal').textContent = prixFinal.toFixed(2); // to fixed pour limiter 2 chiffres apres la virgule*/
}
