import Coach from "../../src/models/Coach.js";
import RecommandManager from "../../src/models/RecommandManager.js";

describe("RecommandManager 클래스 테스트", () => {
  test("한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.", () => {
    const coach = new Coach(["토미", "제임스", "포코"], [["우동"], ["뇨끼"], []]);
    const manager = new RecommandManager(coach);
    const recommandResult = manager.recommandMenu();

    const cnt = {};

    for (let r of recommandResult) {
      const category = r[0];
      if (!cnt[category]) cnt[category] = 0;

      cnt[r[0]] += 1;
    }

    Object.entries(cnt).forEach(([category, cnt]) => {
      expect(cnt).toBeLessThanOrEqual(2);
    });
  });

  test("한 주에 중복되지 않은 메뉴를 추천해야 한다.", () => {
    const coach = new Coach(["토미", "제임스", "포코"], [["우동"], ["뇨끼"], []]);
    const manager = new RecommandManager(coach);
    const recommandResult = manager.recommandMenu();

    const recommandMap = new Map();

    for (let coach = 1; coach < recommandResult[0].length; coach++) {
      const set = new Set();

      for (let day = 0; day < 5; day++) {
        set.add(recommandResult[day][coach]);
      }

      recommandMap.set(coach, set);
    }

    for (let [key, value] of recommandMap) {
      expect(value.size).toEqual(5);
    }
  });
});
