var imagenumber= 4;
for(var i=0 ; i<=imagenumber; i++){
var randomnumber=Math.floor(Math.random()*4 + 1);

var image="./images/image"+randomnumber+".png";

$("button").on("click", function() {
    document.querySelector("img").setAttribute("src", image);
});

}
$("button").on("click", function(){
    if(image === "./images/image1.png"){
    
    $("p").after( "ziad 3arsa ");
}
else if(image === "./images/image2.png"){
    $("p").after( "Ayman 3arsa ");
}
else if(image === "./images/image3.png"){
    $("p").after( "Elia 3arsa ");
}
else if(image === "./images/image4.png"){
    $("p").after( "dabbous 3arsa ");
}
});
