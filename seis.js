// Função que conta os cliques
function contarCliques() {
  // Obtém o elemento do contador
  var contadorElemento = document.getElementById("contador");
  
  // Inicializa o contador se ainda não estiver definido
  if (!localStorage.getItem("contador")) {
    localStorage.setItem("contador", 0);
  }
  
  // Obtém o valor atual do contador e incrementa
  var contadorAtual = parseInt(localStorage.getItem("contador"));
  contadorAtual++;
  
  // Atualiza o valor do contador na localStorage e exibe no elemento HTML
  localStorage.setItem("contador", contadorAtual);
  contadorElemento.innerHTML = "Número de Cliques: " + contadorAtual;
}

// Adiciona um evento de clique ao botão de contagem
document.getElementById("botaoContador").addEventListener("click", contarCliques);
