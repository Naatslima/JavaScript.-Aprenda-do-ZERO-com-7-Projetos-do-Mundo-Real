const colors = ['red', 'blue', 'yellow', 'gray', 'pink', 'purple']
const btn = document.getElementById('btn')
const color = document.querySelector('.color') //retorna o primeiro item que foi passado pra ele


//evento de ação, cliclar no botão
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor] // aplicando a cor ao background

    color.textContent = colors[randomColor] // aqui junta a função do botao de alterar a cor com a troca do nome em sequencia
})

//gerar numeros randomicos em sequencia com as colors
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}