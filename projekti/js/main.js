


var poppi=document.getElementById("popup3");
var salasana="testi";
var annettu="";
function tarkista() {
    console.log("Tarkista");
    annettu=document.getElementById("Salasana").value;
    if (annettu===salasana){
    poppi.style.display="block";
    document.getElementById("popup1").style.visibility = "hidden";
    }
}