function calcular()
{
var nome = prompt("Digite seu nome: ")

alert(nome + ", bem-vindo! Digite sua nota de cada bimestre.")

var bim1 = parseFloat(prompt("Digite a nota do 1º Bimestre: ", "Utilize ponto e não vírgula!"))
var bim2 = parseFloat(prompt("Digite a nota do 2º Bimestre: ", "Utilize ponto e não vírgula!"))
var bim3 = parseFloat(prompt("Digite a nota do 3º Bimestre: ", "Utilize ponto e não vírgula!"))
var bim4 = parseFloat(prompt("Digite a nota do 4º Bimestre: ", "Utilize ponto e não vírgula!"))

var final = (bim1 + bim2 + bim3 + bim4)/4
var arredondamento = final.toFixed(1)

if(arredondamento>5.9)
alert("Parabéns " + nome + ", sua nota final é " + arredondamento + ", você foi aprovado!")
else
alert("Pois é " + nome + ", sai da netflix e vai estudar! Sua nota final é " + arredondamento + " :(")

console.log("Sua nota final é " + arredondamento)
}

// • Comentários

// Revisão ☻
// variáveis, strings, console.log, toFixed, operações matemáticas básicas, concatenação