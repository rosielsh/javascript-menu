import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printStart() {
    Console.print("점심 메뉴 추천을 시작합니다.\n\n");
  }

  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printResult(coaches, categories, recommandResult) {
    Console.print("\n메뉴 추천 결과입니다.");
    Console.print("[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]");
    Console.print(`[ 카테고리 | ${categories.join(" | ")} ]`);

    for (let i = 0; i < recommandResult.length; i++) {
      Console.print(`[ ${coaches[i]} | ${recommandResult[i].join(" | ")} ]`);
    }

    Console.print("\n추천을 완료했습니다.");
  }

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
