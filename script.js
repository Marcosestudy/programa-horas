

function carregar(){
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  //var hora = 17
  msg.innerHTML = ` Agora são ${hora} horas`

  if(hora >= 0  && hora < 12){
    img.src = "imagem/cedo.png";
    document.body.style.background = ""


    //Bom Dia

}else if(hora >= 12 && hora <= 18){
    img.src = 'imagem/tarde.png'
    document.body.style.background = "#F5e388";

 
  
    //Boa tarde
}else{
    img.src = 'imagem/noite.png'
    document.body.style.background = "#22363D";
    
    //boa noite
}
}
  
