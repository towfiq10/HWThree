
//AddEventListener
document.addEventListener("DOMContentLoaded", function (event) {
     document.getElementById("experience").disabled = true;   
})

//declaring the container to hold all the input combined
let outputInfo = "";

//Function starts here to run
function formSubmitEvent(){
    let lname = document.getElementById("lname").value;   
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;    
    
    if (lname.length > 2 ) {

        document.getElementById("experience").disabled = false;       

        outputInfo = lname.concat(' ', city).concat(" ", payment);

        let anotherLi = document.createElement("li");
        anotherLi.appendChild(document.createTextNode(outputInfo));    
        document.getElementById("firstUl").appendChild(anotherLi);
       
    }
    else {
        alert("please fill in all fields");
    }

}

