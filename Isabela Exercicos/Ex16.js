// Função com parâmetros padrão
function saudar(nome = "Visitante", idade = 18) {
    return `Olá ${nome}, você tem ${idade} anos`;
}

// Arrow function com parâmetro padrão
const calcularDesconto = (preco, desconto = 10) => {
    return preco - (preco * desconto / 100);
};

// Teste as funções
console.log(saudar());
console.log(saudar("Ana"));
console.log(saudar("Carlos", 30));
console.log("Preço com desconto:", calcularDesconto(100));