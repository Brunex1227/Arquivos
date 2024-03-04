let idade = 15;
let paisPresentes = false;
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

if(!comprouBilhete){
    console.log("Não comprou o bilhete")
} else {
    if(idade>= 18){
       console.log("É maior de idade, pode viaja")
    } else {
       console.log("É menor de idade")
    }
}