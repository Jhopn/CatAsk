let botao = document.getElementById("quadrado");
let maca = document.createElement("img");
let div = document.getElementById("cobra")
let audio = document.getElementById("musicaFundo");
let controlaMusica = document.getElementById("controlaMusica");
let path = document.getElementById("path");
let setasControla = document.getElementById("setasControla");
let meioEfeito = document.getElementById("meio");
let comemoraDiv = document.getElementById("comemora");
let vida = document.getElementById("percentualVida");
let gatoCongelando = document.getElementById("gatoCongelando");

let imagensGato = ["./imagens/imagenspontuacao/1.png", 
"./imagens/imagenspontuacao/2.png","./imagens/imagenspontuacao/3.png",
"./imagens/imagenspontuacao/4.png","./imagens/imagenspontuacao/5.png",
"./imagens/imagenspontuacao/6.png","./imagens/imagenspontuacao/7.png",
"./imagens/imagenspontuacao/8.png"];

let vertical = 0
let horizontal = 0
let pontuacao = 0

let modalfechado = false

var windowWidth = screen.width; // Altura da janela
var windowHeight = screen.height; // Largura da janela

let valoresAlt = [];
let valoresLarg = [];

for (var i = 0; i < 350 ; i += 50) {
  valoresAlt.push(i);
}

for (var i = 0; i <= windowHeight - 100 ; i += 50) {
  valoresLarg.push(i);
}
console.log(valoresAlt);
console.log(valoresLarg);

let vidaConta = 10
vida.style.height = vidaConta + "px";


var duracaoTotal = 20000;
var intervalo = 100;
var incremento = (50 / duracaoTotal) * intervalo;

if(modalfechado === true){
  let intervaloID = setInterval(() => {
    vidaConta += incremento;
    vida.style.height = vidaConta + "px";

    if (vidaConta >= 140) {  
        clearInterval(intervaloID);  
    }
    else if(duracaoTotal >= 5000){
      gatoCongelando.src = "./imagens/gatocongela/gatogelo2.png"
    }
    else if(duracaoTotal >= 20000){
      gatoCongelando.src = "./imagens/gatocongela/gatogelo3.png"
    }
}, intervalo);

}



// Cria a primeira ração
maca.setAttribute("class", "maca naoSelecionavel");
maca.src = "./imagens/achocolatado1.png"
div.appendChild(maca)
let valorAlt = Math.floor(Math.random() * valoresAlt.length);
let valorLarg = Math.floor(Math.random() * valoresLarg.length);
maca.style.top = valoresAlt[valorAlt] + "px";
maca.style.left = valoresLarg[valorLarg] + "px";

document.addEventListener("keypress", (event)=>{
  if(modalfechado === true){
    if(event.key == "w" || event.key == "PgUp"){
        if( vertical <= 0){
            botao.style.top = vertical + "px";
            meioEfeito.style.top = vertical + "px"
        }
        else{
          vertical = vertical - 40
          botao.style.top = vertical + "px"
          meioEfeito.style.top = vertical + "px"
          botao.style.webkitTransform = 'rotate(360deg)';
          botao.style.mozTransform = "rotate(360deg)";

          meioEfeito.style.webkitTransform = 'rotate(180deg)';
          meioEfeito.style.mozTransform = "rotate(180deg)";

        }
    }
    else if(event.key == "a" || event.key == "Home"){
      if(horizontal <= -100){
        botao.style.left = vertical + "px"
        meioEfeito.style.left = horizontal + "px"
      }
      else{
        horizontal = horizontal - 40
        botao.style.left = horizontal + "px";
        meioEfeito.style.left = horizontal + "px"
        botao.style.webkitTransform = 'rotate(270deg)';
        botao.style.mozTransform = "rotate(270deg)";

        meioEfeito.style.webkitTransform = 'rotate(450deg)';
        meioEfeito.style.mozTransform = "rotate(450deg)";
      }
    }
    else if(event.key == "s"){
      if( vertical >= (windowHeight - 270)){
        botao.style.top = vertical + "px";
        meioEfeito.style.top = vertical + "px"
      } else {
        vertical = vertical + 40
        botao.style.top = vertical + "px";
        meioEfeito.style.top = vertical + "px"

        botao.style.webkitTransform = 'rotate(180deg)';
        botao.style.mozTransform = "rotate(180deg)";

        meioEfeito.style.webkitTransform = 'rotate(360deg)';
        meioEfeito.style.mozTransform = "rotate(360deg)";
      }
    }
    else if(event.key == "d"){
      if(horizontal >= (windowWidth - 130)){
        botao.style.left = horizontal + "px"
        meioEfeito.style.left = horizontal + "px"
      } else{
        horizontal = horizontal + 40
        botao.style.left = horizontal + "px"
        meioEfeito.style.left = horizontal + "px"
        botao.style.webkitTransform = 'rotate(450deg)';
        botao.style.mozTransform = "rotate(450deg)";

        meioEfeito.style.webkitTransform = 'rotate(270deg)';
        meioEfeito.style.mozTransform = "rotate(270deg)";
      }
    }
    // meioEfeito.style.animation = "animate 2.5s linear infinite";
  } else{
    alert("Feche as Instruções primeiro!");
  }
    // botao.style.transform = "2s"
    // botao.src = "./imagens/gatoparado.png"
});


