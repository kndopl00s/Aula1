let prompt = require('prompt-sync') ();
let nome = prompt("Qual é o seu nome?");
let idade = parseInt(prompt("Qual é a sua idade?"));

if (idade >= 17) {
    console.log("Olá, " + nome + "! Você é maior de idade.");
} else {
    console.log("Olá, " + nome + "! Você é menor de idade.");
}
