function turn(objeto, caminho) {
    document.getElementById(objeto).src = caminho;
}
  
function styleSft(obj){
    document.getElementById(obj).id = 'changed';
}
  
function paragrafo() {
    document.getElementById('paragraph').innerHTML = "Maybe NOT!";
    document.getElementById('paragraph').id = 'new-pa';
}