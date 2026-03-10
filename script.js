let number = Math.floor(Math.random()*10)+1;

function checkGuess(){

let guess = document.getElementById("guess").value;

if(guess == number){
document.getElementById("result").innerHTML = "🎉 Benar!";
}
else{
document.getElementById("result").innerHTML = "❌ Salah, coba lagi!";
}

}
