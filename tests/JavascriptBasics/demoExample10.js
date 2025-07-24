let m =12.4;
let n =10;

// Tan HyperBolic

console.log(Math.round(m));
console.log(Math.abs(-m));

console.log(Math.ceil(m));
console.log(Math.floor(m));

console.log(Math.random());
console.log(Math.sqrt(64));

console.log(Math.cbrt(8));

//console.log(Math.sin((30/180)*Math.PI));
//valid email id - demo8749@hotmail.com

function generateRandomEmailAddress()
{
    const chr = 'abcdefghijklmnopqrstuvxyz0123456789'

    let username = '';

    for(let i = 0; i < 6; i++)
    {
        username = username + chr.charAt(Math.random()*chr.length);
    }

    console.log(`${username}testing@hotmail.com`);
}

generateRandomEmailAddress();


