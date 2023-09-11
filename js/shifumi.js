const VALEURS_POSSIBLES = ["pierre", "feuille", "ciseaux"]

const pierreBouton = document.getElementById("pierre")
const feuilleBouton = document.getElementById("feuille")
const ciseauxBouton = document.getElementById("ciseaux")

const joueurSpan = document.getElementById("joueur")
const robotSpan = document.getElementById("robot")
const resultatSpan = document.getElementById("resultat")

let valeurJoueur, 
    valeurRobot, 
    resultat

pierreBouton.addEventListener("click", e => shifumi("pierre"))
feuilleBouton.addEventListener("click", e => shifumi("feuille"))
ciseauxBouton.addEventListener("click", e => shifumi("ciseaux"))

function shifumi(valeur) {
    valeurJoueur = valeur;
    valeurRobot = genererValeurRobot()

    joueurSpan.textContent = valeurJoueur
    robotSpan.textContent = valeurRobot

    if (valeurJoueur == valeurRobot)
        resultat = "Égalité !"
    else
        resultat = VALEURS_POSSIBLES.indexOf(valeurJoueur) == (VALEURS_POSSIBLES.indexOf(valeurRobot) + 1) % 3 ? "Gagné !" : "Perdu !"
        
    resultatSpan.textContent = resultat
}

function genererValeurRobot() {
    let indice = Math.trunc((Math.random() * 3))
    return VALEURS_POSSIBLES[indice]
}
