import React from "react";
import "./App.css";
import hookActions from "./actions/hookActions";

import Input from "./Input";

/**
 * Reducer to update state, called automatically by dispatch.
 * @param {object} state - Existing state
 * @param {object} action - Contains 'type' and 'payload' properties 
 *                        e.g. { type: "setSecretWord", payload:"party" }
 * @returns {object} - New state
 */
const reducer = (state, action) => {

	switch(action.type) {
	case "setSecretWord":
		return {...state, secretWord: action.payload };
	default:
		throw new Error(`Invalid action type: ${action.type}`);
	}
	
};

const App = () => {

	const [state, dispatch] = React.useReducer(reducer,{ secretWord: null});

	const setSecretWord = (secretWord) => dispatch({type:"setSecretWord", payload:secretWord});

	React.useEffect(
		() => {hookActions.getSecretWord(setSecretWord);},
		[]
	);

	return (
		<div data-test="component-app">
			<Input secretWord={state.secretWord}/>
		</div>
	);
};

export default App;
