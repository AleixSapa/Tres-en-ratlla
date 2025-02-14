var LA_X = true;
function Quan_clicas_al_boto(Buto) {
  console.log(Buto.textContent);
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
}
function Reiniciar() {
  location.reload(true);
}
