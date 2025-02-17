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