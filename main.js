const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//const rols = new Map([], ["huma", 1], ["ovella", 2]);



/* INICIALITZACIÓ */
(function () {
    creaSelectOptions();
    
})()


function creaJo() {
    select = document.getElementById('criatures');

    switch (select.value) {
        case "0":
            creaCriatura(trol, "jo");
            break;
        case "1":
            creaCriatura(huma, "jo");
            break;
        case "2":
            creaCriatura(ovella, "jo");
            break;
        case "-1":
        default:
            break;
    }

    //select.disabled = true;

}

function creaSelectOptions() {
    select = document.getElementById('criatures');
    for (let i = 0; i < rols.size; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = rols.get(i);
        select.appendChild(opt);
    }
}

function ataca() {
    const dau = tiraDau();
    const titol = document.getElementById('titol');
    titol.innerHTML = dau;
}

function tiraDau(max = 5, num = 1) {
    let dau = 1;
    for (let i = 0; i < num; i++) {
        dau = Math.floor(Math.random() * max) + 1;
    }
    return dau;
}

function creaCriatura(criatura, rol) {
    let nom;
    let vida;
    let atac;
    let avatar;
    let empatia;
    let defensa;
    let inteligencia;

    if (rol == "jo") {
        nom = document.getElementById('nom-jo');
        vida = document.getElementById('vida-jo');
        atac = document.getElementById('atac-jo');
        empatia = document.getElementById('empatia-jo');
        avatar = document.getElementById('avatar-jo');
        defensa = document.getElementById('defensa-jo');
        inteligencia = document.getElementById('inteligencia-jo');

    } else {
        nom = document.getElementById('nom-def');
        vida = document.getElementById('vida-def');
        atac = document.getElementById('atac-def');
    }
    nom.innerHTML = criatura.nom;
    vida.innerHTML = criatura.vida;
    atac.innerHTML = criatura.atac;
    empatia.innerHTML = criatura.empatia;
    avatar.src = criatura.avatar;
    defensa.innerHTML = criatura.defensa;
    inteligencia.innerHTML = criatura.inteligencia;
}

