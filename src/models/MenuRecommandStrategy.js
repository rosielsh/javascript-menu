import { Random } from "@woowacourse/mission-utils";

class MenuRecommandStrategy {
  static generate(menu) {
    return Random.shuffle(menu)[0];
  }
}

export default MenuRecommandStrategy;
