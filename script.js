var LA_X = true;
var butoArray = ["", "", "", "", "", "", "", "", ""];
var Algu_a_guanyat = false;
var Punts_X = 0;
var Punts_O = 0;
var Titul_punts = "La puntuacio de ";
var Puntuacio_X;
var Puntuacio_O;

function Quan_clicas_al_boto(Buto) {
  if (Algu_a_guanyat == false) {
    if (Buto.textContent != "") {
      return;
    }
    if (LA_X == true) {
      Buto.textContent = "X";
      LA_X = false;
    } else {
      Buto.textContent = "O";
      LA_X = true;
    }
    butoArray[Buto.id] = Buto.textContent;
    has_guanyat_comprovacio("X");
    has_guanyat_comprovacio("O");
  }
}
function Reiniciar() {
  for (let i = 0; i < 9; i++) {
    var Buto_document = document.getElementById(i);
    Buto_document.textContent = "";
  }
  LA_X = true;
  butoArray = ["", "", "", "", "", "", "", "", ""];
  Algu_a_guanyat = false;
}
function has_guanyat_comprovacio(valor) {
  //Horitzontal
  has_guanyat(0, 1, 2, valor);
  has_guanyat(3, 4, 5, valor);
  has_guanyat(6, 7, 8, valor);
  //Vertical
  has_guanyat(0, 3, 6, valor);
  has_guanyat(1, 4, 7, valor);
  has_guanyat(2, 5, 8, valor);
  //Diagonal
  has_guanyat(0, 4, 8, valor);
  has_guanyat(2, 4, 6, valor);
}
function has_guanyat(pos01, pos02, pos03, valor) {
  if (
    butoArray[pos01] == valor &&
    butoArray[pos02] == valor &&
    butoArray[pos03] == valor
  ) {
    setTimeout(function () {
      alert("Has Guanyat " + valor);
      Algu_a_guanyat = true;
    }, 50);
    if (valor == "X") {
    }
  }
}

//window.onload = function () {
//Puntuacio_X = document.getElementById("puntuacio_x");
//Puntuacio_X.textContent = Titul_punts + "X: " + Punts_X;
//Puntuacio_O = document.getElementById("puntuacio_o");
//Puntuacio_O.textContent = Titul_punts + "O: " + Punts_O;
//};
