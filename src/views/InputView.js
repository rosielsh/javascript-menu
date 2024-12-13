import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readCoach() {
    return await Console.readLineAsync("점심 메뉴 추천을 시작합니다.\n\n코치의 이름을 입력해 주세요. (, 로 구분)\n");
  }

  static async readNoEatFood(coach) {
    return await Console.readLineAsync(`\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`);
  }
}

export default InputView;
