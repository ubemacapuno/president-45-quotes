//Personalized Quotes from President 45

document.querySelector('button').addEventListener('click', generateQuote)
document.querySelector('button').addEventListener('click', randomImage)

function generateQuote(){
    quoteSection.classList.add('hidden');
    quoteSection.classList.toggle('hidden');
    imgSection.classList.add('hidden');
    imgSection.classList.toggle('hidden');

    let inputName = document.getElementById("name").value;
    if(inputName == "Enter Name Here" || inputName === ''){
        inputName = 'Donny T'
    }
    console.log(inputName);
    const url = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${inputName}`
    fetch(url)
    .then(res => res.json())//parse response as JSON
    .then(data => {
        // quoteSection.classList.add('hidden');
        // quoteSection.classList.toggle('hidden');
        console.log(data);
        document.querySelector('h3').innerText = data.message;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
}

function randomImage(){
    let random = Math.random();
    if (random < 0.33){
        trumpHand.classList.add('hidden2');//add the hidden css class! 
        trumpHands.classList.add('hidden2');//add the hidden css class! 
        trumpTweet.classList.add('hidden2');//add the hidden css class! 
        trumpHand.classList.toggle('hidden2');//we will toggle hidden!
        return 'trumpHand';
    }else if (random < 0.66){
        trumpHand.classList.add('hidden2');//add the hidden css class! 
        trumpHands.classList.add('hidden2');//add the hidden css class! 
        trumpTweet.classList.add('hidden2');//add the hidden css class! 
        trumpHands.classList.toggle('hidden2');//we will toggle hidden!
        return 'trumpHands'
    }else{
        trumpHand.classList.add('hidden2');//add the hidden css class! 
        trumpHands.classList.add('hidden2');//add the hidden css class! 
        trumpTweet.classList.add('hidden2');//add the hidden css class! 
        trumpTweet.classList.toggle('hidden2')//we will toggle hidden!
        return 'trumpTweet'
    }
}




