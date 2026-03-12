
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
