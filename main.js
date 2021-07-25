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
    if (selectedFood !== 'entireMeal'){ 
        var randomFood = foodList[selectedFood][getRandomIndex(foodList[selectedFood])]
        rightBox.innerHTML = `
            <h3><i> How about:</i></h3>
            <h1>${randomFood}!</h1>`
    } else {
        var randomSide = foodList.side[getRandomIndex(foodList.side)]
        var randomMainDish = foodList.mainDish[getRandomIndex(foodList.mainDish)]
        var randomDessert = foodList.dessert[getRandomIndex(foodList.dessert)]
        rightBox.innerHTML = `
        <h3><i> How about:</i></h3>
        <h2>${randomSide}</h2>
        <h2>${randomMainDish}</h2>
        <h2>${randomDessert}</h2>`
    }
}




function getRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}






