import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printResult(recommandResult) {
    Console.print("메뉴 추천 결과입니다.");
    Console.print("");

    Console.print("\n추천을 완료했습니다.");
  }

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
