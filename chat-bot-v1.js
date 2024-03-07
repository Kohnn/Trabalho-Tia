import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, assuntoAleatorio, perguntaProvavel } from './can-i-answer.js'


// Separe a frase em uma array de palavras
let pergunta = "Palmeiras tem mundial?"
pergunta = pergunta.toLowerCase().split(" ")
//retira a ? da pergunta
pergunta = pergunta[pergunta.length -1] === "?" ? pergunta.slice(0,-1) : pergunta


const respostas = [palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, assuntoAleatorio, comoDarUmaBicicleta]


for (let i = 0; i < pergunta.length; ++i) { 
    for (let j = 0; j < respostas.length; ++j) { 
        if (respostas[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            respostas[j].matched++
        }
    }
}

console.log(perguntaProvavel())