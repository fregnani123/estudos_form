const form = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputCidade = document.querySelector('#cidade');
const inputs = document.querySelectorAll('.input')
const body = document.body;
const ul = document.createElement('ul')



function verificarCamposPreenchidos() {
    for (const input of inputs) {
        if (input.value.trim() === '') {
            return false; 
        }
    }
    return true; 
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    if (!verificarCamposPreenchidos()) {
        console.log('Todos os campos devem ser preenchidos')
    } else {
        // form.submit()
        console.log('form enviado')
    }

    function criaLI(texto) {
        const li = document.createElement('li');
        li.innerHTML = texto;
        return li;
    }

    function criaID(){
     return Math.random()
    }

    const formData = {
        id: criaID() ,
        nome: inputNome.value,
        cidade: inputCidade.value
    };
    
    const formPush = []
    
    formPush.push(formData)
   
    formPush.map((dados) => {
        const li = criaLI(dados.nome);
        ul.appendChild(li);
    })
    body.appendChild(ul);

    console.log(formPush)

    console.log('Dados do formulário:', JsonData);

    inputNome.value = '';
    inputCidade.value = '';

});
