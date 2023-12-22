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

var windowWidth = window.innerWidth; // Altura da janela
var windowHeight = window.innerHeight; // Largura da janela

let valoresAlt = [];
let valoresLarg = [];

for (var i = 0; i < 350 ; i += 50) {
  valoresAlt.push(i);
}

for (var i = 0; i <= windowHeight ; i += 50) {
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

  if( event.key == " "){
    document.body.style.backgroundColor = "rgba(49, 129, 250, 0.795)";
    botao.src = "./imagens/gato2.png"
  }
});

// if(detectar_mobile){
//   let setaCima = document.createElement("img");
//   setaCima.src = "./imagens/caret-up-fill.svg"
//   setaCima.id = "setaCima"
//   setasControla.appendChild(setaCima);

//   let seta_Esquerda = document.createElement("img");
//   seta_Esquerda.src = "./imagens/caret-right-fill.svg"
//   seta_Esquerda.id = "seta_Esquerda"
//   setasControla.appendChild(seta_Esquerda);

//   let seta_Direita = document.createElement("img");
//   seta_Direita.src = "./imagens/caret-left-fill.svg"
//   seta_Direita.id = "seta_Baixo"
//   setasControla.appendChild(seta_Direita);


//   let seta_Baixo = document.createElement("img");
//   seta_Baixo.src = "./imagens/caret-down-fill.svg"
//   seta_Baixo.id = "seta_Baixo"
//   setasControla.appendChild(seta_Baixo);


//   setaCima.addEventListener("click", ()=>{
//     if( vertical <= 0){
//       botao.style.top = vertical + "px"
//     }
//     else{
//       vertical = vertical - 50
//       botao.style.top = vertical + "px"
//     }
//     console.log("deu certo")
//   });
  
//   seta_Baixo.addEventListener("click", ()=>{
//     if( vertical >= (windowHeight - 270)){
//       botao.style.top = vertical + "px";
//     } else {
//       vertical = vertical + 50
//       botao.style.top = vertical + "px";
//     }
//   });
  
//   seta_Direita.addEventListener("click", ()=>{
//     if(horizontal <= 0){
//       botao.style.top = vertical + "px"
//     }
//     else{
//       horizontal = horizontal - 50
//       botao.style.left = horizontal + "px";
//     }
//   });
  
//   seta_Esquerda.addEventListener("click", ()=>{
//     if(horizontal >= (windowWidth - 130)){
//       botao.style.left = horizontal + "px"
  
//     } else{
//       horizontal = horizontal + 50
//       botao.style.left = horizontal + "px"
  
//     }
//   });

//}

function obterCoordenadas(event) {
  var x = event.clientX || event.touches[0].clientX;
  var y = event.clientY || event.touches[0].clientY;

  if(x >= (windowWidth - 130)){
    botao.style.left = x + "px"
  } else{
    botao.style.left = x + "px"
  }

  if( y  >= (windowHeight - 270)){
    botao.style.top = y  + "px";
  } else {
      botao.style.top = y  + "px";
  }
}

document.addEventListener('touchstart', obterCoordenadas);






function detectar_mobile() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }
      