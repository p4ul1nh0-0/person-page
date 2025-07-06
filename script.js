const botao = document.querySelector("#mensagem-btn");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Bem-vindo à minha página! Que bom ter você aqui. 😊";
});