let botao = document.getElementById("quadrado");
let maca = document.createElement("img");
let div = document.getElementById("cobra")
let audio = document.getElementById("musicaFundo");
let controlaMusica = document.getElementById("controlaMusica");
let path = document.getElementById("path");
let setasControla = document.getElementById("setasControla");


let exec
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

controlaMusica.addEventListener("click", controlAudio, exec)


let vertical = 0
let horizontal = 0
let pontuacao = 0

var windowWidth = screen.width; // Altura da janela
var windowHeight = screen.height; // Largura da janela

let valoresAlt = [];
let valoresLarg = [];

for (var i = 0; i < 350 ; i += 50) {
  valoresAlt.push(i);
}

for (var i = 0; i <= windowHeight - 400 ; i += 50) {
  valoresLarg.push(i);
}
console.log(valoresAlt)
console.log(valoresLarg)


// Cria a primeira ração
maca.setAttribute("class", "maca");
maca.src = "./imagens/images.jpg"
div.appendChild(maca)
let valorAlt = Math.floor(Math.random() * valoresAlt.length);
let valorLarg = Math.floor(Math.random() * valoresLarg.length);
maca.style.top = valoresAlt[valorAlt] + "px";
maca.style.left = valoresLarg[valorLarg] + "px";

document.addEventListener("keypress", (event)=>{
    if(event.key == "w" || event.key == "PgUp"){
        if( vertical <= 0){
            botao.style.top = vertical + "px"
        }
        else{
          vertical = vertical - 50
          botao.style.top = vertical + "px"
        }
    }
    else if(event.key == "a" || event.key == "Home"){
      if(horizontal <= 0){
        botao.style.top = vertical + "px"
      }
      else{
        horizontal = horizontal - 50
        botao.style.left = horizontal + "px";
      }
    }
    else if(event.key == "s"){
      if( vertical >= (windowHeight - 270)){
        botao.style.top = vertical + "px";
      } else {
        vertical = vertical + 50
        botao.style.top = vertical + "px";
      }
    }
    else if(event.key == "d"){
      if(horizontal >= (windowWidth - 130)){
        botao.style.left = horizontal + "px"

      } else{
        horizontal = horizontal + 50
        botao.style.left = horizontal + "px"

      }
    }
});


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

  // console.log(horizon);
  // console.log(horizonTwo);
  // console.log(vertical);
  // console.log(verticalTwo);

  let diferencaHorin = horizonTwo - horizon
  let diferencaVer = verticalTwo - vertical

  console.log(diferencaHorin)
  console.log(diferencaVer)

  return (
    diferencaHorin <= 5  &&
    diferencaVer <= 5 &&
    diferencaHorin - diferencaVer <= 3
  );
}

document.addEventListener("keypress", (event)=>{
  if (estaoSobrepostos(botao, maca)) {

    pontuacao++
    let valor = document.getElementById("valor");
    valor.textContent = pontuacao

    // botao.style.width = (80 + pontuacao * 2) +"px";
    // botao.style.height = (80 + pontuacao * 2) +"px";

    maca.setAttribute("class", "maca");
    maca.src = "./imagens/images.jpg"
    div.appendChild(maca)
    let valorAlt = Math.floor(Math.random() * valoresAlt.length);
    let valorLarg = Math.floor(Math.random() * valoresLarg.length);
    maca.style.top = valoresAlt[valorAlt] + "px";
    maca.style.left = valoresLarg[valorLarg] + "px";
  } else {
    console.log('Os elementos não estão sobrepostos.');
  }
});

function obterCoordenadas(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;

  botao.style.top = y  + "px";
  botao.style.left = x + "px";

}

document.addEventListener('touchstart', obterCoordenadas);

document.addEventListener("touchstart", (event)=>{
  if (estaoSobrepostos(botao, maca)) {

    pontuacao++
    let valor = document.getElementById("valor");
    valor.textContent = pontuacao

    // botao.style.width = (80 + pontuacao * 2) +"px";
    // botao.style.height = (80 + pontuacao * 2) +"px";

    maca.setAttribute("class", "maca");
    maca.src = "./imagens/images.jpg"
    div.appendChild(maca)
    let valorAlt = Math.floor(Math.random() * valoresAlt.length);
    let valorLarg = Math.floor(Math.random() * valoresLarg.length);
    maca.style.top = valoresAlt[valorAlt] + "px";
    maca.style.left = valoresLarg[valorLarg] + "px";
  } else {
    console.log('Os elementos não estão sobrepostos.');
  }
});



isFullScreen = false;
var elem = document.documentElement;
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

let telaCheia = document.getElementById("telaCheia");
telaCheia.addEventListener("click", AtivarDesativarFS);



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
let opcoes = document.getElementById("configuracoes");
let imagemConf = document.getElementById("imagemConfiguracoes");
opcoes.addEventListener("click", configuracoes);


// Temas

let temas = document.getElementById("temas");

let temaAtivo = false
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

temas.addEventListener("click", temasCat, temaAtivo)