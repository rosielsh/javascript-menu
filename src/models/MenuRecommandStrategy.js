import { Random } from "@woowacourse/mission-utils";

class MenuRecommandStrategy {
  static generate(menus) {
    return Random.shuffle(menus)[0];
  }
}

export default MenuRecommandStrategy;
