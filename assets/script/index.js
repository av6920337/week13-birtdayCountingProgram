const inputDate = document.querySelector('.inputDate');
// console.log(inputDate);
const button = document.getElementById('button');
const articleSpan = document.querySelector('.articleSpan');
const spanErrorText = document.querySelector('.spanTextError');
const spanText = document.querySelector('.spanText');

button.addEventListener('click', function(){
    if(inputDate.value === ''){
        spanErrorText.style.display = 'block';
    }
    else{
        spanErrorText.style.display = 'none';
        const currentDate = new Date();
    const birthday = new Date(inputDate.value);
    const timeDiff = Math.abs(currentDate - birthday);
    const amountOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    let daysText;
    if(amountOfDays % 10 == 1 && amountOfDays !== 11){
        daysText='день';
    }
    else if([2 ,3 ,4].includes(amountOfDays % 10) && ![12 ,13 ,14].includes(amountOfDays)){
        daysText='дня';
    }
    else{
        daysText='дней';
        }
        spanText.style.display='block';
        spanText.textContent=`До вашего дня рождения осталось ${amountOfDays} ${daysText}.`;
    }
    }
)