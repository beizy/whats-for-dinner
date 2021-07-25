var letsCookBtn = document.querySelector('#lets-cook-button')
var options = document.getElementsByName('food')
var rightBox = document.getElementById('right-box')
var selectedFood;

letsCookBtn.addEventListener('click', function(){
    selected();
    cook();
})

function selected(){ 
    for (var i = 0; i < options.length; i++){
        if (options[i].checked === true)
        selectedFood = options[i].value
    }
}

function cook(){
    var randomFood = foodList[selectedFood][getRandomIndex(foodList[selectedFood])]
    rightBox.innerHTML = `
        <h3><i> How about:</i></h3>
        <h1>${randomFood}!</h1>
    `
}




function getRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}






