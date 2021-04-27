/*navigate through menue*/
function show(show, hide1 , hide2) {
  document.getElementById(show).style.display='block';
  document.getElementById(hide1).style.display='none';
  document.getElementById(hide2).style.display='none';
  return false;
}
/*navigate through menue*/

/*start add and delte the color stylesheet*/
var input = document.querySelector("#colorStyel");
function swapStyleSheet(){
 input.toggleAttribute("disabled");
};
/*end add and delte the color stylesheet*/

/*start the active button*/
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].classList.remove("active")
   this.classList.add("active");
 });
}
/*end the active button*/

/*start the dispalyLanguages button*/
function dispalyLanguages() {
  var dropDownContent = document.querySelector(".dropdown-content");
    dropDownContent.classList.toggle('hideLang');
}
/*end the dispalyLanguages button*/
