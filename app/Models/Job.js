import { generateId } from "../Utils.js";


export default class Job {
    constructor(data) {
        this.id = generateId()
        this.position = data.position
        this.wage = data.wage
        this.location = data.location
        this.desription = data.desription
        this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    }

    get Template() {
        return /*html*/`
        <div class="col-3 mt-2">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.position}</h4>
                    <p class="card-text">${this.wage}$ - ${this.location}</p>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-outline-success" onclick="app.jobController.apply('${this.id}')">Apply!</button>
                </div>
            </div>
        </div>`
    }
}