import _houseService from "../Services/HousesService.js"
import _store from "../store.js";



function _draw() {
    let houses = _store.State.houses
    let template = ''
    houses.forEach(h => template += h.Template);
    document.getElementById("houses").innerHTML = template;
}


export default class HouseController {
    constructor() {
        _draw();
    }
    newHouse(event) {
        event.preventDefault();
        let formData = event.target
        let rawHouse = {
            address: formData.address.value,
            squarefootage: formData.squarefootage.value,
            description: formData.description.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value
        }
        formData.reset();
        _houseService.newHouse(rawHouse)
        _draw();
    }



    buy(id) {
        _houseService.buy(id);
        _draw();
    }

}