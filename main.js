var letsCookBtn = document.querySelector('#lets-cook-button')
var options = document.getElementsByName('food')
var rightBox = document.getElementById('right-box')
var result = document.querySelector('#result')
var selectedFood;
var clearBtn = document.querySelector('#clear-button')
var addRecipeBtn = document.querySelector('#add-recipe-button')
var addNewBtn = document.querySelector('#add-new-button')
var footer = document.querySelector('footer')
var dropDown = document.getElementById('drop-down')

letsCookBtn.addEventListener('click', function(){
    selected();
    cook();
})

clearBtn.addEventListener('click', clear)
addRecipeBtn.addEventListener('click', showFooter)
addNewBtn.addEventListener('click', addNew)

function selected(){ 
    for (var i = 0; i < options.length; i++){
        if (options[i].checked === true)
        selectedFood = options[i].value
    }
    if (selectedFood == undefined){
        alert('Please chooose a food before cooking')
    }
}


function cook(){
    if (selectedFood !== 'entireMeal'){ 
        var randomFood = foodList[selectedFood][getRandomIndex(foodList[selectedFood])]
        result.innerHTML = `
            <h3><i> How about:</i></h3>
            <h1>${randomFood}!</h1>`
        clearBtn.classList.remove('hidden')
    } else {
        var randomSide = foodList.side[getRandomIndex(foodList.side)]
        var randomMainDish = foodList.mainDish[getRandomIndex(foodList.mainDish)]
        var randomDessert = foodList.dessert[getRandomIndex(foodList.dessert)]
        result.innerHTML = `
            <h3><i> How about:</i></h3>
            <h2>${randomSide}</h2>
            <h2>${randomMainDish}</h2>
            <h2>${randomDessert}</h2>`
        clearBtn.classList.remove('hidden')
    }
}


function clear(){
    result.innerHTML = ""
    result.innerHTML = '<img src="assets/cookpot.svg">'
    clearBtn.classList.add('hidden')
}


function showFooter(){
    footer.classList.remove('hidden')
}


function addNew() {
    footer.classList.remove('hidden')
    clearBtn.classList.remove('hidden')
    var userSelect = dropDown.options[dropDown.selectedIndex].value
    var userRecipe = document.querySelector('#user-recipe').value
    foodList[userSelect].push(userRecipe)
    result.innerHTML = `
        <h3><i>You just added:</i></h3>
        <h1>${userRecipe}!</h1>`
}




function getRandomIndex(array){
    return Math.floor(Math.random() * array.length)
}






