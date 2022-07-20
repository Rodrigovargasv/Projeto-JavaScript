
// Captura eventos de submit do formulario
const forms = window.document.querySelector('.form');


//recebe o evento de submit ou seja do botao calcular
forms.addEventListener('submit', function recebeEventoForm(evento) {     
    evento.preventDefault();

    // receber os dados atravez do forms
    const inputPeso = forms.querySelector('#peso');
    const inputAltura = forms.querySelector('#altura');
    
    // converter os input para number e armazena em constantes.
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    // verifica se os campo estão em branco ou se são invalidos.
    if(!peso && !altura){
        setResultado('Peso e altura invalido', false)
        return;
    }
    else if(!peso){
        setResultado('Peso invalido', false);
        return;
    }
    else if (!altura){
        setResultado('Altura invalido', false);
        return;
    }

    // a constante recebe o resultado do calculo indice de massa coportal da função getImc
    const imc = getImc(peso, altura);

    // a constante recebe o resultado da função getNivelImc(icm) onde verifica qual nivel de obesidade ou desnutrição
    const nivelImc = getNivelImc(imc);

    // constante recebe o texto a ser envidado para o paragrafo criado dentro da div id:paragrafo-resultado
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    // envia o texto para o paragrafo criado da div com id: paragrafo-resultado id: bad
    setResultado(msg, true);


    
}); 
//// niveis de obsidade ou desnutrição
function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc < 18.5){
        return nivel[0];
    }
    if(imc >= 18.5 && imc <= 24.9){
        return nivel[1];
    }
    if(imc >= 25 && imc <= 29.9) {
        return nivel[2];
    }
    if(imc >= 30 && imc <= 34.9){
        return nivel[3];
    }
    if(imc >= 35 && imc <= 39.9){
        return nivel[4];
    }
    if(imc >= 40){
        return nivel[5];
    }
}

//calcula o indice de massa corporal
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função cria um paragrafo
function criaParagrafo(){
    const paragrafo = window.document.createElement('paragrafo');
    return paragrafo;
}


// setendo a div com  id #resultado  e passando uma messagem ser exibida nela
function setResultado (msg, isValid){
    const resultado = window.document.querySelector('#resultado');
    resultado.innerHTML = '';

    // criando um paragrafo
    const paragrafo = criaParagrafo();

    // adciona um lista de classe na classe deste paragrafo se caso não existe
    if(isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    }else{
        paragrafo.classList.add('bad');
    }

    // inserindo um paragrafo com um texto que você quer na DIV com ID #Resultado
    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);
}





