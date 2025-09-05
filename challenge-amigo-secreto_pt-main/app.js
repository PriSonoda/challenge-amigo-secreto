let amigos = []; // começa a lista

function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value; // pega o nome digitado

  if (nome == '') { //verifica se o campo está vazio
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  atualizarLista();
}
function atualizarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpa a lista antes de adicionar os novos nomes

  let conteudo = '';

  for (let i = 0; i < amigos.length; i++) {
    conteudo += '<li>' + amigos[i] + '</li>';
  }

  lista.innerHTML = conteudo; // Insere os nomes como itens <li>
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia.');
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indiceSorteado];

  document.getElementById('resultado').innerHTML = '<li>' + nomeSorteado + '</li>';

  alert('Amigo sorteado: ' + nomeSorteado);
}//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
