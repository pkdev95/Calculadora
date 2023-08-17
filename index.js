


const escolhaOperacao = () => {

  let slct = document.getElementById('slct');
  let operacao = document.getElementById('opr');

  let visibilityON = () => {
    operacao.style.visibility = "visible";
  }


  if (slct.options[slct.selectedIndex].text === "Selecione"){
    
    operacao.style.visibility = "hidden";

  } else if (slct.options[slct.selectedIndex].text === "Adição") {
    
    operacao.innerHTML = '<i class="fa-solid fa-plus fa-beat fa-2xl"></i>';
    visibilityON();

  } else if (slct.options[slct.selectedIndex].text === "Subtração") {

    operacao.innerHTML =  '<i class="fa-solid fa-minus fa-fade fa-2xl"></i>';
    visibilityON();

  } else if (slct.options[slct.selectedIndex].text === "Multiplicação") {

    operacao.innerHTML = '<i class="fa-solid fa-x fa-shake fa-2xl"></i>';
    visibilityON();;
   

  } else if (slct.options[slct.selectedIndex].text === "Divisão") {

    operacao.innerHTML = '<i class="fa-solid fa-divide fa-beat fa-2xl"></i>';
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

if (slct.options[slct.selectedIndex].text === "Selecione"){
 
 Swal.fire('Escolha uma operação primeiro');
    
}else if(isNaN(num1) || isNaN(num2)){
  Swal.fire('Por favor, preencha todos os campos');

}else if (slct.options[slct.selectedIndex].text === "Adição") {

    let soma = num1 + num2;
    resultado.innerHTML =  soma;
    zerarInput();
   
  } else if (slct.options[slct.selectedIndex].text === "Subtração") {

    let subtracao = num1 - num2;
    resultado.innerHTML =  subtracao;
    zerarInput();


  } else if (slct.options[slct.selectedIndex].text === "Multiplicação") {

    let multiplicacao = num1 * num2;
    resultado.innerHTML =  multiplicacao;
    zerarInput();
    

  } else if (slct.options[slct.selectedIndex].text === "Divisão") {
    let divisao = num1 / num2;
    resultado.innerHTML = divisao;
    zerarInput();


  } 

}



