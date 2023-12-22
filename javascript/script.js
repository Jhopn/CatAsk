let botao = document.getElementById("quadrado");
let maca = document.createElement("img");
let div = document.getElementById("cobra")
let audio = document.getElementById("musicaFundo");
let controlaMusica = document.getElementById("controlaMusica");
let path = document.getElementById("path");


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

if(detectar_mobile){
  let seta_Cima = document.createElement("img");
  seta_Cima.src = "./imagens/caret-up-fill.svg"
  body.appendChild(seta_Cima);

  let seta_Direita = document.createElement("img");
  seta_Direita.src = "./imagens/caret-left-fill.svg"
  body.appendChild(seta_Direita);


  let seta_Esquerda = document.createElement("img");
  seta_Esquerda.src = "./imagens/caret-right-fill.svg"
  body.appendChild(seta_Esquerda);


  let seta_Baixo = document.createElement("img");
  seta_Baixo.src = "./imagens/caret-down-fill.svg"
  body.appendChild(seta_Baixo);

}
seta_Cima.document.addEventListener("click", ()=>{
  if( vertical <= 0){
    botao.style.top = vertical + "px"
  }
  else{
    vertical = vertical - 50
    botao.style.top = vertical + "px"
  }
});

seta_Baixo.document.addEventListener("click", ()=>{
  if( vertical >= (windowHeight - 270)){
    botao.style.top = vertical + "px";
  } else {
    vertical = vertical + 50
    botao.style.top = vertical + "px";
  }
});

seta_Direita.document.addEventListener("click", ()=>{
  if(horizontal <= 0){
    botao.style.top = vertical + "px"
  }
  else{
    horizontal = horizontal - 50
    botao.style.left = horizontal + "px";
  }
});

seta_Esquerda.document.addEventListener("click", ()=>{
  if(horizontal >= (windowWidth - 130)){
    botao.style.left = horizontal + "px"

  } else{
    horizontal = horizontal + 50
    botao.style.left = horizontal + "px"

  }
});


function detectar_mobile() {
  var check = false; //wrapper no check
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
      