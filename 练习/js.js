var a = 1;

function test(a) {
    a=100;
    console.log(a);
    return a;        
}     

a=test(a); 
console.log(a);