function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//hello

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

//Summing numbers!
//num1 is: 3
//num2 is: 5
//summing numbers!
//num1L is: 4
//num2 is: 7
//8
//11
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
var output = highFive(6)
console.log(output)

//nothing, but if you pass num =6 and return the function, you will get
//0
//1
//2
//3
//4
//High Five!
//undefined


