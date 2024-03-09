

function carregar() {
  var fcor = document.getElementById("fcor");
  const hcor = document.querySelector("h1#hcor");
  const mensagem = document.querySelector("div.mensagem");
  const fonte = document.getElementById("fonte");
  const foto = document.querySelector("div#foto");
  const img = document.createElement("img");
  img.setAttribute("id", "foto");

  //var msg = document.getElementById("msg");
  //var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();
  const horas = [hora, minutos, segundos].join(":");
  //console.log(horas);
  //const data = new Date(); // momento atual
  // const horas = data.getHours();
  //const minutos = data.getMinutes();
  //const segundos = data.getSeconds();

  //const hhmmmss = [horas, minutos, segundos].join(":");
  //console.log(hhmmmss);

  //var hora = 23

  msg.innerHTML = ` Agora são: ${horas} `;
  //msg.innerHTML = 'te amo'

  if (hora >= 0 && hora < 12) {
    //img.src = "imagem/cedo.png";
    img.setAttribute("src", "imagem/cedo.png");
    foto.appendChild(img);

    document.body.style.background = "#fbfaac";
    document.getElementById("fcor").style.color = "#000000";
    hcor.style.color = "#000000";
    mensagem.innerHTML =
      "Bom dia, minha princesa. Você é a razão pela qual me levanto mais feliz a cada manhã! 💘";
    fonte.style.fontFamily = "var(--font3)";
    fonte.style.lineHeight = "30px";
  } else if (hora >= 12 && hora <= 18) {
    // img.src = 'imagem/tarde.png'
    img.setAttribute("src", "imagem/tarde.png");
    foto.appendChild(img);
    document.body.style.background = "#F5e388";
    //document.getElementById("fcor").style.color = "#000000";
    fcor.style.color = "#000000";
    hcor.style.color = "#000000";
    mensagem.innerHTML =
      "Uma tarde cheia de tudo que lhe faz bem. Que as alegrias transbordam em seu coração e preencham sua vida de momentos incríveis. Que haja luz divina em seus caminhos e pensamentos, E que Deus lhe abencoe sempre e lhe dê muita sabedoria";
    fonte.style.fontFamily = "var(--font2)";
    fonte.style.fontSize = "1em";

    //Boa tarde
  } else {
    // img.src = 'imagem/noite.png'
    img.setAttribute("src", "imagem/noite.png");
    foto.appendChild(img);
    document.body.style.background = "#22363D";
    mensagem.innerHTML =
      "Boa Noite, Minha Lindeza!<br><br>Maravilhoso mesmo é amanhecer cheio da presença de Deus, pois sabemos que muitas lutas iremos enfrentar neste dia, mas, o nosso Deus nos fará vencer tudo na vida!";
    //document.getElementById("fonte").style.fontFamily ="var(--font1)";
    fonte.style.fontFamily = "var(--font1)";

    //boa noite
  }
}
