

function carregar(){
 var fcor = document.getElementById("fcor")
 const  hcor = document.querySelector('h1#hcor')

  
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  //var hora = data.getHours()
  var hora = 13
  
  msg.innerHTML = ` Agora são ${hora} horas`

  if(hora >= 0  && hora < 12){
    img.src = "imagem/cedo.png";
    document.body.style.background = "#fbfaac";
    document.getElementById("fcor").style.color = "#000000";
    hcor.style.color = "#000000"
     

    //Bom Dia

}else if(hora >= 12 && hora <= 18){
    img.src = 'imagem/tarde.png'
    document.body.style.background = "#F5e388";
    //document.getElementById("fcor").style.color = "#000000";
    fcor.style.color = "#000000";
    hcor.style.color = "#000000";
    

 
  
    //Boa tarde
}else{
    img.src = 'imagem/noite.png'
    document.body.style.background = "#22363D";
    
    //boa noite
}
}
  
