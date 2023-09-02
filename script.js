const form = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputCidade = document.querySelector('#cidade');
const inputs = document.querySelectorAll('.input')
const body = document.body;
const h1 = document.createElement('h1');


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

    const formData = {
        nome: inputNome.value,
        cidade: inputCidade.value
    };
    
    const formPush = []
    
    formPush.push(formData)
   
    formPush.map((dados) => {
        h1.innerText = dados.cidade;
        body.appendChild(h1)
    })

    

    console.log('Dados do formulário:', JsonData);

    inputNome.value = '';
    inputCidade.value = '';

});
