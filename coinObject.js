const coin = {
    state: 0,

    flip: function (){
        this.state = Math.floor(Math.random()*2)
    },

    toString: function (){
        if(this.state === 0){
            console.log('Heads')
        } else if(this.state === 1){
            console.log('Tails')
        }
    },
    toHTML: function (){
        const image = document.createElement('img')
        if(this.state === 0){
            image.src = './imgs/cara.png'
            document.getElementByClassName('principal').appendChild(image)
        } else if(this.state === 1){
            image.src = './imgs/coroa.png'
            image.src = './imgs/cara.png'
            document.getElementByClassName('principal').appendChild(image)

            return image
        }
    }

}
function display20Flips(){
    const results = []
    for(let i = 0; i < 20; i++){
        results.push()
    }
}
coin.flip()
console.log(coin.state)
coin.toString()
