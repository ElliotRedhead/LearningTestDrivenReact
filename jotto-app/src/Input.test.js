import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 * Setup function for app component.
 * @param {string} secretWord - The string that the user is attempting to guess.
 * @returns {ShallowWrapper} The App component wrapper.
 */
const setup = (secretWord="party") => {
	return shallow(<Input secretWord={secretWord}/>);

};

test("App renders without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-input");
	expect(component.length).toBe(1);
});

test("Does notthrowwarning with expected props", () => {
	checkProps(Input, { secretWord: "party" });
});
