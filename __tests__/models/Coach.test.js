describe("Coach 클래스 테스트", () => {
  test("코치가 못 먹는 음식인지 확인할 수 있다.", () => {
    const coachInput = ["토미", "제임스", "포코"];
    const noEatFood = [
      ["우동", "스시"],
      ["뇨끼", "월남쌈"],
      ["마파두부", "고추잡채"],
    ];

    const coach = new Coach(coachInput, noEatFood);

    expect(coach.isNoEatFood("토미", "우동")).toEqual(true);
    expect(coach.isNoEatFood("토미", "뇨끼")).toEqual(false);
    expect(coach.isNoEatFood("제임스", "월남쌈")).toEqual(true);
    expect(coach.isNoEatFood("포코", "스시")).toEqual(false);
  });
});
