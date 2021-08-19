let x = []
const coin = {
    state: 0,

    flip: function (){
        this.state = Math.floor(Math.random()*2)
    },

    toString: function (){
        this.flip()
        if(this.state === 0){
            return 'Heads'
        } else if(this.state === 1){
            return 'Tails'
        }
    },
    toHTML: function (){
        const image = document.createElement('img')
        if(this.toString() === 'Heads'){
            x.push('Heads')
            image.src = './imgs/cara.png'
            image.alt = 'Heads'
        } else if(this.toString() === 'Tails'){
            x.push('Tails')
            image.src = './imgs/coroa.png'
            image.alt = 'Tails'
        }
        return image
    }

}
function display20Flips() {
    const results = [];
    for(let i = 0; i < 20; i++){
        results.push(coin.toString())
    }
    document.body.innerText = results
    return results
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  display20Flips()
  function display20Images() {
    const results = x;
    for(let i = 0; i < 20; i++){
        document.body.appendChild(coin.toHTML())
    }
    return results
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  display20Images()

