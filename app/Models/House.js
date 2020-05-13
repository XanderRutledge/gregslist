import { generateId } from "../Utils.js"


export default class House {
    constructor(data) {
        this.id = generateId()
        this.address = data.address
        this.price = data.price
        this.squarefootage = data.squarefootage
        this.description = data.description
        this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    }

    get Template() {
        return /*html*/`
        <div class="col-3 mt-2">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.address}</h4>
                    <p class="card-text">${this.squarefootage}sq/ft - $${this.price}</p>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-outline-success" onclick="app.houseController.buy('${this.id}')">Buy!</button>
                </div>
            </div>
        </div>`
    }
}
