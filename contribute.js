//This function is used to change the link in the home page!
function link_change(a,b){
var changed_link=
localStorage.setItem("textvalue",changed_link);
return false;
}
//this is button resposne cod for authentication:

function response_code(){
    const val=document.getElementById("code_result");
    const hiddencontent=document.getElementById("hidden-content");
    const codearea=document.getElementById("code_area");
    if(code_in.value){
        if(code_in.value =="xyz"){
            val.innerHTML="<h1>Correct!</h1>";
            hiddencontent.style.display="block";
            codearea.style.display="none";
            
        }
        else{
            val.innerHTML="<h1>Wrong!</h1>";
        }
    }
    else{
        val.innerHTML="<h1>Please Enter the code!</h1>";
    }
}


//This is for the locate button functions!
function funloc(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{
        code_result.innerHTML="Not Found";
    }
}
function showPosition(position) {
    var lat= position.coords.latitude;
    var long= position.coords.longitude;
    alert("Current location is spoted,Thanks!")
    link_change(lat.to.Fixed(7),long.to.Fixed(7));

  }
