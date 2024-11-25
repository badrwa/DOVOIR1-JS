// Tri des mots par longueur
let string="my name is badr ";
function triParLongueur(string) {
    let mots = string.split(" ");
    let tri = mots.sort((a, b) => a.length - b.length);
    return tri;
}
console.log(triParLongueur(string));


