(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('lata_tinta')) ?? [];
}

function setLocalStorage(lata_tinta) {
  localStorage.setItem('lata_tinta', JSON.stringify(lata_tinta));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const lata_tinta = getLocalStorage();
  let index = 0;
  for (cliente of lata_tinta) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${cliente.cor}</td>
        <td>${cliente.marca}</td>
        <td>${cliente.etiqueta}</td>
        <td>${cliente.preco}</td>
        <td>${cliente.tipo}</td>
        <td>${cliente.tamanho}</td>
        
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const cliente = {
    cor: document.getElementById('cor').value,
    marca: document.getElementById('marca').value,
    etiqueta: document.getElementById('etiqueta').value,
    preco: document.getElementById('preco').value,
    tipo: document.getElementById('tipo').value,
    tamanho: document.getElementById('tamanho').value,


  }
  const lata_tinta = getLocalStorage();
  lata_tinta.push(cliente);
  setLocalStorage(lata_tinta);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const lata_tinta = getLocalStorage();
  lata_tinta.splice(index, 1);
  setLocalStorage(lata_tinta);
  atualizarTabela();
}

function validaretiqueta() { // Adaptação da função validar (10 pontos)
  const lata_tinta = getLocalStorage();
  for (cliente of lata_tinta) {
    if (etiqueta.value == cliente.etiqueta) {
      etiqueta.setCustomValidity("Código digitado ja existente no sistema!");
      feedbacketiqueta.innerText = "Código digitado ja existente no sistema!";
      return false;
    } else {
      etiqueta.setCustomValidity("");
      feedbacketiqueta.innerText = "Informe o codigo impresso na lata corretamente.";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const etiqueta = document.getElementById("etiqueta");
const feedbacketiqueta = document.getElementById("feedbacketiqueta");
etiqueta.addEventListener('input', validaretiqueta);