// Verifica se estão sobre um o outro
document.addEventListener("keypress", (event)=>{
  if (estaoSobrepostos(botao, maca)) {
    pontuacao++
    vidaConta -= incremento
    let valor = document.getElementById("valor");
    valor.textContent = pontuacao

    // botao.style.width = (80 + pontuacao * 2) +"px";
    // botao.style.height = (80 + pontuacao * 2) +"px";

    let indiceAleatorio = Math.floor(Math.random() * imagensGato.length);
    let srcGato = imagensGato[indiceAleatorio];

    let gatoFeliz = document.createElement("img");
    gatoFeliz.setAttribute("class", "pontuacao");
    gatoFeliz.src = srcGato;
    comemoraDiv.appendChild(gatoFeliz);

    let label = document.createElement("p");
    let texto = document.createTextNode("+1");
    label.appendChild(texto)
    label.setAttribute("class", "maisUm");
    label.src = srcGato;
    comemoraDiv.appendChild(label);


    let altGato = Math.floor(Math.random() * valoresAlt.length);
    let largGato = Math.floor(Math.random() * valoresLarg.length);
    comemoraDiv.style.top = valoresAlt[altGato] + "px";
    comemoraDiv.style.left = valoresLarg[largGato] + "px";


    setTimeout( () =>{
      comemoraDiv.removeChild(gatoFeliz);
      comemoraDiv.removeChild(label);
  }, 1000);

    

    maca.setAttribute("class", "maca naoSelecionavel");
    maca.src = "./imagens/achocolatado1.png"
    div.appendChild(maca)
    let valorAlt = Math.floor(Math.random() * valoresAlt.length);
    let valorLarg = Math.floor(Math.random() * valoresLarg.length);
    maca.style.top = valoresAlt[valorAlt] + "px";
    maca.style.left = valoresLarg[valorLarg] + "px";

  }
});


// Move a Div atráves do toque na tela
document.addEventListener("touchstart", moveDiv);


// Verifica se estão sobre um o outro
document.addEventListener("touchstart", (event)=>{
    if (estaoSobrepostos(botao, maca)) {
    pontuacao++
    vidaConta -= incremento

    let valor = document.getElementById("valor");
    valor.textContent = pontuacao

    let indiceAleatorio = Math.floor(Math.random() * imagensGato.length);
    let srcGato = imagensGato[indiceAleatorio];

    let gatoFeliz = document.createElement("img");
    gatoFeliz.setAttribute("class", "pontuacao");
    gatoFeliz.src = srcGato;
    comemoraDiv.appendChild(gatoFeliz);

    let label = document.createElement("p");
    let texto = document.createTextNode("+1");
    label.appendChild(texto)
    label.setAttribute("class", "maisUm");
    label.src = srcGato;
    comemoraDiv.appendChild(label);

    setTimeout( () =>{
      comemoraDiv.removeChild(gatoFeliz);
      comemoraDiv.removeChild(label);
  }, 1000);

    // botao.style.width = (80 + pontuacao * 2) +"px";
    // botao.style.height = (80 + pontuacao * 2) +"px";

    maca.setAttribute("class", "maca naoSelecionavel");
    maca.src = "./imagens/achocolatado1.png"
    div.appendChild(maca);
    let valorAlt = Math.floor(Math.random() * valoresAlt.length);
    let valorLarg = Math.floor(Math.random() * valoresLarg.length);
    maca.style.top = valoresAlt[valorAlt] + "px";
    maca.style.left = valoresLarg[valorLarg] + "px";

    let altGato = Math.floor(Math.random() * valoresAlt.length);
    let largGato = Math.floor(Math.random() * valoresLarg.length);
    comemoraDiv.style.top = valoresAlt[altGato] + "px";
    comemoraDiv.style.left = valoresLarg[largGato] + "px";
}
});


// Tela Cheia
isFullScreen = false;
var elem = document.documentElement;
let telaCheia = document.getElementById("telaCheia");
telaCheia.addEventListener("click", AtivarDesativarFS);


// Configurações
let opcoes = document.getElementById("configuracoes");
let imagemConf = document.getElementById("imagemConfiguracoes");
opcoes.addEventListener("click", configuracoes);


// Temas
let temas = document.getElementById("temas");
let temaAtivo = false
temas.addEventListener("click", temasCat, temaAtivo)


