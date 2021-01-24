/**
 * @function getLetterMatchCount
 * @param {string} guessedWord - The word guessed by the user. 
 * @param {string} secretWord - The word the user is trying to guess.
 * @returns {number} - Number of letters matched between the guessed and secret words.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
	const secretLetterSet = new Set(secretWord.split(""));
	const guessedLetterSet = new Set(guessedWord.split(""));
	return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
};
