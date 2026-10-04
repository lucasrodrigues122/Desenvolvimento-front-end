
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const contaTitular = {
    nome: "Lucas",
    agencia: "99999",
    numeroConta: "12345-6"
};

let saldo = 1000.0;

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

const exibirMenu = () => {
    console.log("\n##==============================##");
    console.log("           CAIXA ELETRÔNICO        ");
    console.log("##==============================##");
    console.log("1 - Consultar dados da Conta");
    console.log("2 - Consultar Saldo");
    console.log("3 - Realizar Débito");
    console.log("4 - Realizar Crédito");
    console.log("0 - Sair");
    console.log("##==============================##");

    rl.question('Digite a opção desejada: ', (opcao) => {
        processarOpcao(opcao.trim());
    });
};

function processarOpcao(opcao) {
    if (opcao === '1') {
        
        const { nome, agencia, numeroConta } = contaTitular;

        console.log("\n--- DADOS DA CONTA ---");
        console.log(`Titular: ${nome}`);
        console.log(`Agência: ${agencia}`);
        console.log(`Número da Conta: ${numeroConta}`);
        exibirMenu();

    } else if (opcao === '2') {
        console.log(`\nSeu saldo atual é de ${formatarMoeda(saldo)}`);
        exibirMenu();

    } else if (opcao === '3') {
        rl.question('\nDigite o valor para debitar/sacar: R$ ', (resposta) => {
            
            const valor = parseFloat(resposta.replace(',', '.'));

            if (isNaN(valor) || valor <= 0) {
                console.log("Valor inválido para débito.");
            } else if (valor > saldo) {
                
                console.log(`Saldo insuficiente! Seu saldo atual é de ${formatarMoeda(saldo)}.`);
            } else {
                saldo -= valor;
                console.log(`Débito de ${formatarMoeda(valor)} realizado com sucesso!`);
                console.log(`Saldo atualizado: ${formatarMoeda(saldo)}`);
            }
            exibirMenu();
        });

    } else if (opcao === '4') {
        rl.question('\nDigite o valor para creditar/depositar: R$ ', (resposta) => {
            const valor = parseFloat(resposta.replace(',', '.'));

            if (isNaN(valor) || valor <= 0) {
                console.log("Valor inválido para crédito.");
            } else {
                saldo += valor;
                console.log(`Crédito de ${formatarMoeda(valor)} realizado com sucesso!`);
                console.log(`Saldo atualizado: ${formatarMoeda(saldo)}`);
            }
            exibirMenu();
        });

    } else if (opcao === '0') {
        console.log("\nObrigado por utilizar nosso sistema bancário. Até logo!");
        rl.close();

    } else {
        console.log("\nOpção inválida! Escolha um número de 0 a 4.");
        exibirMenu();
    }
}

exibirMenu();