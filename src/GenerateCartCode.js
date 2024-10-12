
function generateRandomAlphanumeric(length=10){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567889';
    let result = " ";

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result;

}

export const randomValue = generateRandomAlphanumeric();