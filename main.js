const listaTeclas = document.querySelectorAll('.tecla');
const listaSom = document.querySelectorAll('.audio');

function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if( elemento && elemento.localName === 'audio') {
        elemento.play();
        } else {
            console.log("Elemento não encontrado ou seletor inválido");
        }

}

for (let i = 0; i < listaTeclas.length; i++) {

    //evento tocar o som
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    //inserindo class ativa
    tecla.onkeydown = function(evento) {

        const teclaPressionada = evento.code;

        if (teclaPressionada === "Space" || teclaPressionada === "Enter") {

            tecla.classList.add("ativa");

        }
       
    } 

    tecla.onkeyup = function() {

        tecla.classList.remove("ativa");
        
    }

}
