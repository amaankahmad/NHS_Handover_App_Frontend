import axios from "axios";

// Need to replace this http link with the heroku backend link when this is up
const TASK_API_BASE_URL = "http://localhost:8080/api/v1/tasks"

class FollowUpTaskService {

    createFollowUpTask(oldTask, followUpTask) {
        return axios.post(TASK_API_BASE_URL+"/createFollowUpTask", oldTask, followUpTask)
    }
}

export default new FollowUpTaskService()