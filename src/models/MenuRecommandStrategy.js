import { Random } from "@woowacourse/mission-utils";

class MenuRecommandStrategy {
  static generate(menus) {
    const arr = Array.from({ length: menus.length }, (_, idx) => idx);
    return menus[Random.shuffle(arr)[0]];
  }
}

export default MenuRecommandStrategy;
