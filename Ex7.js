// Compter les mots uniques
function countUniqueWords(phrase) {
    // Utiliser un Set pour stocker les mots uniques
    const uniqueWords = new Set();

    // Séparer la phrase en mots
    const words = phrase.toLowerCase().split(' ');

    // Parcourir chaque mot
    for (const word of words) {
        // Ajouter le mot à la liste des mots uniques
        uniqueWords.add(word);
    }

    // Retourner le nombre de mots uniques
    return uniqueWords.size;
}
console.log(countUniqueWords("hello world this is my wonderful world"));

