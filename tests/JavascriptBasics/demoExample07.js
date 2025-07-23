/*
Array with Javascript
*/

let arrayDemo = [345, "Demo", true, 203.39];


arrayDemo.forEach(function(val, ind){

    console.log(val + "   - "+ind);

})




console.log(arrayDemo.length);

console.log(arrayDemo[0]);

console.log(arrayDemo[1]);

const de  = 10;
const demoColor = ["Red", "Black", "Orange"];

const demoColor1 = ["Indigo"];
const demoColor2 = ["Violet"];

demoColor.push("Blue");
console.log(demoColor);
demoColor.pop();
console.log(demoColor);
demoColor.shift();
console.log(demoColor);
demoColor.unshift("White");
console.log(demoColor);
demoColor[0] = "Yellow";
console.log(demoColor);
let result =demoColor.concat(demoColor1,demoColor2);
console.log(result);

// i++ -> post increment
// ++i -> pre increment
// i-- -> post decrement
// --i -> pre decrement

for (let i = 0;i<result.length;i++) 
{
    console.log(result[i]);
    if(result[i]==='Volet')
    {
        console.log("Test Case is Passed")
    }
    else{
        console.log("Test Case is Failed")
        
    }

}   

result.forEach(function(colorsdemodemo, i){

    console.log(i + "  --> " + colorsdemodemo);
})
