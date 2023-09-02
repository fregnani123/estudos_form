const form = document.querySelector('#form');
const inputNome = document.querySelector('#nome');
const inputCidade = document.querySelector('#cidade');
const inputs = document.querySelectorAll('.input')


function verificarCamposPreenchidos() {
    for (const input of inputs) {
        if (input.value.trim() === '') {
            return false; // Pelo menos um campo está vazio
        }
    }
    return true; // Todos os campos estão preenchidos
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

    // Exibe os dados no console
    console.log('Dados do formulário:', formData);

    inputNome.value = '';
    inputCidade.value = '';

});
