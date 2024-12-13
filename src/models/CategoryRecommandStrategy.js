import { Random } from "@woowacourse/mission-utils";

class CategoryRecommandStrategy {
  static generate() {
    return Random.pickNumberInRange(1, 5);
  }
}

export default CategoryRecommandStrategy;
