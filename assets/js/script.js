// TODO: Declare any global variables we need
let total = 0
let heads = 0
let tails = 0
let headsPercent = 0
let tailsPercent = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    let flip = document.querySelector("#flip")
    let image = document.querySelector("img")
    let displayHeads = document.querySelector("#heads")
    let displayTails = document.querySelector("#tails")
    let displayHeadsPercent = document.querySelector("#heads-percent")
    let displayTailsPercent = document.querySelector("#tails-percent")
    flip.addEventListener("click", function(){
       let val = Math.random();
        if (val > .5)
        {        
            image.setAttribute("src", "assets/images/penny-heads.jpg")
            heads = heads +1
            displayHeads.textContent = heads
            
        } else {
            image.setAttribute("src", "assets/images/penny-tails.jpg")
            tails = tails + 1
            displayTails.textContent = tails
            


        }
        total = heads + tails
        if (total > 0){
            headsPercent = (heads / total) * 100
            
            tailsPercent = (tails / total) *100

        }

    })



    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})