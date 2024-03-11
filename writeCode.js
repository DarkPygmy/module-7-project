function addToZero(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            if (sum === 0) {
                return true;
            }
        }
    }
    return false;
}



console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

function hasUniqueChars(word) {
    const characters = word.split('');
    const uniqueCharacters = new Set(characters);
    return uniqueCharacters.size === characters.length;
}




console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False

function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    const alphabetPresence = Array(26).fill(false);
    for (let char of lowerCaseSentence) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            const index = charCode - 97;
            alphabetPresence[index] = true;
        }
    }
    return alphabetPresence.every(present => present);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

function findLongestWord(words) {
    return words.reduce((maxLength, word) => {
        return Math.max(maxLength, word.length);
    }, 0);
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5