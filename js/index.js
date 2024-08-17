function calcular() {
    var totalPessoas = document.getElementById('totalPessoas').value
    var totalCriancas = document.getElementById('totalCriancas').value
    var totalCerveja = document.getElementById('totalCerveja').value

    // Limpa o conteúdo anterior do container
    document.querySelector('.container').innerHTML = '';

    calculaPessoas(totalPessoas, totalCriancas)
    calculaRefrigerante(totalPessoas)
    calculaCerveja(totalCerveja)
}

function calculaPessoas(totalPessoas, totalCriancas) {
    var container = document.querySelector('.container');
    var calculaCarne = totalPessoas * 300

    if(calculaCarne >= 1000) {
        var paraKG = calculaCarne / 1000
        container.innerHTML += `<p>Para ${totalPessoas} pessoas será: ${paraKG}kg de carne.</p>`;
    } else {
        container.innerHTML += `<p>Para ${totalPessoas} pessoas será: ${calculaCarne}g de carne.</p>`;
    }

    if(totalCriancas >= 1) {
        var calculaCrianca = totalCriancas * 150

        if(calculaCrianca >= 1000) {
            var paraKG = calculaCrianca / 1000
            container.innerHTML += `<p>Para ${totalCriancas} crianças será: ${paraKG}kg de carne.</p>`;
        } else {
            container.innerHTML += `<p>Para ${totalCriancas} crianças será: ${calculaCrianca}g de carne.</p>`;
        }

    } else {
        container.innerHTML += '<p>Não há crianças</p>';
    }
    
}

function calculaRefrigerante(totalPessoas) {
    var container = document.querySelector('.container');
    var calculaRefrigerante = totalPessoas * 600
    var paraLitro = calculaRefrigerante / 1000

    if(calculaRefrigerante >= 1000) {
        container.innerHTML += `<p>Para ${totalPessoas} pessoas será: ${paraLitro}L de refrigerante.</p>`;
    } else {
        container.innerHTML += `<p>Para ${totalPessoas} pessoas será: ${calculaRefrigerante}ml de refrigerante.</p>`;
    }
}

function calculaCerveja(totalCerveja) {
    var container = document.querySelector('.container');
    var calculaCerveja = totalCerveja * 1000
    var paraLitro = calculaCerveja / 1000

    if(totalCerveja >= 1) {
        if(calculaCerveja >= 1000) {
            container.innerHTML += `<p>Para ${totalCerveja} pessoas que bebem cerveja será: ${paraLitro}L de cerveja.</p>`;
        } else {
            container.innerHTML += `<p>Para ${totalCerveja} pessoas que bebem cerveja será: ${calculaCerveja}ml de cerveja.</p>`;
        }
    } else {
        container.innerHTML += '<p>Não há pessoas que bebem cerveja</p>';
    }
}
