// Calcul des fréquences
let string="badr moutaouakil";
function charFrequency(string) {
    let frequency = {};
    for (let char of string) {
        if (char in frequency) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
        }
        return frequency;

}
    console.log(charFrequency(string));









   
