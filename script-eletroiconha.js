const ITEMS = [
  'Vale-presente','Cafeteira','Processador','Batedeira','Panela de pressão',
  'Panela de pressão elétrica','Faqueiro','Kit de talheres','Torradeira','Grill',
  'Kit de servir','Assadeira','Frigideira 28 cm / 38 cm','Panela pipoqueira',
  'Jogo de panelas','Jogos de talheres para servir','Frigideira Tramontina',
  'Aspirador de pó','Micro-ondas','Ventilador','TV','Geladeira',
  'Bebedouro / Purificador','Ar-condicionado','Kit de churrasco de servir','Kit de churrasco talheres','Tapete de sala'
];

function render(){
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="category">
      <div class="category-head"><span class="category-title">Eletroiconha</span></div>
      <div class="list">
        ${ITEMS.map(name=>`<div class="item"><span class="leaf"></span>${name}</div>`).join('')}
      </div>
    </div>
  `;
}
render();
