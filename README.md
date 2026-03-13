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
    <link rel="stylesheet" href="style.css">
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

    <script src="function.js"> 
    </script>
</body>
</html>
