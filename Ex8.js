// Table de multiplication
function multiplication(x) {
    multiplication=[];
    for (let i = 0; i <=10; i++){
        multi= x * i;
        multiplication.push(multi);
        console.log(x +"*"+ i +"="+ multi);
    }
    return multiplication;

}
console.log(multiplication(2));
