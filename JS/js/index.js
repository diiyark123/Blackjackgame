let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el")

function getRandomCard(){
    let rm = Math.floor(Math.random() * 13) + 1
    if(rm>10){
        return 10
    }
    else if (rm===1){
        return 11
        
    }
    else{
        return rm
    }
  
    return rm
    
}

function startGame(){
if (sum <= 20) {
    
    message = "Do you want to draw a new card? "
    
} else if (sum === 21) {
    
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
} else {
    
    message = "You're out of the game! "
    isAlive = false
}
messageel.textContent=message
sumel.textContent= "Sum:" + " "+ sum
cardsel.textContent = "Cards:" + " " 
for(let i=0; i< cards.length;i++){
    cardsel.textContent += cards[i] + " "
    
}

}

function newCard(){
    let newCardno = getRandomCard()
    cards.push(newCardno)
    sum = newCardno + sum
    
    startGame()
    
}

