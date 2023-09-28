
function chooseCPU () {
    let opcoes = ['pedra', 'papel', 'tesoura']
    
    let indice =  Math.floor(Math.random() * 3)
    
    return opcoes[indice]

}

function chooseChampion (choosePlayer, chooseCPU) {

    
    if(choosePlayer === chooseCPU) {
        return 'Empate'
    } else if (choosePlayer === 'pedra' && chooseCPU === 'tesoura' || 
    choosePlayer === 'papel' && chooseCPU === 'pedra' ||
    choosePlayer === 'tesoura' && chooseCPU === 'papel' ) {
        return 'Você venceu'
    } else {
        return 'Voce perdeu'
    }
}

function jogarJokenpo(choosePlayer) {
    const escolhaCPU = chooseCPU()
    const resultado = chooseChampion(choosePlayer, escolhaCPU)

    println('computador escolheu: ' + escolhaCPU+ ' ' + 'e você escolheu: '+ choosePlayer +' '+ resultado)
}

const escolhaJogador = prompt('ESCOLHA -> papel | tesoura | pedra')
jogarJokenpo(escolhaJogador)
