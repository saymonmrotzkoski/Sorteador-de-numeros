function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert('O número inicial deve ser menor que o número final!');
        return;
    }

    if ( ate < quantidade ) {
        alert('Não existem números suficientes para serem selecionados!');
        return;
    }

    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidade; i++) {
        numero = obterNUmeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNUmeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">numeros sorteados : ${sorteados}`;
    alterarStatusDoBotao();
}

function obterNUmeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotao();
}