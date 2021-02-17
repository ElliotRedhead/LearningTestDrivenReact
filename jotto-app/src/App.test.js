import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

/**
 * Setup function for app component.
 * @returns {ReactWrapper} The App component wrapper.
 */
const setup = () => {
	mockGetSecretWord.mockClear();
	hookActions.getSecretWord = mockGetSecretWord;

	// using mount as useeffect is not called on "shallow"
	return mount(<App />);

};

test("App renders without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-app");
	expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
	test("getSecretWord gets called on App mount", () => {
		setup();

		//check to see if secret word was updated
		expect(mockGetSecretWord).toHaveBeenCalled();
	});
	test("secretWord does not update on App update", () => {
		const wrapper = setup();
		// is called with first render as expected, so clear this to test no additional calls made
		mockGetSecretWord.mockClear();

		// wrapper.update() doesn't trigger update so setProps used as workaround
		wrapper.setProps();

		expect(mockGetSecretWord).not.toHaveBeenCalled();
	});
});
