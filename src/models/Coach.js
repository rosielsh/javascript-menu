import { generateError } from "../utils/generateError.js";

class Coach {
  #coach;
  #noEatFood;

  constructor(coach, noEatFood) {
    this.#coach = coach;
    this.#noEatFood = this.#setNoEatFood(coach, noEatFood);
  }

  isNoEatFood(name, food) {
    if (!this.#noEatFood.has(name)) {
      generateError("코치가 존재하지 않습니다.");
    }

    return this.#noEatFood.get(name).includes(food);
  }

  #setNoEatFood(coach, noEatFood) {
    const map = new Map();

    for (let idx = 0; idx < noEatFood.length; idx++) {
      map.set(coach[idx], noEatFood[idx]);
    }

    return map;
  }
}

export default Coach;
