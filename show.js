function menu(x) {
  x.classList.toggle("change");
}

var  abox = document.getElementsByClassName("box")[0];

function allmove(){
      abox.classList.remove("move-ltr");
      abox.classList.remove("move-ttb");
      abox.classList.toggle("move");
}
function ltr(){
      abox.classList.remove("move");
      abox.classList.remove("move-ttb");
      abox.classList.toggle("move-ltr");
}
function ttb(){
    abox.classList.remove("move-ltr");
    abox.classList.remove("move");
    abox.classList.toggle("move-ttb");
}