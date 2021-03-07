import React from "react";
import PropTypes from "prop-types";
import successContext from "./contexts/successContext";
import languageContext from "./contexts/languageContext";
import stringsModule from "./helpers/strings";

const Input = ({ secretWord }) => {
	const language = React.useContext(languageContext);
	const [success, setSuccess] = successContext.useSuccess(false);
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
					onChange={(event) => setCurrentGuess(event.target.value)} />
				<button
					data-test="submit-button"
					onClick={(event) => {
						event.preventDefault();
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
