// List collection of tabs / contents
const tabs = document.querySelectorAll('.tab_btn');
const contents = document.querySelectorAll('.content');

// We are able to modify the class of the element we are
// clicking on. 
tabs.forEach((tab,index)=>{tab.addEventListener("click", ()=>{
    tabs.forEach(tab=>tab.classList.remove('active'))
    tab.classList.add('active')
    // give the active attibute to the class tag "content"
    contents.forEach(cont=>cont.classList.remove('active'))
    contents[index].classList.add('active')})})


//-------------------------------------------

var operandoa=0;
var operandob=0;
var operacion;
var historial = [];
var div = document.getElementById('mi-div');
var hist = document.getElementById('historial');

var uno=document.getElementById("uno");
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
    console.log(resultado)
}

var dos=document.getElementById("dos");
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}

var tres=document.getElementById("tres");
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}

var cuatro=document.getElementById("cuatro");
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}

var cinco=document.getElementById("cinco");
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}

var seis=document.getElementById("seis");
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}

var siete=document.getElementById("siete");
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}

var ocho=document.getElementById("ocho");
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}

var nueve=document.getElementById("nueve");
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}

var cero=document.getElementById("cero");
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}

var reset=document.getElementById("reset");
reset.onclick= function(e){
    resetear()
}

var sumar=document.getElementById("sumar");
sumar.onclick= function(e){
    operandoa=resultado.textContent;
    operacion = "+";
    //div.style.backgroundColor = "#1329d0";
    //hist.style.backgroundColor = "#1329d0";
    
    limpiar()
}

var menos=document.getElementById("menos");
menos.onclick= function(e){
    operandoa=resultado.textContent;
    operacion = "-";
    limpiar()
}

var multiplicacion=document.getElementById("multiplicacion");
multiplicacion.onclick= function(e){
    operandoa=resultado.textContent;
    operacion = "*";

    limpiar()
}

var division=document.getElementById("division");
division.onclick= function(e){
    operandoa=resultado.textContent;
    operacion = "/";
    limpiar()
}

var igual=document.getElementById("igual");
igual.onclick= function(e){
    operandob=resultado.textContent;
    resolver()
}

function limpiar(){
    resultado.textContent = "";
    proceso.textContent=operandoa + operacion;
}
function resetear(){
    resultado.textContent = "";
    proceso.textContent = "";
    operandoa=0;
    operandob=0;
    operacion="";
}
var ln = document.getElementById("ln");
ln.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "ln";
  resolver()
}

var power = document.getElementById("power");
power.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "^";
  limpiar()
}

var log = document.getElementById("log");
log.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "log";
  resolver()
}
var sin = document.getElementById("sin");
sin.onclick = function (e) {
  operandoa =resultado.textContent;
  operacion = "sin";
  resolver();
}
var cos = document.getElementById("cos");
cos.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "cos";
  resolver();
}
var tan = document.getElementById("tan");
tan.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "tan";
  resolver();
}
var sqrt = document.getElementById("sqrt");
sqrt.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "sqrt";
  resolver();
}
var sq = document.getElementById("sq");
sq.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "sq";
  resolver();
}
var ans = document.getElementById("ans");
ans.onclick = function (e) {
  operandoa = resultado.textContent;
  operacion = "ans";
  resolver();
}

function resolver() {
    var res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "ln":
        res = Math.log(parseFloat(operandoa));
        break;
      case "^":
        res = Math.exp(parseFloat(operandoa));
        break;
      case "pow":
        res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
        break;
      case "log":
        res = Math.log10(parseFloat(operandoa));
        break;
      case "sin":
        res = Math.sin(parseFloat(operandoa) * Math.PI / 180); // Convert degrees to radians for sine
        break;
      case "cos":
        res = Math.cos(parseFloat(operandoa));
        break;
      case "tan":
        res = Math.tan(parseFloat(operandoa));
        break;
      case "sqrt":
        res = Math.sqrt(parseFloat(operandoa));
        break;
      case "sq":
        res = parseFloat(operandoa) * parseFloat(operandoa);
        break;
      case "ans":
        // Retrieve the last result from the historial array
        res = parseFloat(historial[historial.length - 1]);
        break;
      default:
        break;
    }
  
    aux = operandoa + " " + operacion + " " + operandob + " =";
    resetear();
    proceso.textContent = aux;
    resultado.textContent = res;
    historial.push(aux + res);
    document.getElementById("cuerpo-historial").innerHTML = historial.join("<br>");
  }