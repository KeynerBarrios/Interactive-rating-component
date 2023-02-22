let numberContainer = document.querySelector('.rationg-state__number-container');
let rateNumber = document.querySelector('.thakyou-state__result--new-number');
let submitBtn = document.querySelector('.rationg-state__button');
let ratingState = document.querySelector('.rationg-state');
let thakyouState = document.querySelector('.thakyou-state');


numberContainer.addEventListener('click', event =>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected; 
    if(numberSelected > 0 || numberSelected<= 5){
        submitBtn.addEventListener('click', ()=>{
            rateNumber = numberContainer;
            ratingState.style.display = 'none';
            thakyouState.style.display = 'flex';
        });
    }
})

