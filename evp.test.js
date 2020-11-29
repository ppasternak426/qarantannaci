import ExactValueProvider from "./src/ExactValueProvider.js";

test('ExactValueProvider giveMeOneHundredth return 0.01', () => {
	const evp = new ExactValueProvider()
	expect(evp.giveMeOneHundredth()).toBe(0.01);
});