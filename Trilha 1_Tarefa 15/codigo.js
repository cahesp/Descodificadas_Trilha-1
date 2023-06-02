var paginaCarregada = "Página carregada com sucesso!";

alert(paginaCarregada);

var num1 = prompt ("Digite um número");
var num2 = prompt ("Digite outro número");

var soma = parseInt(num1) + parseInt(num2);
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;

if (num1 == num2){
    console.log ("Os números digitados são iguais!")
} else {
    console.log ("Os números digitados são diferentes!")
}


console.log ("A soma dos números digitados é: " + soma);
console.log ("A diferença dos números digitados é: " + subtracao);
console.log ("O produto dos números digitados é: " + multiplicacao);
console.log ("A divisão dos números digitados é: " + divisao);

