let step = 0;

const stages = [

{
question: "Dove nasce l'impulso nervoso?",
options: [
"Cervello",
"Muscolo",
"Sarcomero"
],
correct: 0,
explanation: "L'impulso nervoso nasce nel cervello nel sistema nervoso centrale."
},

{
question: "Dove viaggia l'impulso dopo il cervello?",
options: [
"Neurone",
"Sarcomero",
"Mitocondrio"
],
correct: 0,
explanation: "L'impulso viaggia lungo il neurone tramite il potenziale d'azione."
},

{
question: "Come passa da un neurone all'altro?",
options: [
"Sinapsi",
"Sangue",
"DNA"
],
correct: 0,
explanation: "Il segnale passa tramite neurotrasmettitori nella sinapsi."
},

{
question: "Quale struttura trasporta il segnale verso il corpo?",
options: [
"Midollo spinale",
"Cuore",
"Polmoni"
],
correct: 0,
explanation: "Il midollo spinale porta i segnali dal cervello ai nervi periferici."
},

{
question: "Quale neurone arriva al muscolo?",
options: [
"Motoneurone",
"Neurone sensoriale",
"Dendrite"
],
correct: 0,
explanation: "Il motoneurone trasmette il segnale ai muscoli."
},

{
question: "Dove il neurone comunica con il muscolo?",
options: [
"Giunzione neuromuscolare",
"Nucleo",
"Citoplasma"
],
correct: 0,
explanation: "Qui viene rilasciata acetilcolina per attivare il muscolo."
},

{
question: "Qual è l'unità contrattile del muscolo?",
options: [
"Sarcomero",
"Assone",
"Sinapsi"
],
correct: 0,
explanation: "Il sarcomero si accorcia grazie all'interazione actina-miosina."
}

];

function startGame(){
step = 0;
showStage();
}

function showStage(){

if(step >= stages.length){
document.getElementById("game").innerHTML =
"<h2>🎉 Complimenti!</h2><p>L'impulso è arrivato al muscolo e il sarcomero si contrae!</p>";
return;
}

let s = stages[step];

let html = "<h2>"+s.question+"</h2>";

s.options.forEach((opt,i)=>{
html += ⁠ <button onclick="choose(${i})">${opt}</button> ⁠;
});

document.getElementById("game").innerHTML = html;

}

function choose(i){

let s = stages[step];

if(i === s.correct){
alert("Corretto! " + s.explanation);
step++;
showStage();
}
else{
alert("Non corretto! Riprova.");
}

}
