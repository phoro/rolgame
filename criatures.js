/* CRIATURES */
const rols = new Map();
rols.set(0, "trol");
rols.set(1, "huma");
rols.set(2, "ovella");

/* Intel·ligents >= 50 */
const trol = {
    'nom': "Troll",
    'vida': 25,
    'atac': 9,
    'defensa': 50,
    'comestible': 0,
    'empatia': 10,
    'inteligencia': 50,
    'avatar': "assets/img/troll.jpg"
}

const huma = {
    'nom': "Humà",
    'vida': 10,
    'atac': 3,
    'defensa': 10,
    'comestible': 40,
    'empatia': 50,
    'inteligencia': 80,
    'avatar': "assets/img/huma.jpg"
}

/* No Intel·ligents < 50 */
const ovella = {
    'nom': "Ovella",
    'vida': 3,
    'atac': 0,
    'defensa': 0,
    'comestible': 100,
    'empatia': 80,
    'inteligencia': 20,
    'avatar': "assets/img/ovella.jpg"
}



