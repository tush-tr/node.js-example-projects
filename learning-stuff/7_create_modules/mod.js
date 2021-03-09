console.log("This is module");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;

}

function sum(a,b){
    return a+b;
}

module.exports = {
    
    avg: average,
    name: "Tushar",
    sum: sum,

}
