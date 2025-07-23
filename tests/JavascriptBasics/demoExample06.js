const number = 333.3124;

const [integerPartStr, decimalPartStr] = number.toString().split('.');
//integerPartStr, decimalPartStr - In String format

const integerPart = parseInt(integerPartStr, 10);
const decimalPart = parseInt(decimalPartStr, 10);

function checkEvenOrOdd(value, label) {
  if (value % 2 === 0) {
    console.log(`${label} (${value}) is EVEN`);
    // console.log(`${label} jnadsjn ksdnas `)
    // console.log(' ')
    // console.log(" ")

  } else {
    console.log(`${label} (${value}) is ODD`);
  }
}

checkEvenOrOdd(integerPart, "Integer part");
checkEvenOrOdd(decimalPart, "Decimal part");



// const number = 3948.432943;

// // Get integer and decimal parts
// const integerPart = Math.floor(number);
// const decimalPart = parseInt((number - integerPart).toFixed(10).split('.')[1], 10);

// // Function to check even or odd
// function checkEvenOrOdd(value, label) {
//   console.log(`${label} (${value}) is ${value % 2 === 0 ? 'EVEN' : 'ODD'}`);
// }

// // Check
// checkEvenOrOdd(integerPart, "Integer part");
// checkEvenOrOdd(decimalPart, "Decimal part");