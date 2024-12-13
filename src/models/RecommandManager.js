import { MENU } from "../constants/Menu";
import CategoryRecommandStrategy from "./CategoryRecommandStrategy";
import MenuRecommandStrategy from "./MenuRecommandStrategy";

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

    // 월~금
    for (let day = 0; day < 5; day++) {
      const categoryNumber = this.#getCategoryNumber();
      const menus = MENU[RecommandManager.KEY[categoryNumber]];

      const recommandMenu = [];

      for (let coach of coaches) {
        const menu = this.#getMenu(coach, menus);
        recommandMenu.push(menu);

        const set = this.#recommandedMenuPerCoach.get(coach);
        set.add(menu);
      }

      this.#recommandedCategory[categoryNumber - 1] += 1;
      recommandResut.push([RecommandManager.KEY[categoryNumber], ...recommandMenu]);
    }

    console.log(this.#recommandedCategory);
    return recommandResut;
  }

  #getMenu(coach, menus) {
    let menu = null;

    while (menu === null) {
      const recommandMenu = MenuRecommandStrategy.generate(menus);
      if (this.#isPossibleMenu(coach, recommandMenu) && this.#noRecommandMenu(coach, recommandMenu)) {
        menu = recommandMenu;
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
