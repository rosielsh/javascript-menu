import Coach from "../../src/models/Coach.js";

describe("RecommandManager 클래스 테스트", () => {
  test("한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.", () => {
    const coach = new Coach(["토미", "제임스", "포코"], [["우동"], ["뇨끼"]]);
    const manager = new RecommandManager(coach);
    const recommandResult = manager.recommandMenu();

    const cnt = {};

    for (let r of recommandResult) {
      cnt[r[0]] += 1;
    }

    console.log(cnt);

    Object.entries(cnt).forEach(([category, cnt]) => {
      expect(cnt).toBeLessThanOrEqual(2);
    });
  });
});
