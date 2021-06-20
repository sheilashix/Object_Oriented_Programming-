const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Kenyatta university";
  const e = new Intern("Kemboi", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("kemboi", 1, "test@test.com", "Kenyatta University");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Kenyatta University";
  const e = new Intern("kemboi", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});