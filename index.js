const escolhaOperacao = () => {

  let slctn = document.getElementById('slct');
  let slcd = slctn.options[slctn.selectedIndex].text;
  let operacao = document.getElementById('opr');

  let visibilityON = () => {
    operacao.style.visibility = "visible";
  }

    switch(slcd) {
      case "Selecione":
        operacao.style.visibility = "hidden";
        break;

      case "Adição":
        operacao.innerHTML = '<i class="fa-solid fa-plus fa-beat fa-2xl"></i>';
        visibilityON();
        break;

      case "Subtração":
      operacao.innerHTML = '<i class="fa-solid fa-minus fa-fade fa-2xl"></i>';
      visibilityON();
      break;

      case "Multiplicação":
      operacao.innerHTML = '<i class="fa-solid fa-x fa-shake fa-2xl"></i>';
      visibilityON();
      break;

      case "Divisão":
      operacao.innerHTML = '<i class="fa-solid fa-divide fa-beat fa-2xl"></i>';
      visibilityON();
      break;

        default:
        
    }
}


const calculo = () => {

  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let resultado = document.getElementById('rs');
  let slctn = document.getElementById('slct');
  let slcd = slctn.options[slctn.selectedIndex].text;

  let zerarInput = () => {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
  }

if (slcd === "Selecione"){
 
 Swal.fire('Escolha uma operação primeiro');
    
}else if(isNaN(num1) || isNaN(num2)){
  Swal.fire('Por favor, preencha todos os campos');

}else if (slcd === "Adição") {

    let soma = num1 + num2;
    resultado.innerHTML =  soma;
    zerarInput();
   
  } else if (slcd === "Subtração") {

    let subtracao = num1 - num2;
    resultado.innerHTML =  subtracao;
    zerarInput();


  } else if (slcd === "Multiplicação") {

    let multiplicacao = num1 * num2;
    resultado.innerHTML =  multiplicacao;
    zerarInput();
    

  } else if (slcd === "Divisão") {
    let divisao = num1 / num2;
    resultado.innerHTML = divisao;
    zerarInput();
  } 

}

