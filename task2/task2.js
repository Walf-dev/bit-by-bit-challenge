const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

function button1(){
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
}

function button2(){
document.getElementById("demo").innerHTML = 
'The second paragraph (index 1) inside "main" is: ' + y[1].innerHTML;
}
