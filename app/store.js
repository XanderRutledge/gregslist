import Car from "./Models/Car.js";
import House from "./Models/House.js"
import Job from "./Models/Job.js"

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ title: "cheese", make: "italy", model: "mozzarella", price: "10000", description: "pizza time", imgUrl: "https://payload.cargocollective.com/1/1/59436/923743/Car-Web.jpg" })
  ],

  /** @type {House[]} */
  houses: [
    new House({ address: "1234 this street", squarefootage: "1234", price: "123456", description: "123456789", imgUrl: "//placehold.it/200x200" })
  ],

  /** @type {Job[]} */
  jobs: [
    new Job({ position: "fry cook", wage: ".25", location: "krusty krab", description: "dont be square" })
  ],

};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addCar(car) {
    _state.cars.push(car)
  }
  removeCar(id) {
    // NOTE find the index of the car with the provided id
    let index = _state.cars.findIndex(c => c.id == id)
    // NOTE check to make sure it was found
    if (index == -1) {
      console.error("invalid id")
      return;
    }
    _state.cars.splice(index, 1)
  }

  addHouse(house) {
    _state.houses.push(house)
  }

  removeHouse(id) {
    let index = _state.houses.findIndex(h => h.id == id)
    if (index == -1) {
      console.error("not this time")
      return;
    }
    _state.houses.splice(index, 1)
  }

  addJob(job) {
    _state.jobs.push(job)
  }

  removeJob(id) {
    let index = _state.jobs.findIndex(j => j.id == id)
    if (index == -1) {
      console.error("not this time")
      return;
    }
    _state.jobs.splice(index, 1)
  }
}

const STORE = new Store();
export default STORE;
