
var data = new Date();
hora = data.getHours();
console.log(hora);

if (hora >= 6 && hora < 12){
    document.getElementById("saudacao").innerHTML = "Bom dia";
    document.getElementById("saudacao").style.marginLeft = "18px";
    document.getElementById("saudacao").style.fontSize = "32px";
    document.getElementById("saudacao").style.color = "white";
    document.getElementById("saudacao").style.fontWeight = "bolder";
}else if(hora >= 12 && hora < 18){
    console.log("boa tarde");
    document.getElementById("saudacao").innerHTML = "Boa Tarde";
    document.getElementById("saudacao").style.marginLeft = "18px";
    document.getElementById("saudacao").style.fontSize = "32px";
    document.getElementById("saudacao").style.color = "white";
    document.getElementById("saudacao").style.fontWeight = "bolder";

}else{
    console.log("boa noite");
    document.getElementById("saudacao").innerHTML = "Boa Noite";
    document.getElementById("saudacao").style.marginLeft = "18px";
    document.getElementById("saudacao").style.fontSize = "32px";
    document.getElementById("saudacao").style.color = "white";
    document.getElementById("saudacao").style.fontWeight = "bolder";
};


function mudar_imagem() 
{
    document.getElementById("seta-down").src="icons/bxs-up-arrow.svg";

};
   



function aparecer(c1,bgMenu1,bgNav,bgBody){
    c1.style.display = "block";
    bgMenu1.style.backgroundImage = 'linear-gradient( 180deg,rgb(2, 43, 2), transparent), linear-gradient(to top, rgb(0, 0, 0), transparent)';
    bgNav.style.backgroundColor ='rgb(2, 43, 2)';
    bgBody.style.backgroundColor ='rgb(2, 43, 2)';
   };

function sumir(c1,bgMenu1,bgNav,bgBody){
    c1.style.display = "none";
    bgMenu1.style.backgroundImage = 'linear-gradient( 180deg,rgb(100, 5, 5), transparent), linear-gradient(to top, rgb(0, 0, 0), transparent)';
    bgNav.style.backgroundColor ='rgb(100, 5, 5)';
    bgBody.style.backgroundColor ='rgb(100, 5, 5)';
};




