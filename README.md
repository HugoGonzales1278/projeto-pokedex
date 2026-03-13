# projeto-pokedex
enciclopedia-pokemon
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Exo+2:wght@300;400;600;700;900&display=swap" rel="stylesheet">
<style>
    *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}

.content {
    padding: 1rem;
}

.content h1{
    margin: 0;
}

ol.pokemons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0;
}

ol.pokemons li{
    margin: .5rem;
    padding: 1rem;
    background-color: #14A06F;
    color: white;
    border-radius: 1rem;
    height: 100px;
    display: flex;
    flex-direction: column;
}


:root {
    --red: #e3350d;
    --red-dark: #9b1f04;
    --red-light: #ff6b4a;
    --black: #0a0a0f;
    --dark: #111118;
    --card-bg: #16161f;
    --border: #2a2a3a;
    --text: #e8e8f0;
    --muted: #6b6b8a;
    --screen: #1a2a1a;
    --screen-glow: #39ff14;

    --fire: #ff6b35;
    --water: #4fc3f7;
    --grass: #66bb6a;
    --poison: #ab47bc;
    --flying: #90caf9;
    --bug: #aed581;
    --normal: #bdbdbd;
    --electric: #ffee58;
    --ice: #80deea;
    --psychic: #f48fb1;
    --rock: #bcaaa4;
    --ground: #d7ccc8;
    --dragon: #7e57c2;
    --ghost: #7c4dff;
    --dark-type: #795548;
    --steel: #90a4ae;
    --fairy: #f8bbd0;
    --fighting: #ef5350;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: var(--black);
    color: var(--text);
    font-family: 'Exo 2', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
}

/* Grid noise background */
body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: 
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(227,53,13,0.15) 0%, transparent 60%),
        linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 100% 100%, 40px 40px, 40px 40px;
    pointer-events: none;
    z-index: 0;
}

/* ── HEADER ── */
header {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 3rem 1rem 2rem;
}

.logo {
    display: inline-block;
    position: relative;
}

.logo h1 {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    color: #fff;
    text-shadow:
        4px 4px 0 var(--red),
        8px 8px 0 var(--red-dark),
        0 0 40px rgba(227,53,13,0.6);
    letter-spacing: 2px;
    line-height: 1.3;
}

.logo h1 span { color: var(--red-light); }

.subtitle {
    font-size: 0.85rem;
    color: var(--muted);
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-top: 0.75rem;
}

/* Decorative pokeball divider */
.divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    margin: 1.5rem auto 0;
}
.divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
}
.pokeball-icon {
    width: 28px; height: 28px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: linear-gradient(to bottom, var(--red) 50%, #fff 50%);
    position: relative;
    flex-shrink: 0;
}
.pokeball-icon::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 10px; height: 10px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--border);
}
.pokeball-icon::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px); left: 0; right: 0;
    height: 2px;
    background: var(--border);
}

/* ── SEARCH / FILTER ── */
.controls {
    position: relative;
    z-index: 10;
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.search-wrap {
    flex: 1;
    min-width: 200px;
    position: relative;
}

.search-wrap input {
    width: 100%;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    color: var(--text);
    font-family: 'Exo 2', sans-serif;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s;
}
.search-wrap input::placeholder { color: var(--muted); }
.search-wrap input:focus { border-color: var(--red); }
.search-icon {
    position: absolute;
    left: 0.9rem; top: 50%;
    transform: translateY(-50%);
    color: var(--muted);
    font-size: 1rem;
    pointer-events: none;
}

/* ── GRID ── */
.pokedex-grid {
    position: relative;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
}

/* ── CARD ── */
.poke-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    animation: fadeIn 0.4s ease both;
    position: relative;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}

.poke-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px var(--glow, rgba(227,53,13,0.2));
    border-color: var(--accent, var(--red));
}

.card-number {
    position: absolute;
    top: 0.75rem; right: 0.9rem;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.55rem;
    color: var(--muted);
    z-index: 2;
}

