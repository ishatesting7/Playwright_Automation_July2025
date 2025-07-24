//String Examples
let str = "Hello I am new to Javascript";

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.charAt(5));

console.log(str.includes('new'));

console.log(str.indexOf("new"));

console.log(str.slice(1, 5));

//Check weather given string is Anagram or Not
// word 1 -> listen
// word 2 -> silent

function isAnagramDemo(str1, str2)
{
    let word1 = str1.toLowerCase();
    let word2 = str2.toLowerCase();

    if(word1.length === word2.length)
    {
        //'s'  'i' 'l' 'e'
        if(word1.split('').sort().join() === word2.split('').sort().join() )
        {
            console.log("It is Anagram");
        }
    }
    else
    {
        console.log('Both the words are not Anagram set')
    }
}

isAnagramDemo('silent', 'ilstne')

//CSS