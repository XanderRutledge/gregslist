import STORE from "../store.js";
import Job from "../Models/Job.js";




class JobService {
    apply(id) {
        STORE.removeJob(id)
    }

    newJob(rawJob) {
        let job = new Job(rawJob)
        STORE.addJob(job)
    }

}


const Job_Service = new JobService();
export default Job_Service;