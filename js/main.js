/*
var nome = "Kellen Mohamed";
var idade = 34;
var idade2 = 4;
var frase = "Brasil is a beautiful place";
//alert("Meu primeiro JS");
alert("Welcome " + nome + " You are " + (idade+idade2));
alert(frase);
console.log(nome);
console.log(idade);
console.log(frase);
console.log(frase.replace,"Brasil","Japão");
alert(frase.replace("Brasil","Japão"));
*/

/* 
var lista = ["maçã","pêra","laranja"];
//Incluir itens na lista:
alert(lista);
lista.push("uva");
alert(lista);
console.log(lista.length);
lista.pop();
alert(lista);
console.log(lista.lenght);
console.log(lista.reverse());
console.log(lista[1]);
alert(lista[1]);
console.log(lista.toString());
console.log(lista.join(" / "))

var frutas = [{nome: "kiwi", cor: "verde"}, {nome: "manga", cor: "amarelo"}]
console.log(frutas);
alert("A fruta escolhida foi: "+ frutas[1].nome);
alert("Sua cor é: "+ frutas[1].cor);
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de Idade, pois sua idade é: " + idade);
}else {
    alert("menor de idade, pois sua idade é: " + idade);
}
*/

/*
var count = 0;

while (count <=5){
    console.log(count)
    //count = count + 1;
    count++
}
*/

/*
var count;

for(count=2;count<=4;count++){
    alert(count)
}
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getYear());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(setReplace("Vai Japão","Japão","Brasil"));
*/

/*
var validar=0;

function validaIdade(idade){
    if (idade>=18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);
*/
function clicou(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://google.com.br");
    window.location.href = "https://google.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){    
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
;}