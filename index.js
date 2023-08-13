
const escolhaOperacao = () => {

  let slct = document.getElementById('slct');
  let operacao = document.getElementById('opr');

  let visibilityON = () => {
    operacao.style.visibility = "visible";
  }


  if (slct.options[slct.selectedIndex].text === "selecione"){
    
    operacao.style.visibility = "hidden";

  } else if (slct.options[slct.selectedIndex].text === "adição") {
    
    operacao.innerHTML = "+";
    visibilityON();

  } else if (slct.options[slct.selectedIndex].text === "subtração") {

    operacao.innerHTML = "-";
    visibilityON();

  } else if (slct.options[slct.selectedIndex].text === "multiplicação") {

    operacao.innerHTML = "x";
    visibilityON();
   

  } else if (slct.options[slct.selectedIndex].text === "divisão") {

    operacao.innerHTML = "÷";
    visibilityON();
   
  } 
}


const calculo = () => {

  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let resultado = document.getElementById('rs');

  let zerarInput = () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
  }

if (slct.options[slct.selectedIndex].text === "selecione"){

 alert('escolha uma operação primeiro')
    
}else if(isNaN(num1) || isNaN(num2)){
  alert('por favor preencha todos os campos');

}else if (slct.options[slct.selectedIndex].text === "adição") {

    let soma = num1 + num2;
    resultado.innerHTML =  soma;
    zerarInput();
   
  } else if (slct.options[slct.selectedIndex].text === "subtração") {

    let subtracao = num1 - num2;
    resultado.innerHTML =  subtracao;
    zerarInput();


  } else if (slct.options[slct.selectedIndex].text === "multiplicação") {

    let multiplicacao = num1 * num2;
    resultado.innerHTML =  multiplicacao;
    zerarInput();
    

  } else if (slct.options[slct.selectedIndex].text === "divisão") {
    let divisao = num1 / num2;
    resultado.innerHTML = divisao;
    zerarInput();


  } 

}



