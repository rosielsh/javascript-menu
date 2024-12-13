import CoachValidator from "../../src/validators/CoachValidator.js";

describe("CoachValidator 클래스 테스트", () => {
  test("코치의 이름은 최소 2글자, 최대 4글자이다", () => {
    const names = ["루루", "포코", "신디"];

    expect(() => CoachValidator.validateCoach(names)).not.toThrow();
  });

  test("코치의 이름이 2~4글자의 문자열이 아니면 에러가 발생한다", () => {
    const names = ["루루", "신디신디신디"];

    expect(() => CoachValidator.validateCoach(names)).toThrow("[ERROR]");
  });

  test("코치가 2~5명이 아니면 에러가 발생한다", () => {
    const names = [["루루", "신디", "포코", "토미", "제임스", "나나"], ["제임스"]];

    names.forEach((name) => {
      expect(() => CoachValidator.validateCoach(name)).toThrow("[ERROR]");
    });
  });
});
