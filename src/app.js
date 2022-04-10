/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ["El perro", "El gato"];
let action = ["se comió", "rompió"];
let what = ["la tarea", "los papeles"];
let when = ["ayer", "la semana pasada"];

function selectRandom(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  //write your code here
  let result = `${selectRandom(who)} ${selectRandom(action)} 
  ${selectRandom(what)} ${selectRandom(when)}`;
  let element = document.getElementById("excuse");
  element.innerHTML = result;
};
