const add = (a, b) => a + b;
const generateGreeting = name => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should add "Hello" at the beginning of the string', () => {
  const result = generateGreeting("Seba");
  expect(result).toBe("Hello Seba");
});