.card-img-wrap {
    position: relative;
    padding: 1.5rem 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* type-colored spotlight behind sprite */
.card-img-wrap::before {
    content: '';
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 120px; height: 60px;
    background: radial-gradient(ellipse at center, var(--accent, rgba(255,255,255,0.1)) 0%, transparent 70%);
    opacity: 0.4;
    filter: blur(8px);
}

.poke-img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    image-rendering: pixelated;
    position: relative;
    z-index: 1;
    transition: transform 0.3s;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
}
.poke-card:hover .poke-img { transform: scale(1.12) translateY(-4px); }

.card-body {
    padding: 0.75rem 1rem 1rem;
}

.poke-name {
    font-family: 'Exo 2', sans-serif;
    font-weight: 900;
    font-size: 1.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #fff;
    margin-bottom: 0.4rem;
}

.poke-types {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-bottom: 0.6rem;
}

.type-badge {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border-radius: 20px;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.poke-desc {
    font-size: 0.78rem;
    color: var(--muted);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--muted);
}
.stat-value {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text);
}

/* ── LOADING ── */
.loading-screen {
    position: fixed;
    inset: 0;
    background: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: opacity 0.5s, visibility 0.5s;
}
.loading-screen.hidden { opacity: 0; visibility: hidden; }

.loading-ball {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: linear-gradient(to bottom, var(--red) 50%, #fff 50%);
    border: 3px solid #333;
    position: relative;
    animation: spin 0.8s linear infinite;
}
.loading-ball::after {
    content: '';
    position: absolute;
    top: calc(50% - 8px); left: calc(50% - 8px);
    width: 16px; height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #333;
}
.loading-ball::before {
    content: '';
    position: absolute;
    top: calc(50% - 1.5px); left: 0; right: 0;
    height: 3px;
    background: #333;
}

@keyframes spin { to { transform: rotate(360deg); } }

.loading-text {
    font-family: 'Press Start 2P', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    margin-top: 1.5rem;
    animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* ── TYPE COLORS ── */
.t-fire     { background: var(--fire);     }
.t-water    { background: var(--water);    color: #000; }
.t-grass    { background: var(--grass);    color: #000; }
.t-poison   { background: var(--poison);   }
.t-flying   { background: var(--flying);   color: #000; }
.t-bug      { background: var(--bug);      color: #000; }
.t-normal   { background: var(--normal);   color: #000; }
.t-electric { background: var(--electric); color: #000; }
.t-ice      { background: var(--ice);      color: #000; }
.t-psychic  { background: var(--psychic);  color: #000; }
.t-rock     { background: var(--rock);     color: #000; }
.t-ground   { background: var(--ground);   color: #000; }
.t-dragon   { background: var(--dragon);   }
.t-ghost    { background: var(--ghost);    }
.t-dark     { background: var(--dark-type);}
.t-steel    { background: var(--steel);    color: #000; }
.t-fairy    { background: var(--fairy);    color: #000; }
.t-fighting { background: var(--fighting); }

/* error state */
.poke-desc.error { color: #e57373; font-style: italic; }

/* responsive */
@media (max-width: 480px) {
    .pokedex-grid { grid-template-columns: repeat(2, 1fr); gap: 0.9rem; padding: 0 0.9rem 3rem; }
    .poke-img { width: 90px; height: 90px; }
}
</style>
</head>
<body>

    <!-- Loading -->
    <div class="loading-screen" id="loading">
        <div class="loading-ball"></div>
        <p class="loading-text">Carregando...</p>
    </div>

    <!-- Header -->
    <header>
        <div class="logo">
            <h1>Poké<span>dex</span></h1>
        </div>
        <p class="subtitle">Enciclopédia Pokémon</p>
        <div class="divider">
            <div class="pokeball-icon"></div>
        </div>
    </header>

    <!-- Controls -->
    <div class="controls">
        <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input type="text" id="search" placeholder="Buscar por nome ou número...">
        </div>
    </div>

    <!-- Grid -->
    <main class="pokedex-grid" id="grid"></main>

    <script> 
    
/*const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then(function (response){
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function(){
        console.log(`Requisição concluida!`)
    })
try{

} catch (error){

} finally {
    
}
*/
const POKEMON_IDS = Array.from({length: 151}, (_, i) => i + 1); // Gen 1 completo

    const TYPE_COLORS = {
        fire:'#ff6b35', water:'#4fc3f7', grass:'#66bb6a', poison:'#ab47bc',
        flying:'#90caf9', bug:'#aed581', normal:'#bdbdbd', electric:'#ffee58',
        ice:'#80deea', psychic:'#f48fb1', rock:'#bcaaa4', ground:'#d7ccc8',
        dragon:'#7e57c2', ghost:'#7c4dff', dark:'#795548', steel:'#90a4ae',
        fairy:'#f8bbd0', fighting:'#ef5350'
    };

    async function fetchPokemon(id) {
        const [poke, species] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(r => r.json())
        ]);

        const descEntry = species.flavor_text_entries.find(e => e.language.name === 'pt' ) 
            || species.flavor_text_entries.find(e => e.language.name === 'en');
        const desc = descEntry ? descEntry.flavor_text.replace(/\f|\n/g, ' ') : 'Sem descrição disponível.';

        const img = poke.sprites.other['official-artwork'].front_default
            || poke.sprites.front_default;

        return {
            id: poke.id,
            name: poke.name,
            types: poke.types.map(t => t.type.name),
            img,
            desc,
            height: (poke.height / 10).toFixed(1) + ' m',
            weight: (poke.weight / 10).toFixed(1) + ' kg',
        };
    }

    function buildCard(p, delay) {
        const primaryType = p.types[0];
        const accentColor = TYPE_COLORS[primaryType] || '#fff';

        const card = document.createElement('article');
        card.className = 'poke-card';
        card.style.animationDelay = `${delay}ms`;
        card.style.setProperty('--accent', accentColor);
        card.style.setProperty('--glow', accentColor + '33');
        card.dataset.name = p.name;
        card.dataset.id = p.id;

        const typeBadges = p.types.map(t =>
            `<span class="type-badge t-${t}">${t}</span>`
        ).join('');

        card.innerHTML = `
            <span class="card-number">#${String(p.id).padStart(3,'0')}</span>
            <div class="card-img-wrap">
                <img class="poke-img" src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div class="card-body">
                <h2 class="poke-name">${p.name}</h2>
                <div class="poke-types">${typeBadges}</div>
                <p class="poke-desc">${p.desc}</p>
                <div class="card-stats">
                    <div class="stat-item">
                        <span class="stat-label">Altura</span>
                        <span class="stat-value">${p.height}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Peso</span>
                        <span class="stat-value">${p.weight}</span>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    async function init() {
        const grid = document.getElementById('grid');
        const loading = document.getElementById('loading');

        // Fetch all in parallel (batched)
        const BATCH = 20;
        const allData = [];

        for (let i = 0; i < POKEMON_IDS.length; i += BATCH) {
            const batch = POKEMON_IDS.slice(i, i + BATCH);
            const results = await Promise.allSettled(batch.map(fetchPokemon));
            results.forEach(r => {
                if (r.status === 'fulfilled') allData.push(r.value);
            });
        }

        // Render
        allData.forEach((p, i) => {
            const card = buildCard(p, Math.min(i * 30, 600));
            grid.appendChild(card);
        });

        loading.classList.add('hidden');

        // Search
        document.getElementById('search').addEventListener('input', e => {
            const q = e.target.value.toLowerCase().trim();
            document.querySelectorAll('.poke-card').forEach(card => {
                const match = card.dataset.name.includes(q) 
                    || card.dataset.id.includes(q)
                    || q === '';
                card.style.display = match ? '' : 'none';
            });
        });
    }

    init();
    </script>
</body>
</html>
