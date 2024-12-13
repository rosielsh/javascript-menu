import Converter from "../converter/Converter.js";
import Coach from "../models/Coach.js";
import RecommandManager from "../models/RecommandManager.js";
import InputHandler from "../utils/InputHandler.js";
import CoachValidator from "../validators/CoachValidator.js";

class RecommandController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async recommand() {
    const coachInput = await InputHandler.repeatUntilValidInput(() => this.#getCoach());
    const noEatFood = [];

    for (let coach of coachInput) {
      noEatFood.push(await InputHandler.repeatUntilValidInput(() => this.#getFoods(coach)));
    }

    const coach = new Coach(coachInput, noEatFood);
    const manager = new RecommandManager(coach);
    const recommandResult = manager.recommandMenu();
    this.#outputView.printResult(coachInput, recommandResult);
  }

  async #getCoach() {
    const coach = await this.#inputView.readCoach();
    const convertedCoach = Converter.convertStringToArr(coach);
    CoachValidator.validateCoach(convertedCoach);
    return convertedCoach;
  }

  async #getFoods(coach) {
    const foods = await this.#inputView.readNoEatFood(coach);
    const convertedFood = Converter.convertStringToArr(foods);
    CoachValidator.validateFood(convertedFood);
    return convertedFood;
  }
}

export default RecommandController;
