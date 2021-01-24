import React from "react";
import PropTypes from "prop-types";

const Input = ({ secretWord }) => (
	<div data-test="component-input">

	</div>
);

Input.propTypes = {
	secretWord: PropTypes.string.isRequired
};

export default Input;
