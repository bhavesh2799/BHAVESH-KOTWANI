
var btn=document.getElementByClassName("r");
btn.addEventListener("click",openForm);
var saver=document.getElementByClassName("abc1");
saver.addEventListener("click",savetext);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var savedText =[];
function savetext() {
  savedText=document.getElementById("new");
  savedText.value;


}
