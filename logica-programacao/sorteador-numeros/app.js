function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

   let sorteados = [];
   let numero;

   for (let i = 0; i < quantidade; i++) { 
    numero = obterNumeroAleatorio(de, ate);
    sorteados.push(numero);
    while(sorteados.includes(numeros));
   }

    
   alert(sorteados);
   } 
   
   let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label classe = "texto__paragrafo>"numeros sorteado: ${sorteados};`
    alterarStatusBotao();
   

   function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function alterarStatusBotao() {
    let botao = document.getElementById('bnr-reiniciar');
    if (botao.classList.contains ('Container__botao-desabilitado')){
        botao.classList.remove('Container__botao-desabilitado');
        botao.classList.add('Container__botao');
     } else {
        botao.classList.remove('Container__botao');
        botao.classList.add('Container__botao-desabilitado');
    }  
    }
    
    function reiniciar(){
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = `<label classe = "texto__paragrafo>"numeros sorteado: ${sorteados};`
    alterarStatusBotao();
    }
        

