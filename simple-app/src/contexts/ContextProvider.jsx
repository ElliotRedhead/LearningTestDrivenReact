import React, { useState } from "react";
import TestContext from "./TestContext";
import PropTypes from "prop-types";

const ContextProvider = ({ children }) => {
	const [contextValue, setContextValue] = useState("Hello there");
	
	const context = {
		setContextValue,
		contextValue,
	};

	return (
		<TestContext.Provider value={ context }> 
			{children}
		</TestContext.Provider>
	);
};
export default ContextProvider;

ContextProvider.propTypes = {
	children: PropTypes.object
};
