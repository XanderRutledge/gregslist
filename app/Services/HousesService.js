import STORE from "../store.js"
import House from "../Models/House.js";



class HouseService {
    buy(id) {
        STORE.removeHouse(id)
    }

    newHouse(rawHouse) {
        let house = new House(rawHouse)
        STORE.addHouse(house)
    }
}

const House_Service = new HouseService();
export default House_Service;