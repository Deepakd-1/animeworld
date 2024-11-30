function Redirection(){
    alert("You are being redirected to a wild ride!!");
}
function FormSubmission(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("span")
    var e = document.getElementById("span2")
    let c = true;
    if(a ===""){
        b.innerHTML = "Name can't be empty!";
        c = false;
    }
    else if (document.getElementById("email").value === ""){
        e.innerHTML = "Email can't be empty!";
        c = false;
    }
    else if (document.getElementById("review").value ===""){
        document.getElementById("span3").innerHTML = "Review can't be empty";
        c = false;
    }
    else{
        alert("Review Submitted!");
    }
    return c;
}
