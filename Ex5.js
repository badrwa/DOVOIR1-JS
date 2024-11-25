// Suppression des doublons dans un tableau

tableau= [2,4,5,6,7,8,9,10,11,3,5,3,7];

function removeDuplicates(tableau) {
    return [...new Set(tableau)];
    }
    
console.log(removeDuplicates(tableau));