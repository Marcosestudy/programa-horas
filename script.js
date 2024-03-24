

function carregar(){
 var fcor = document.getElementById("fcor")
 const  hcor = document.querySelector('h1#hcor')
 const mensagem = document.querySelector('div.mensagem')
 const fonte = document.getElementById('fonte')

  
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  const minutos = data.getMinutes()
  const segundos = data.getSeconds()
  const horas = [hora, minutos, segundos].join(":") 
 // var hora = 10
  
  msg.innerHTML = ` Agora são ${horas} `;
  //msg.innerHTML = 'te amo'

  if(hora >= 0  && hora < 12){
    img.src = "imagem/minhafoto.png";
    document.body.style.background = "#040f13";
    document.getElementById("fcor").style.color = "#FFFFFF";
    hcor.style.color = "#FFFFFF";
    mensagem.innerHTML = "Bom dia, minha princesa.  Você, minha incrível mulher, é uma verdadeira maravilha, uma força que inspira e ilumina meus dias. Diante dos desafios, lembre-se do poder que há dentro de você (de Deus). Você é capaz de superar qualquer obstáculo, e eu estarei ao seu lado, apoiando e celebrando cada vitória. Vamos juntos vencer essa guerra e construir um futuro ainda mais brilhante. Você é extraordinária, e eu acredito no seu potencial. Avante, minha guerreira!  💘"
    
    fonte.style.fontFamily = "var(--font3)";
    fonte.style.lineHeight = '30px'
    fonte.style.fontSize = "11pt";
    fonte.style.textAlign ='justify,center'
   
    
    
     

    

}else if(hora >= 12 && hora <= 18){
    img.src = 'imagem/nois-dois.png'
    document.body.style.background = "#a1b173";
    //document.getElementById("fcor").style.color = "#000000";
    fcor.style.color = "#000000";
    hcor.style.color = "#000000";
    mensagem.innerHTML = "Meu amorzinho, em cada desafio, vejo a força radiante que há em você. Que a tarde seja permeada por esse otimismo que ilumina nossa jornada, trazendo paz, alegrias e conquistas. Tenha uma boa tarde, repleta de realizações e sorrisos. Você é a luz que faz meus dias mais brilhantes."
    fonte.style.fontFamily = "var(--font2)"
    fonte.style.fontSize = "1em"
    fonte.style.textAlign = "justify, center";
    

 
  
    //Boa tarde
}else{
    img.src = 'imagem/principal.png'
    document.body.style.background = "#8b0000";
     mensagem.innerHTML =
       "   Boa Noite, Meu bem!<br>Meu amor, ao final deste dia vencido, celebro cada momento compartilhado contigo, desde a luz suave da manhã até o entardecer dourado. Que a noite seja aconchegante como o crepúsculo, trazendo sonhos doces e a certeza de um novo amanhecer. Boa noite, minha razão de ser.!";
     //document.getElementById("fonte").style.fontFamily ="var(--font1)";
     fonte.style.fontFamily = "var(--font1)";
     fonte.style.textAlign = "justify, center";



      
    
    //boa noite
}
}
  
