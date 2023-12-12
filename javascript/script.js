let botao = document.getElementById("quadrado");
let maca = document.createElement("img");

let vertical = 0
let horizontal = 0

let pontuacao = 0

maca.setAttribute("class", "maca");
maca.src = "./imagens/images.jpg"
document.body.appendChild(maca)
maca.style.top = Math.round(Math.random() * ( 400 - 200) + 50) + "px"
maca.style.left = Math.round(Math.random() * ( 400 - 200) + 50) + "px"

document.addEventListener("keypress", (event)=>{
    if (estaoSobrepostos(botao, maca)) {

        pontuacao++
        let valor = document.getElementById("valor");
        valor.textContent = pontuacao

        botao.style.width = (80 + pontuacao * 2) +"px";
        botao.style.height = (80 + pontuacao * 2) +"px";

        maca.remove()
        maca.setAttribute("class", "maca");
        maca.src = "./imagens/images.jpg"
        document.body.appendChild(maca)
        maca.style.top = Math.random() * ( 400 - 200) + 10 + "px"
        maca.style.left = Math.random() * ( 400 - 200) + 10 + "px"
      } else {
        console.log('Os elementos não estão sobrepostos.');
      }

    if(event.key == "w" || event.key == "PgUp"){
        vertical = vertical - 50
        botao.style.top = vertical + "px"

    }
    else if(event.key == "a" || event.key == "Home"){
        horizontal = horizontal - 50
        botao.style.left = horizontal + "px";
    }
    else if(event.key == "s"){
        vertical = vertical + 50
        botao.style.top = vertical + "px";

    }
    else if(event.key == "d"){
        horizontal = horizontal + 50
        botao.style.left = horizontal + "px"
    }

});


    function estaoSobrepostos(player, maca) {
        const imgPlayer = player.getBoundingClientRect();
        const macaImg = maca.getBoundingClientRect();

        let horizon = Math.floor(imgPlayer.left * 8);
        let horizonTwo = Math.floor(macaImg.left * 8);
        horizon = horizon.toString();
        horizonTwo = horizonTwo.toString();
        horizon = horizon.slice(0, 2);
        horizonTwo = horizonTwo.slice(0, 2);



        let vertical = Math.floor(imgPlayer.top * 8);
        let verticalTwo = Math.floor(macaImg.top * 8);
        vertical = vertical.toString();
        verticalTwo = verticalTwo.toString();
        vertical = vertical.slice(0, 2);
        verticalTwo = verticalTwo.slice(0, 2);


        console.log(horizon);
        console.log(horizonTwo);
        console.log(vertical);
        console.log(verticalTwo);

        let diferencaHorin = horizon -  horizonTwo
        let diferencaVer = vertical - verticalTwo
  
        return (
          diferencaHorin < 3  &&
          diferencaVer < 3
        );
      }

document.addEventListener("keypress", (event)=>{
  if( event.key == " "){
    document.body.style.backgroundColor = "rgba(49, 129, 250, 0.795)";
    botao.src = "./imagens/gatoPidao2.jpg"
  }
});

  
      