import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printResult(coaches, recommandResult) {
    Console.print("\n메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");

    const categories = [];
    const menu = [];

    for (let row = 0; row < recommandResult.length; row++) {
      categories.push(recommandResult[row][0]);
    }

    for (let col = 1; col < recommandResult[0].length; col++) {
      const coachMenu = [];
      for (let row = 0; row < recommandResult.length; row++) {
        coachMenu.push(recommandResult[row][col]);
      }

      menu.push(coachMenu);
    }

    Console.print(`[ 카테고리 | ${categories.join(" | ")} ]`);

    for (let i = 0; i < coaches.length; i++) {
      Console.print(`[ ${coaches[i]} | ${menu[i].join(" | ")} ]`);
    }

    Console.print("\n추천을 완료했습니다.");
  }

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
