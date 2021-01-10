import { useContext, useEffect, useState } from "react";
import "./App.css";
import TestContext from "./contexts/TestContext";


const App = () => {

	const {contextValue, setContextValue} = useContext(TestContext);
	const [formText, setFormText] = useState("");

	useEffect(() => {
		console.log("context here: ", contextValue);
	}, [contextValue]);
 
	const handleChange = (e) => {
		setFormText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setContextValue(formText);
	};
  
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<label htmlFor="example">Example: </label>
				<input
					type='text'
					value={formText}
					onChange={handleChange}
				/>
				<button>DO IT</button>
			</form>
		</div>
	);
};

export default App;
