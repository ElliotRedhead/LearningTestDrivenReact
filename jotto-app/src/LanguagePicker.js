import React from "react";
import propTypes from "prop-types";

const LanguagePicker = ({ setLanguage }) => {

	return(
		<div data-test="component-language-picker">

		</div>
	);
};

LanguagePicker.propTypes = {
	setLanguage: propTypes.func.isRequired
};

export default LanguagePicker;
