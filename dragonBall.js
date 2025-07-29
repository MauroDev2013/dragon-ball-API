var meuInput = document.getElementById('anText');
var botao = document.querySelector('button');
var selectRaca = document.querySelector('select');
var resultado = document.getElementById('resultadoPersonagens');
var sumir = document.querySelectorAll('#dragon');
var imagem = document.getElementById('imagemAPI');
var nome = document.getElementById('nome');


function sumido() {
    sumir.forEach(element => element.style.display = 'none');
};

function mostrar() {
    sumir.forEach(element => element.style.display = 'block');
};

function limparBusca() {
    meuInput.value = '';
    selectRaca.value = '';
    imagemP.src = '';
    nomeP.textContent = '';
    resultado.innerHTML = '';
    resultado.style.display = 'none'
    imagemP.style.opacity = 0;
    nomeP.style.opacity = 0;
}

botao.addEventListener('click', () => {
    sumido()
    setTimeout(async() => {
        let valor = meuInput.value.trim();
        let raca = selectRaca.value.trim();

        let URL = 'https://dragonball-api.com/api/characters?';
        if (valor) URL += `name=${encodeURIComponent(valor)}&`;
        if (raca) URL += `race=${encodeURIComponent(raca)}`;

        let resposta = await fetch(URL);
        let personagens = await resposta.json();

        resultado.style.display = 'flex';
        resultado.innerHTML = '';

        personagens.forEach(p => {
            var nomeP = document.createElement('h3');
            nomeP.textContent = p.name;
            nomeP.style.color = '#fd9103'
            nomeP.style.fontFamily = `'dragonBall', 'Times New Roman'`;


            var imagemP = document.createElement('img')
            imagemP.src = p.image;
            imagemP.alt = `imagem de ${p.name}`
            imagemP.style.width = '300px';
            imagemP.style.height = '400px';
            imagemP.style.margin = '10px'

            resultado.appendChild(nomeP);
            resultado.appendChild(imagemP);

        })
        setTimeout(() => {
            mostrar();
            resultado.style.display = 'none';
            resultado.innerHTML = '';
            limparBusca();
        }, 5000);
    }, 1000);
});
