// Somme des paires égales à une cible
let tableau =[1,2,3,4,5,6,7,8];
let cible = 9;
function findPaires(tableau,cible) {
let paires = [];
for (let i = 0; i < tableau.length; i++) {
    for (let j = i+1; j < tableau.length-1; j++) {
        if (tableau[i]+tableau[j] == cible) {
            paires.push([tableau[i], tableau[j]]);
        }
    }
}
    return paires;
}

console.log(findPaires(tableau, cible));