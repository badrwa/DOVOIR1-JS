// Recherche du deuxième plus grand élément
tableau =[2,6,9,12,0,10];

function secondLargest(tableau) {
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for(let i = 0; i < tableau.length; i++) {
        if (tableau[i] > max) {
            secondMax = max;
            max = tableau[i];
        } else if (tableau[i] > secondMax && tableau[i] < max) {
            secondMax = tableau[i];
        }
        }
        return secondMax;
        }
        
console.log(secondLargest(tableau)); 