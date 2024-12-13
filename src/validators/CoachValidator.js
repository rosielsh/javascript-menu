import { generateError } from "../utils/generateError.js";

class CoachValidator {
  static validateCoach(names) {
    this.#validateInvalidValue(names);
    this.#validateLength(names);
    this.#validateCount(names);
  }

  static validateFood(foods) {
    this.#validateFoodLength(foods);
  }

  static #validateInvalidValue(names) {
    const invalid = [NaN, null, undefined, ""];

    if (invalid.includes(names)) {
      generateError("비정상적인 입력입니다.");
    }
  }

  static #validateLength(names) {
    if (names.some((name) => name.length < 2 || name.length > 4)) {
      generateError("코치의 이름은 최소 2글자, 최대 4글자 입니다.");
    }
  }

  static #validateCount(names) {
    if (names.length < 2 || names.length > 5) {
      generateError("코치는 최소 2명, 최대 5명까지 식사를 함께할 수 있습니다.");
    }
  }

  static #validateFoodLength(foods) {
    if (foods.length > 2) {
      generateError("못 먹는 음식은 최대 2개입니다.");
    }
  }
}

export default CoachValidator;
