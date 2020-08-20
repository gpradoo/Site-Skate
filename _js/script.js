var visibilidade = true;

function vejaMais(){
    document.getElementById('ver-mais').style.display = "inline";   
}

function Close(){
    document.getElementById('ver-mais').style.display = "none";
}
function OpenClose(){
    if (visibilidade){
        document.getElementById('ver-mais').style.display="none";
        visibilidade = false;
    }else{
        document.getElementById('ver-mais').style.display="inline";
        visibilidade = true;
    }
}
/*document.getElementById("ver-mais").onclick() {myFunction()};

function myFunction(){
    document.getElementById("novas").classList.toggle("show")

})

document.getElementById('ver-mais').onclick( {vejaMais()}); 
*/