// Controla o audio
let exec
controlaMusica.addEventListener("click", controlAudio, exec)

// Abre o modal
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      openModal();
  }, 1000); // Abre o modal após 2 segundos (ajuste conforme necessário)
});

// Fecha o modal inicial
let modalClose = document.getElementById("close");
modalClose.addEventListener("click", closeModal);


// Funções
// Temas
function temasCat(){
  if( temaAtivo === false){
    document.body.style.backgroundColor = "rgba(49, 129, 250, 0.795)";
    botao.src = "./imagens/gato2.png"
    temaAtivo = true
  }
  else if(temaAtivo === true){
    document.body.style.backgroundColor = "rgba(250, 163, 49, 0.795)";
    botao.src = "./imagens/gato1.png"
    temaAtivo = false
  }
  
}

// Configurações 
function configuracoes(){
  let menu = document.querySelector(".menu");
  if( menu.classList.contains("aberto")){
    menu.classList.remove("aberto");
    imagemConf.src = "./imagens/gear-fill.svg";
  } else {
    menu.classList.add("aberto");
    imagemConf.src = "./imagens/gear.svg";
  }

}

//Tela Cheia
function AtivarDesativarFS() {
  //Se o estado atual for "FullScreen", desativá-lo.
  //Note que para as verificações é feito uma validação para todos os possíveis navegadores, facilitando a sua vida.
    if (document.exitFullscreen) {
    document.exitFullscreen();
    isFullScreen = false;
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
    isFullScreen = false;
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
    isFullScreen = false;
  }


if (elem.requestFullscreen) {
   elem.requestFullscreen();
   isFullScreen = true;
} else if (elem.mozRequestFullScreen) { /* Firefox */
   elem.mozRequestFullScreen();
    isFullScreen = true;
} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  elem.webkitRequestFullscreen();
   isFullScreen = true;
} else if (elem.msRequestFullscreen) { /* IE/Edge */
  elem.msRequestFullscreen();
   isFullScreen = true;
}

if(isFullScreen === true){
  telaCheia.src = "./imagens/fullscreen-exit.svg";
} 

}

// Move a Div na tela
function moveDiv(event) {
  if(modalfechado === true){
      let [touch] = event.touches;
      var x = touch.clientX;
      var y = touch.clientY;
      // botao.src = "./imagens/Gato (1).gif"

      botao.style.transition = "1s";
      meioEfeito.style.transition = "1s";

      // Define a direção do gato
      botao.style.top = y + "px";
      botao.style.left = x + "px";
      meioEfeito.style.top = y + "px";
      meioEfeito.style.left = x + "px";


      // Obtem o angulo através de y e x
      var valorRad = Math.atan2(y, x);
      var angulodoGato = valorRad * (1080 / Math.PI);

      botao.style.webkitTransform = "rotate("+ angulodoGato + "deg)";
      botao.style.mozTransform = "rotate("+ angulodoGato + "deg)";

      meioEfeito.style.webkitTransform = "rotate("+ -angulodoGato + "deg)";
      meioEfeito.style.mozTransform = "rotate("+ -angulodoGato + "deg)";

  }
}

// Verifica se os elementos estão um sobre o outro
function estaoSobrepostos(player, maca) {
  const imgPlayer = player.getBoundingClientRect();
  const macaImg = maca.getBoundingClientRect();

  let horizon = Math.floor((imgPlayer.left * 8)/100);
  let horizonTwo = Math.floor((macaImg.left * 8)/100);
  horizon = horizon.toString();
  horizonTwo = horizonTwo.toString();
  horizon = parseInt(horizon);
  horizonTwo = parseInt(horizonTwo);



  let vertical = Math.floor((imgPlayer.top * 8)/100);
  let verticalTwo = Math.floor((macaImg.top * 8)/100);
  vertical = vertical.toString();
  verticalTwo = verticalTwo.toString();
  vertical = parseInt(vertical);
  verticalTwo = parseInt(verticalTwo);

  
  let diferencaHorin = horizonTwo - horizon
  let diferencaVer = verticalTwo - vertical

  console.log(diferencaHorin)
  console.log(diferencaVer)

  return (
    diferencaHorin <= 0  &&
    diferencaVer <= 0 &&
    diferencaHorin - diferencaVer <= 0
  );
}

// Controla o audio
function controlAudio(){
  if(exec){
    audio.play();
    exec = false
    controlaMusica.src = "./imagens/volume-down-fill.svg"
  }
  else{
    audio.pause();
    exec = true
    controlaMusica.src = "./imagens/volume-mute-fill.svg"

  }
}

// Abre o modal
function openModal() {
  document.getElementById("modalInstrucoes").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Fecha o modal
function closeModal() {
  document.getElementById("modalInstrucoes").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  modalfechado = true
}















        
