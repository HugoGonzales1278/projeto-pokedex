
// ============ DATA ============
const POKEMON_DATA = [
    { id:1, name:"Bulbasaur", types:["grass","poison"], desc:"Existe uma semente estranha nas costas deste Pokémon. Ela nasce com a semente e a carrega desde o início.", height:0.7, weight:6.9, ability:"Overgrow", hp:45, atk:49, def:49, spatk:65, spdef:65, spd:45, gen:1 },
    { id:2, name:"Ivysaur", types:["grass","poison"], desc:"Quando o bulbo nas costas cresce grande, ele não consegue ficar de pé nas patas traseiras.", height:1.0, weight:13.0, ability:"Overgrow", hp:60, atk:62, def:63, spatk:80, spdef:80, spd:60, gen:1 },
    { id:3, name:"Venusaur", types:["grass","poison"], desc:"A flor em suas costas cheira a mel. O aroma atrai outros Pokémon.", height:2.0, weight:100.0, ability:"Overgrow", hp:80, atk:82, def:83, spatk:100, spdef:100, spd:80, gen:1 },
    { id:4, name:"Charmander", types:["fire"], desc:"A chama na ponta da cauda indica a vida deste Pokémon. Se estiver saudável, a chama brilha intensamente.", height:0.6, weight:8.5, ability:"Blaze", hp:39, atk:52, def:43, spatk:60, spdef:50, spd:65, gen:1 },
    { id:5, name:"Charmeleon", types:["fire"], desc:"Quando enfrenta inimigos, ficaferoz. Se ficar com raiva, a cauda brilha vermelho brilhante.", height:1.1, weight:19.0, ability:"Blaze", hp:58, atk:64, def:58, spatk:80, spdef:65, spd:80, gen:1 },
    { id:6, name:"Charizard", types:["fire","flying"], desc:"Cospe fogo tão quente que derrete pedras. Causa incêndios florestais sem querer.", height:1.7, weight:90.5, ability:"Blaze", hp:78, atk:84, def:78, spatk:109, spdef:85, spd:100, gen:1 },
    { id:7, name:"Squirtle", types:["water"], desc:"Quando recua para dentro do casco, jatos de água de alta velocidade são disparados pelas juntas.", height:0.5, weight:9.0, ability:"Torrent", hp:44, atk:48, def:65, spatk:50, spdef:64, spd:43, gen:1 },
    { id:8, name:"Wartortle", types:["water"], desc:"Sua cauda é coberta com pelagem espessa. Diz-se que a cauda escurece com a idade.", height:1.0, weight:22.5, ability:"Torrent", hp:59, atk:63, def:80, spatk:65, spdef:80, spd:58, gen:1 },
    { id:9, name:"Blastoise", types:["water"], desc:"Os canhões d'água em seu casco podem disparar balas d'água capaz de atravessar aço.", height:1.6, weight:85.5, ability:"Torrent", hp:79, atk:83, def:100, spatk:85, spdef:105, spd:78, gen:1 },
    { id:10, name:"Caterpie", types:["bug"], desc:"Sua boca pode roer através de qualquer tipo de folha. Come folhas maiores que seu corpo.", height:0.3, weight:2.9, ability:"Shield Dust", hp:45, atk:30, def:35, spatk:20, spdef:20, spd:45, gen:1 },
    { id:11, name:"Metapod", types:["bug"], desc:"Até evoluir, fica imóvel. A casca exterior é mais dura que uma rocha.", height:0.7, weight:9.9, ability:"Shed Skin", hp:50, atk:20, def:55, spatk:25, spdef:25, spd:30, gen:1 },
    { id:12, name:"Butterfree", types:["bug","flying"], desc:"Em busca de mel, voa por campos de flores coletando pólen. É muito habilidoso nisso.", height:1.1, weight:32.0, ability:"Compound Eyes", hp:60, atk:45, def:50, spatk:90, spdef:80, spd:70, gen:1 },
    { id:13, name:"Weedle", types:["bug","poison"], desc:"Frequentemente encontrado em florestas comendo folhas. Tem um espinho venenoso de 2cm na cabeça.", height:0.3, weight:3.2, ability:"Shield Dust", hp:40, atk:35, def:30, spatk:20, spdef:20, spd:50, gen:1 },
    { id:14, name:"Kakuna", types:["bug","poison"], desc:"Quase incapaz de se mover, fica em lugares seguros esperando evoluir.", height:0.6, weight:10.0, ability:"Shed Skin", hp:45, atk:25, def:50, spatk:25, spdef:25, spd:35, gen:1 },
    { id:15, name:"Beedrill", types:["bug","poison"], desc:"Altamente agressivo, pode picar repetidamente com os ferrões venenosos em suas patas dianteiras.", height:1.0, weight:29.5, ability:"Swarm", hp:65, atk:90, def:40, spatk:45, spdef:80, spd:75, gen:1 },
    { id:16, name:"Pidgey", types:["normal","flying"], desc:"Muito dócil e pacífico. Prefere evitar conflitos. Cava o chão com as garras procurando comida.", height:0.3, weight:1.8, ability:"Keen Eye", hp:40, atk:45, def:40, spatk:35, spdef:35, spd:56, gen:1 },
    { id:17, name:"Pidgeotto", types:["normal","flying"], desc:"Reivindica um vasto território. Nunca deixa entrar estranhos. Pega presas com garras afiadas.", height:1.1, weight:30.0, ability:"Keen Eye", hp:63, atk:60, def:55, spatk:50, spdef:50, spd:71, gen:1 },
    { id:18, name:"Pidgeot", types:["normal","flying"], desc:"Belas plumas douradas e vermelhas adornam sua cabeça. Pode bater asas fortes o suficiente para criar ventos.", height:1.5, weight:39.5, ability:"Keen Eye", hp:83, atk:80, def:75, spatk:70, spdef:70, spd:101, gen:1 },
    { id:19, name:"Rattata", types:["normal"], desc:"Muito comum. Pode ser encontrado em campos e cidades. Come qualquer coisa sem ser seletivo.", height:0.3, weight:3.5, ability:"Run Away", hp:30, atk:56, def:35, spatk:25, spdef:35, spd:72, gen:1 },
    { id:20, name:"Raticate", types:["normal"], desc:"Usa os dentes afiados para cortar madeira dura. As marcas dos dentes na madeira são suas digitais.", height:0.7, weight:18.5, ability:"Run Away", hp:55, atk:81, def:60, spatk:50, spdef:70, spd:97, gen:1 },
    { id:25, name:"Pikachu", types:["electric"], desc:"Quando vários Pikachu se juntam, sua eletricidade pode causar tempestades. Armazena estática no bochechas.", height:0.4, weight:6.0, ability:"Static", hp:35, atk:55, def:40, spatk:50, spdef:50, spd:90, gen:1 },
    { id:26, name:"Raichu", types:["electric"], desc:"Descarrega 100.000 volts de eletricidade. Pode ser tão poderoso que um ataque deixa inimigos inconscientes.", height:0.8, weight:30.0, ability:"Static", hp:60, atk:90, def:55, spatk:90, spdef:80, spd:110, gen:1 },
    { id:39, name:"Jigglypuff", types:["normal","fairy"], desc:"Quando seus olhos brilham cor-de-rosa suave, canta uma canção ninar misteriosamente bem.", height:0.5, weight:5.5, ability:"Cute Charm", hp:115, atk:45, def:20, spatk:45, spdef:25, spd:20, gen:1 },
    { id:52, name:"Meowth", types:["normal"], desc:"Preso pelo brilho de objetos redondos. Anda de noite procurando moedas brilhantes.", height:0.4, weight:4.2, ability:"Pickup", hp:40, atk:45, def:35, spatk:40, spdef:40, spd:90, gen:1 },
    { id:54, name:"Psyduck", types:["water"], desc:"Sempre tem dor de cabeça. Usa poderes misteriosos mas não consegue controlar quando vai usá-los.", height:0.8, weight:19.6, ability:"Damp", hp:50, atk:52, def:48, spatk:65, spdef:50, spd:55, gen:1 },
    { id:63, name:"Abra", types:["psychic"], desc:"Dorme 18 horas por dia usando seus poderes mentais mesmo durante o sono.", height:0.9, weight:19.5, ability:"Synchronize", hp:25, atk:20, def:15, spatk:105, spdef:55, spd:90, gen:1 },
    { id:66, name:"Machop", types:["fighting"], desc:"Tem músculos super desenvolvidos. Pode mover e lançar 100 adultos de uma vez.", height:0.8, weight:19.5, ability:"Guts", hp:70, atk:80, def:50, spatk:35, spdef:35, spd:35, gen:1 },
    { id:74, name:"Geodude", types:["rock","ground"], desc:"Quase impossível de distinguir de pedras comuns. Parece de mau humor se confundido com uma pedra.", height:0.4, weight:20.0, ability:"Rock Head", hp:40, atk:80, def:100, spatk:30, spdef:30, spd:20, gen:1 },
    { id:92, name:"Gastly", types:["ghost","poison"], desc:"Quase todo gás. Envolve o inimigo no gás lentamente. Ao ar livre, o vento o dispersa.", height:1.3, weight:0.1, ability:"Levitate", hp:30, atk:35, def:30, spatk:100, spdef:35, spd:80, gen:1 },
    { id:94, name:"Gengar", types:["ghost","poison"], desc:"Fica quieto em cantos escuros. Adora ver o susto das presas. Uma risada fria te avisa da presença.", height:1.5, weight:40.5, ability:"Cursed Body", hp:60, atk:65, def:60, spatk:130, spdef:75, spd:110, gen:1 },
    { id:129, name:"Magikarp", types:["water"], desc:"Considerado o mais fraco de todos. Incapaz de usar qualquer ataque. Nada sem destino.", height:0.9, weight:10.0, ability:"Swift Swim", hp:20, atk:10, def:55, spatk:15, spdef:20, spd:80, gen:1 },
    { id:130, name:"Gyarados", types:["water","flying"], desc:"Quando aparece em lugares onde costumava viver, causa terremotos e raios. Extremamente violento.", height:6.5, weight:235.0, ability:"Intimidate", hp:95, atk:125, def:79, spatk:60, spdef:100, spd:81, gen:1 },
    { id:133, name:"Eevee", types:["normal"], desc:"Tem uma estrutura genética instável e estranha que permite mutações se exposto a vários tipos de pedra.", height:0.3, weight:6.5, ability:"Run Away", hp:55, atk:55, def:50, spatk:45, spdef:65, spd:55, gen:1 },
    { id:143, name:"Snorlax", types:["normal"], desc:"Extremamente preguiçoso. Acorda apenas para comer, então volta a dormir. Bloqueia estradas frequentemente.", height:2.1, weight:460.0, ability:"Immunity", hp:160, atk:110, def:65, spatk:65, spdef:110, spd:30, gen:1 },
    { id:147, name:"Dratini", types:["dragon"], desc:"Continua crescendo quando muda de pele. Difícil de ver então muitos acreditavam ser lendário.", height:1.8, weight:3.3, ability:"Shed Skin", hp:41, atk:64, def:45, spatk:50, spdef:50, spd:50, gen:1 },
    { id:149, name:"Dragonite", types:["dragon","flying"], desc:"Pode voar mais rápido que um jato! Em 16 horas pode fazer o giro completo do globo.", height:2.2, weight:210.0, ability:"Inner Focus", hp:91, atk:134, def:95, spatk:100, spdef:100, spd:80, gen:1 },
    { id:150, name:"Mewtwo", types:["psychic"], desc:"Criado por manipulação genética. O resultado de anos de experimentos para o Pokémon mais poderoso.", height:2.0, weight:122.0, ability:"Pressure", hp:106, atk:110, def:90, spatk:154, spdef:90, spd:130, gen:1 },
    { id:151, name:"Mew", types:["psychic"], desc:"Diz-se conter o código genético de todos os Pokémon. Capaz de tornar-se invisível à vontade.", height:0.4, weight:4.0, ability:"Synchronize", hp:100, atk:100, def:100, spatk:100, spdef:100, spd:100, gen:1 },
    { id:152, name:"Chikorita", types:["grass"], desc:"Adora tomar sol. Usando o aroma da folha no pescoço, faz amigos e sinaliza para outros.", height:0.9, weight:6.4, ability:"Overgrow", hp:45, atk:49, def:65, spatk:49, spdef:65, spd:45, gen:2 },
    { id:155, name:"Cyndaquil", types:["fire"], desc:"Tímido por natureza. Dobra o corpo quando assustado. Cospe fogo nas costas para se proteger.", height:0.5, weight:7.9, ability:"Blaze", hp:39, atk:52, def:43, spatk:60, spdef:50, spd:65, gen:2 },
    { id:158, name:"Totodile", types:["water"], desc:"Pequeno mas forte. As mandíbulas poderosas podem triturar quase tudo. Cuidado ao ser mordido.", height:0.6, weight:9.5, ability:"Torrent", hp:50, atk:65, def:64, spatk:44, spdef:48, spd:43, gen:2 },
    { id:175, name:"Togepi", types:["fairy"], desc:"Armazena em si a felicidade de todos. Dizem que trazer boa sorte ao ter um Togepi bem cuidado.", height:0.3, weight:1.5, ability:"Hustle", hp:35, atk:20, def:65, spatk:40, spdef:65, spd:20, gen:2 },
    { id:196, name:"Espeon", types:["psychic"], desc:"Desenvolveu poderes psíquicos para proteger seu treinador. Os pelos captam movimentos do ar.", height:0.9, weight:26.5, ability:"Synchronize", hp:65, atk:65, def:60, spatk:130, spdef:95, spd:110, gen:2 },
    { id:197, name:"Umbreon", types:["dark"], desc:"Quando exposto à lua, os anéis do corpo brilham de amarelo. É visto como agourento.", height:1.0, weight:27.0, ability:"Synchronize", hp:95, atk:65, def:110, spatk:60, spdef:130, spd:65, gen:2 },
    { id:249, name:"Lugia", types:["psychic","flying"], desc:"Dorme no fundo do mar porque seus poderes são muitos difíceis de controlar sem prejudicar o entorno.", height:5.2, weight:216.0, ability:"Pressure", hp:106, atk:90, def:130, spatk:90, spdef:154, spd:110, gen:2 },
    { id:250, name:"Ho-Oh", types:["fire","flying"], desc:"Quem olha diretamente para Ho-Oh é abençoado com eterna felicidade. Vive num arco-íris eterno.", height:3.8, weight:199.0, ability:"Pressure", hp:106, atk:130, def:90, spatk:110, spdef:154, spd:90, gen:2 },
    { id:252, name:"Treecko", types:["grass"], desc:"Tem pequenas almofadas nos pés que grudam em qualquer superfície. Escala paredes verticais.", height:0.5, weight:5.0, ability:"Overgrow", hp:40, atk:45, def:35, spatk:65, spdef:55, spd:70, gen:3 },
    { id:255, name:"Torchic", types:["fire"], desc:"Cospe fogo de 1000°C de forma estranha. Dentro do peito há uma esfera de fogo que bate como coração.", height:0.4, weight:2.5, ability:"Blaze", hp:45, atk:60, def:40, spatk:70, spdef:50, spd:45, gen:3 },
    { id:258, name:"Mudkip", types:["water"], desc:"A nadadeira mede variações nas ondas do ar, permitindo que sinta o que está ao redor sem ver.", height:0.4, weight:7.6, ability:"Torrent", hp:50, atk:70, def:50, spatk:50, spdef:50, spd:40, gen:3 },
    { id:280, name:"Ralts", types:["psychic","fairy"], desc:"Sensível às emoções das pessoas. Aproxima-se quando se sente em paz. Raramente visto.", height:0.4, weight:6.6, ability:"Synchronize", hp:28, atk:25, def:25, spatk:45, spdef:35, spd:40, gen:3 },
    { id:302, name:"Sableye", types:["dark","ghost"], desc:"Digere gemas preciosas comidas. Seus olhos reluzem como pedras preciosas, assustando quem vê no escuro.", height:0.5, weight:11.0, ability:"Keen Eye", hp:50, atk:75, def:75, spatk:65, spdef:65, spd:50, gen:3 },
    { id:384, name:"Rayquaza", types:["dragon","flying"], desc:"Vive na camada de ozônio, nunca descendo à terra. Foi visto por milênios antes de ser estudado.", height:7.0, weight:206.5, ability:"Air Lock", hp:105, atk:150, def:90, spatk:150, spdef:90, spd:95, gen:3 },
    { id:385, name:"Jirachi", types:["steel","psychic"], desc:"Adormece por longos períodos. Segundo lenda, acorda por 7 dias a cada 1000 anos para conceder desejos.", height:0.3, weight:1.1, ability:"Serene Grace", hp:100, atk:100, def:100, spatk:100, spdef:100, spd:100, gen:3 },
    { id:448, name:"Lucario", types:["fighting","steel"], desc:"Usa as ondas de aura emanadas por corpos vivos. Pode sentir os pensamentos e emoções das pessoas.", height:1.2, weight:54.0, ability:"Steadfast", hp:70, atk:110, def:70, spatk:115, spdef:70, spd:90, gen:4 },
    { id:445, name:"Garchomp", types:["dragon","ground"], desc:"Voa tão rápido quanto um jato e devora tudo em seu caminho. Adora ambientes quentes e áridos.", height:1.9, weight:95.0, ability:"Sand Veil", hp:108, atk:130, def:95, spatk:80, spdef:85, spd:102, gen:4 },
    { id:461, name:"Weavile", types:["dark","ice"], desc:"Evolui usando pedra Dawn. Em grupos, usa garras afiadas para fazer sinais nas árvores para se comunicar.", height:1.1, weight:34.0, ability:"Pressure", hp:70, atk:120, def:65, spatk:45, spdef:85, spd:125, gen:4 },
    { id:483, name:"Dialga", types:["steel","dragon"], desc:"Tem poder sobre o tempo. Diz-se que o tempo começou a fluir quando Dialga nasceu.", height:5.4, weight:683.0, ability:"Pressure", hp:100, atk:120, def:120, spatk:150, spdef:100, spd:90, gen:4 },
    { id:484, name:"Palkia", types:["water","dragon"], desc:"Tem poder sobre o espaço. Dizem que o espaço se estabiliza quando Palkia aparece.", height:4.2, weight:336.0, ability:"Pressure", hp:90, atk:120, def:100, spatk:150, spdef:120, spd:100, gen:4 },
    { id:487, name:"Giratina", types:["ghost","dragon"], desc:"Exilado para outra dimensão por sua natureza violenta. Pode ser avistado no mundo invertido.", height:4.5, weight:750.0, ability:"Levitate", hp:150, atk:100, def:120, spatk:100, spdef:120, spd:90, gen:4 },
  ];
  
  const typeColors = {
    fire:'#ff6b35',water:'#4fc3f7',grass:'#66bb6a',electric:'#ffca28',
    psychic:'#ec407a',ice:'#80deea',dragon:'#7e57c2',dark:'#546e7a',
    fairy:'#f48fb1',normal:'#90a4ae',fighting:'#ef5350',poison:'#ab47bc',
    ground:'#c8a96e',flying:'#90caf9',bug:'#aed581',rock:'#bcaaa4',
    ghost:'#7e57c2',steel:'#b0bec5'
  };
  
  const typeEmoji = {
    fire:'🔥',water:'💧',grass:'🌿',electric:'⚡',psychic:'🔮',ice:'❄️',
    dragon:'🐉',dark:'🌑',fairy:'✨',normal:'⭐',fighting:'🥊',poison:'☠️',
    ground:'🌍',flying:'🕊️',bug:'🐛',rock:'🪨',ghost:'👻',steel:'⚙️'
  };
  
  const statColors = { hp:'#ef5350', atk:'#ff7043', def:'#42a5f5', spatk:'#ab47bc', spdef:'#26c6da', spd:'#66bb6a' };
  const statNames = { hp:'HP', atk:'Ataque', def:'Defesa', spatk:'Sp. Atk', spdef:'Sp. Def', spd:'Velocidade' };
  
  let caught = JSON.parse(localStorage.getItem('caught') || '{}');
  let activeType = null;
  let currentPoke = null;
  let battleState = null;
  
  // ============ RENDER GRID ============
  function getTypeClass(t) { return 't-' + t; }
  
  function spriteUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
  function officialArt(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
  
  function renderGrid(list) {
    const grid = document.getElementById('grid');
    document.getElementById('totalCount').textContent = list.length;
    document.getElementById('caughtCount').textContent = Object.keys(caught).length;
  
    if (list.length === 0) {
      grid.innerHTML = '<div class="no-results"><div class="big">🔍</div><p>Nenhum Pokémon encontrado</p></div>';
      return;
    }
  
    grid.innerHTML = list.map((p, i) => {
      const c1 = typeColors[p.types[0]] || '#3b4cca';
      const c2 = typeColors[p.types[1] || p.types[0]] || '#1a1a2e';
      const isCaught = caught[p.id];
      return `
        <div class="poke-card" 
          style="--card-color1:${c1};--card-color2:${c2};--card-glow:${c1}55;animation-delay:${Math.min(i*0.05,1)}s"
          data-id="${p.id}">
          <div class="poke-number">#${String(p.id).padStart(3,'0')}</div>
          <div class="poke-img-wrap">
            <img class="poke-img" src="${spriteUrl(p.id)}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><text y=%22.9em%22 font-size=%2280%22>⚪</text></svg>'">
          </div>
          <div class="poke-name">${p.name}</div>
          <div class="type-badges">
            ${p.types.map(t=>`<span class="type-badge ${getTypeClass(t)}">${typeEmoji[t]||''} ${t}</span>`).join('')}
          </div>
          <button class="catch-btn ${isCaught?'caught':''}" data-catch="${p.id}">${isCaught?'✓ Capturado':'Capturar!'}</button>
        </div>`;
    }).join('');
  
    // Events
    grid.querySelectorAll('.poke-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.classList.contains('catch-btn')) return;
        const id = +card.dataset.id;
        openModal(POKEMON_DATA.find(p=>p.id===id));
      });
    });
  
    grid.querySelectorAll('.catch-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = +btn.dataset.catch;
        if (caught[id]) {
          delete caught[id];
          btn.textContent = 'Capturar!';
          btn.classList.remove('caught');
        } else {
          caught[id] = true;
          btn.textContent = '✓ Capturado';
          btn.classList.add('caught');
          showCatchAnimation(btn);
        }
        localStorage.setItem('caught', JSON.stringify(caught));
        document.getElementById('caughtCount').textContent = Object.keys(caught).length;
      });
    });
  }
  
  function showCatchAnimation(btn) {
    const el = document.createElement('span');
    el.textContent = '⚽ +1';
    el.style.cssText = `position:fixed;font-size:20px;font-weight:900;color:#ffca28;
      pointer-events:none;z-index:9999;animation:flyUp 1s ease forwards;`;
    const rect = btn.getBoundingClientRect();
    el.style.left = rect.left + 'px';
    el.style.top = rect.top + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
  
  // Inject flyUp animation
  const style = document.createElement('style');
  style.textContent = '@keyframes flyUp{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-60px)}}';
  document.head.appendChild(style);
  
  // ============ MODAL ============
  function openModal(p) {
    currentPoke = p;
    const c1 = typeColors[p.types[0]] || '#3b4cca';
    document.getElementById('modal').style.setProperty('--modal-color', c1);
    document.getElementById('modal').style.setProperty('--modal-glow', c1+'44');
  
    document.getElementById('modalHeader').innerHTML = `
      <div class="modal-img-wrap" style="background:linear-gradient(135deg,${c1}22,${c1}44)">
        <img class="modal-img" src="${officialArt(p.id)}" alt="${p.name}"
          onerror="this.src='${spriteUrl(p.id)}'">
      </div>
      <div class="modal-title">
        <div class="modal-num">#${String(p.id).padStart(3,'0')} — Gen ${p.gen}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-types">${p.types.map(t=>`<span class="type-badge ${getTypeClass(t)}">${typeEmoji[t]} ${t}</span>`).join('')}</div>
        <div class="modal-desc">"${p.desc}"</div>
      </div>`;
  
    const stats = ['hp','atk','def','spatk','spdef','spd'];
  
    document.getElementById('modalBody').innerHTML = `
      <div class="info-section">
        <h3>📋 Informações</h3>
        <div class="info-row"><span class="info-label">Altura</span><span class="info-val">${p.height}m</span></div>
        <div class="info-row"><span class="info-label">Peso</span><span class="info-val">${p.weight}kg</span></div>
        <div class="info-row"><span class="info-label">Habilidade</span><span class="info-val">${p.ability}</span></div>
        <div class="info-row"><span class="info-label">Geração</span><span class="info-val">Gen ${p.gen}</span></div>
        <div class="info-row"><span class="info-label">Tipo(s)</span><span class="info-val">${p.types.join(', ')}</span></div>
        <div class="info-row"><span class="info-label">BST</span><span class="info-val">${stats.reduce((a,s)=>a+p[s],0)}</span></div>
      </div>
      <div class="info-section">
        <h3>📊 Estatísticas</h3>
        ${stats.map(s=>`
          <div class="stat-row">
            <div class="stat-header">
              <span class="stat-name">${statNames[s]}</span>
              <span class="stat-val">${p[s]}</span>
            </div>
            <div class="stat-bar">
              <div class="stat-fill" style="background:${statColors[s]}" data-val="${p[s]}"></div>
            </div>
          </div>`).join('')}
      </div>
      <div class="battle-section">
        <h3>⚔️ Modo Batalha</h3>
        <div id="battleArena"></div>
      </div>`;
  
    // Animate stat bars
    setTimeout(() => {
      document.querySelectorAll('.stat-fill').forEach(bar => {
        const v = +bar.dataset.val;
        bar.style.width = Math.min(v/255*100, 100) + '%';
      });
    }, 100);
  
    initBattle(p);
    document.getElementById('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    document.getElementById('overlay').classList.remove('open');
    document.body.style.overflow = '';
    battleState = null;
  }
  
  document.getElementById('closeBtn').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('overlay')) closeModal();
  });
  
  // ============ BATTLE ============
  function getRandomOpponent(exclude) {
    const others = POKEMON_DATA.filter(p => p.id !== exclude.id);
    return others[Math.floor(Math.random() * others.length)];
  }
  
  function initBattle(p) {
    const opp = getRandomOpponent(p);
    battleState = {
      player: { ...p, curHp: p.hp },
      enemy: { ...opp, curHp: opp.hp },
      log: `${p.name} vs ${opp.name}! Escolha um ataque!`,
      turn: 'player',
      over: false
    };
    renderBattle();
  }
  
  function calcDamage(attacker, defender) {
    const base = Math.floor(((2 * 50 / 5 + 2) * attacker.atk * 60 / defender.def) / 50 + 2);
    return Math.max(5, Math.floor(base * (0.85 + Math.random() * 0.15)));
  }
  
  function renderBattle() {
    const s = battleState;
    if (!s) return;
    const arena = document.getElementById('battleArena');
    if (!arena) return;
  
    const pHpPct = Math.max(0, Math.round(s.player.curHp / s.player.hp * 100));
    const eHpPct = Math.max(0, Math.round(s.enemy.curHp / s.enemy.hp * 100));
  
    arena.innerHTML = `
      <div class="battle-arena">
        <div class="battler">
          <div class="battler-name">🎮 ${s.player.name}</div>
          <img class="battler-img" src="${spriteUrl(s.player.id)}" alt="">
          <div class="hp-bar"><div class="hp-fill ${pHpPct<25?'low':''}" style="width:${pHpPct}%"></div></div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px">${s.player.curHp}/${s.player.hp} HP</div>
        </div>
        <div class="vs-text">VS</div>
        <div class="battler">
          <div class="battler-name">🤖 ${s.enemy.name}</div>
          <img class="battler-img" src="${spriteUrl(s.enemy.id)}" alt="">
          <div class="hp-bar"><div class="hp-fill ${eHpPct<25?'low':''}" style="width:${eHpPct}%"></div></div>
          <div style="font-size:11px;color:var(--muted);margin-top:4px">${s.enemy.curHp}/${s.enemy.hp} HP</div>
        </div>
      </div>
      <div class="battle-log" id="battleLog">${s.log}</div>
      <div class="battle-btns">
        <button class="btn btn-attack" id="attackBtn" ${s.over?'disabled':''}>⚔️ Atacar!</button>
        <button class="btn btn-reset" id="resetBtn">🔄 Nova Batalha</button>
      </div>`;
  
    document.getElementById('attackBtn').addEventListener('click', doAttack);
    document.getElementById('resetBtn').addEventListener('click', () => initBattle(currentPoke));
  }
  
  function doAttack() {
    if (!battleState || battleState.over) return;
    const s = battleState;
  
    // Player attacks
    const dmgToEnemy = calcDamage(s.player, s.enemy);
    s.enemy.curHp = Math.max(0, s.enemy.curHp - dmgToEnemy);
    let log = `${s.player.name} causou ${dmgToEnemy} de dano a ${s.enemy.name}! `;
  
    if (s.enemy.curHp <= 0) {
      log += `🎉 ${s.enemy.name} foi derrotado! Vitória!`;
      s.over = true;
      if (!caught[s.player.id]) {
        caught[s.player.id] = true;
        localStorage.setItem('caught', JSON.stringify(caught));
        document.getElementById('caughtCount').textContent = Object.keys(caught).length;
        log += ` ${s.player.name} capturado!`;
      }
      s.log = log;
      renderBattle();
      return;
    }
  
    // Enemy attacks
    const dmgToPlayer = calcDamage(s.enemy, s.player);
    s.player.curHp = Math.max(0, s.player.curHp - dmgToPlayer);
    log += `${s.enemy.name} contra-atacou com ${dmgToPlayer} de dano!`;
  
    if (s.player.curHp <= 0) {
      log = `💀 ${s.player.name} foi derrotado! Tente novamente!`;
      s.over = true;
    }
  
    s.log = log;
    renderBattle();
  }
  
  // ============ SEARCH & FILTER ============
  const ALL_TYPES = [...new Set(POKEMON_DATA.flatMap(p=>p.types))].sort();
  
  function buildTypeFilters() {
    const wrap = document.getElementById('typeFilters');
    const allBtn = document.createElement('button');
    allBtn.className = 'type-pill active';
    allBtn.style.background = 'rgba(255,255,255,0.2)';
    allBtn.style.color = 'white';
    allBtn.textContent = 'Todos';
    allBtn.addEventListener('click', () => {
      activeType = null;
      document.querySelectorAll('.type-pill').forEach(p=>p.classList.remove('active'));
      allBtn.classList.add('active');
      applyFilters();
    });
    wrap.appendChild(allBtn);
  
    ALL_TYPES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'type-pill';
      btn.style.background = typeColors[t] || '#555';
      btn.style.color = ['electric','ice','bug','flying','rock','steel','ground','water','fairy','normal'].includes(t) ? '#1a1a2e' : 'white';
      btn.innerHTML = `${typeEmoji[t]||''} ${t}`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.type-pill').forEach(p=>p.classList.remove('active'));
        if (activeType === t) {
          activeType = null;
          allBtn.classList.add('active');
        } else {
          activeType = t;
          btn.classList.add('active');
        }
        applyFilters();
      });
      wrap.appendChild(btn);
    });
  }
  
  function applyFilters() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    let list = POKEMON_DATA;
    if (q) list = list.filter(p => p.name.toLowerCase().includes(q) || String(p.id).includes(q));
    if (activeType) list = list.filter(p => p.types.includes(activeType));
    renderGrid(list);
  }
  
  document.getElementById('searchInput').addEventListener('input', applyFilters);
  
  // ============ INIT ============
  buildTypeFilters();
  renderGrid(POKEMON_DATA);