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
            image.src = './imgs/cara.png'
            image.alt = 'Heads'
        } else if(this.toString() === 'Tails'){
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
  }

  function display20Images() {
    const results = []
    for(let i = 0; i < 20; i++){
        const x = document.body.appendChild(coin.toHTML())
        results.push(x)
  }
  return results

}
  display20Flips()
  display20Images()


