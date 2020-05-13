import STORE from "../store.js"
import _jobService from "../Services/JobsService.js"


function _draw() {
    let jobs = STORE.State.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById("jobs").innerHTML = template
}


export default class JobController {
    constructor() {
        _draw();
    }

    newJob(event) {
        event.preventDefault();
        let formData = event.target
        let rawJob = {
            position: formData.position.value,
            wage: formData.wage.value,
            description: formData.description.value,
            location: formData.location.value,
            imgUrl: formData.imgUrl.value
        }
        formData.reset();
        _jobService.newJob(rawJob)
        _draw();
    }

    apply(id) {
        _jobService.apply(id)
        _draw()
    }

}