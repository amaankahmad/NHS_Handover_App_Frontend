import axios from "axios";
import HospitalPersonnelService from "../SignUp/HospitalPersonnelService";
import HandoverService from "../Handover/HandoverService";

// Need to replace this http link with the heroku backend link when this is up
const TASK_API_BASE_URL = "http://localhost:8080/api/v1/tasks"

class FollowUpTaskService {

    createFollowUpTask(oldTask, followUpTask) {
        // HandoverService.archiveTask(oldTask).then(res => {});
        // return axios.delete(TASK_API_BASE_URL+"/archiveTask", oldTask);
        let task = {patient: oldTask.patient, seniority: "", notes: oldTask.notes,
            // History will be N/A since this is a new task and not a follow up task
            history: 'N/A', taskDescript: oldTask.taskDescript, creationTime: oldTask.creationTime};
        return axios.delete(TASK_API_BASE_URL+"/archiveTask"+oldTask.id, followUpTask)
    }

    getTask(id) {
        return axios.get(TASK_API_BASE_URL+"/getTask/"+id)
    }
}

export default new FollowUpTaskService()