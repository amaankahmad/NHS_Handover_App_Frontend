import axios from "axios";

// Need to replace this http link with the heroku backend link when this is up
const PERSON_API_BASE_URL = "http://localhost:8080/api/v1/persons"

class PersonService {
    getPersons() {
        return axios.get(PERSON_API_BASE_URL);
    }
}

export default new PersonService()