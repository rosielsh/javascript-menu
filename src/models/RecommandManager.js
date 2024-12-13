import { MENU } from "../constants/Menu.js";
import CategoryRecommandStrategy from "./CategoryRecommandStrategy.js";
import MenuRecommandStrategy from "./MenuRecommandStrategy.js";

class RecommandManager {
  static KEY = {
    1: "일식",
    2: "한식",
    3: "중식",
    4: "아시안",
    5: "양식",
  };

  #coach;
  #recommandedCategory;
  #recommandedMenuPerCoach;

  constructor(coach) {
    this.#coach = coach;
    this.#recommandedCategory = Array.from({ length: 5 }, () => 0);
    this.#recommandedMenuPerCoach = this.#setMap();
  }

  recommandMenu() {
    const recommandResut = [];
    const coaches = this.#coach.getCoach();

    const categories = [];

    for (let day = 0; day < 5; day++) {
      const categoryNumber = this.#getCategoryNumber();
      this.#recommandedCategory[categoryNumber - 1] += 1;
      categories.push(RecommandManager.KEY[categoryNumber]);
    }

    for (let coach of coaches) {
      recommandResut.push(this.#getRecommandResult(coach, categories));
    }

    return [categories, recommandResut];
  }

  #getRecommandResult(coach, categories) {
    const recommandMenu = [];

    categories.forEach((category) => {
      const menu = this.#getMenu(coach, MENU[category]);
      recommandMenu.push(menu);
      this.#recommandedMenuPerCoach.get(coach).add(menu);
    });

    return recommandMenu;
  }

  #getMenu(coach, menus) {
    let menu = null;

    while (menu === null) {
      const arr = Array.from({ length: menus.length }, (_, idx) => idx + 1);
      const menuNum = MenuRecommandStrategy.generate(arr);
      const recommandMenu = menus[menuNum - 1];
      if (this.#isPossibleMenu(coach, recommandMenu) && this.#noRecommandMenu(coach, recommandMenu)) {
        menu = recommandMenu;
        break;
      }
    }

    return menu;
  }

  #noRecommandMenu(coach, menu) {
    const recommandSet = this.#recommandedMenuPerCoach.get(coach);
    if (!recommandSet.has(menu)) return true;
    return false;
  }

  #getCategoryNumber() {
    let categoryNumber = null;

    while (categoryNumber === null) {
      const recommandCategory = CategoryRecommandStrategy.generate();
      if (this.#isPossibleCategory(recommandCategory)) {
        categoryNumber = recommandCategory;
        break;
      }
    }

    return categoryNumber;
  }

  #isPossibleCategory(number) {
    if (this.#recommandedCategory[number - 1] <= 1) return true;
    return false;
  }

  #isPossibleMenu(coach, menu) {
    if (this.#coach.isNoEatFood(coach, menu)) return false;
    return true;
  }

  #setMap() {
    const map = new Map();
    const coaches = this.#coach.getCoach();

    for (let coach of coaches) {
      map.set(coach, new Set());
    }

    return map;
  }
}

export default RecommandManager;
