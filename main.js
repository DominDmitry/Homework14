function SumOfNum() { 
    let result = 0; 
    return function(num) { 
        result = result + num;
        return result; 
    } 
};

const sum = SumOfNum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
