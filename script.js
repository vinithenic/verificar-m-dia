function calcularMedia(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
    }

    // Soma todos os números do array
    var soma = numeros.reduce(function (acumulador, numero) {
        return acumulador + numero;
    }, 0);

    // Calcula a média dividindo a soma pelo número de elementos no array
    var media = soma / numeros.length;

    return media;
}

// Exemplo de uso:
var numeros = [10, 20, 30, 40, 50];
var media = calcularMedia(numeros);
console.log("A média é:", media); // Saída: A média é: 30
