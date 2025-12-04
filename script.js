/*EXERCICE 1*/
function exo1() {
    let x = "150";
    let y = 150;
    let z = true;

    let r =
        "Type de x : " + typeof x + "<br>" +
        "Type de y : " + typeof y + "<br>" +
        "Type de z : " + typeof z + "<br><br>";

    x = Number(x);

    r += "Après conversion, type de x = " + typeof x + "<br>";
    r += "<br>JavaScript change dynamiquement les types car c'est un langage à typage faible.";

    document.getElementById("r1").innerHTML = r;
}


/* EXERCICE 2*/
function exo2() {
    let prenom = "Sara";
    let age = 22;

    let phrase = `Je m'appelle ${prenom} et j'ai ${age} ans.`;

    age = 23;
    let phrase2 = `Je m'appelle ${prenom} et j'ai ${age} ans.`;

    document.getElementById("r2").innerHTML =
        phrase + "<br>" + "Après mise à jour : " + phrase2;
}


/* EXERCICE 3 */
function exo3() {
    let n = Number(document.getElementById("ex3").value);
    let msg = "";

    if (n < 0) msg = "Nombre négatif";
    else if (n <= 10) msg = "Petit";
    else if (n <= 50) msg = "Moyen";
    else if (n <= 100) msg = "Grand";
    else msg = "Très grand";

    document.getElementById("r3").innerHTML = msg;
}


/* EXERCICE 4 */
function exo4() {
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);

    let txt = "";

    for (let i = min; i <= max; i++) {
        if (i % 15 === 0) txt += i + " : Five&Three<br>";
        else if (i % 3 === 0) txt += i + " : Three<br>";
        else if (i % 5 === 0) txt += i + " : Five<br>";
        else txt += i + "<br>";
    }

    document.getElementById("r4").innerHTML = txt;
}


/* EXERCICE 5*/
function exo5() {
    let n = Number(document.getElementById("tab").value);
    let txt = "";

    for (let i = 1; i <= 10; i++) {
        txt += `${n} x ${i} = ${n * i}<br>`;
    }

    document.getElementById("r5").innerHTML = txt;
}


/* EXERCICE 6 */
function exo6() {
    let sommePairs = 0;
    let sommeImpairs = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) sommePairs += i;
        else sommeImpairs += i;
    }

    document.getElementById("r6").innerHTML =
        "Somme des pairs = " + sommePairs + "<br>" +
        "Somme des impairs = " + sommeImpairs;
}


/*  EXERCICE 7 */
function verifierMotDePasse(mdp) {
    return mdp.length >= 8 && mdp.includes("@");
}

function exo7() {
    let mdp = document.getElementById("mdp").value;

    if (verifierMotDePasse(mdp))
        document.getElementById("r7").innerHTML = "Mot de passe valide";
    else
        document.getElementById("r7").innerHTML = "Mot de passe non valide";
}


/* EXERCICE 8 */
function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

function exo8() {
    let total = Number(document.getElementById("total").value);
    let remise = Number(document.getElementById("remise").value);

    let resultat = totalAvecRemise(total, remise);

    document.getElementById("r8").innerHTML =
        "Total final = " + resultat + " DH";
}


/* EXERCICE 9 */
function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

function exo9() {
    let n = Number(document.getElementById("fact").value);
    document.getElementById("r9").innerHTML =
        "Factorielle = " + factorielle(n);
}


/* EXERCICE 10 */
function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) s += i;
    return s;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

function exo10() {
    let n = Number(document.getElementById("s10").value);

    let si = sommeIterative(n);
    let sr = sommeRecursive(n);

    let analyse = `
1) La version la plus lisible : itérative.<br>
2) La plus performante : itérative (moins d’appels).<br>
3) La récursion peut causer un dépassement de pile pour de grands n.<br>
4) On privilégie une boucle quand le problème est simple et répétitif.`;

    document.getElementById("r10").innerHTML =
        `Somme itérative = ${si}<br>
         Somme récursive = ${sr}<br><br>${analyse}`;
}
