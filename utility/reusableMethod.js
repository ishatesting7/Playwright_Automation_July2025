function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateRandomDate() {
    const start = new Date(2020, 0, 1);
    const end = new Date(2100, 11, 31);
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
}

// Example usage:
// console.log(generateRandomString(10)); // e.g., 'aB3dE5gH1J'
// console.log(generateRandomDate()); // e.g., '2023-07-15'

module.exports = { generateRandomString,
    generateRandomDate
 };