import React from "react";
import PropTypes from "prop-types";
import guessedWordsContext from "./contexts/guessedWordsContext";
import successContext from "./contexts/successContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";
import { getLetterMatchCount } from "./helpers";

const Input = ({ secretWord }) => {
	const language = React.useContext(languageContext);
	const [success, setSuccess] = successContext.useSuccess(false);
	const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords();
	const [currentGuess, setCurrentGuess] = React.useState("");

	if (success) {
		return null;
	}

	return (
		<div data-test="component-input">
			<form className="form-inline">
				<input
					data-test="input-box"
					className="mb-2 mx-sm-3"
					type="text"
					placeholder={stringsModule.getStringByLanguage(language, "guessInputPlaceholder")}
					vaue={currentGuess}
					onChange={event => setCurrentGuess(event.target.value)} />
				<button
					data-test="submit-button"
					onClick={event => {
						event.preventDefault();
						const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
						// Lettermatchcount can use shorthand as the key is the same as the variable that contains the value
						const newGuessedWords = [...guessedWords, { guessedWord: currentGuess, letterMatchCount }];
						setGuessedWords(newGuessedWords);

						if (currentGuess === secretWord){
							setSuccess(true);
						}
						// Clear input box
						setCurrentGuess("");
					}}
					className="btn btn-primary mb-2">
					{stringsModule.getStringByLanguage(language, "submit")}
				</button>
			</form>

		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired
};

export default Input;
