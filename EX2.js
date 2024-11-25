// Vérification de palindromes

function isPalindrom(String) {
    let reversed = String.split('').reverse().join('');
    return String === reversed;

    
}
console.log(isPalindrom("dod"));