const jorge = document.querySelector('input')
const pedro = document.querySelector('ol')
let luis = []

function adicionar(){

    luis.push(jorge.value)
    render()
    jorge.value = ''

}

function limpar() {

    luis = []
    pedro.innerHTML = null


}

function render() {

    pedro.innerHTML = null
    luis.forEach(function(tarefa){
    const li = document.createElement('li')
    li.innerText = tarefa
    pedro.appendChild(li)
})
}