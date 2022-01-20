import axios from "axios";

// Need to replace this http link with the heroku backend link when this is up
const HOSPITAL_PERSON_API_BASE_URL = "http://localhost:8080/api/v1/hospital_personnel"

class HospitalPersonnelService {
    getHospitalPersons() {
        return axios.get(HOSPITAL_PERSON_API_BASE_URL);
    }

    createHospitalPerson(hospitalPersonnel) {
        return axios.post(HOSPITAL_PERSON_API_BASE_URL+"/createHospitalPerson", hospitalPersonnel)
    }

    createJuniorDoctor(hospitalPersonnel) {
        return axios.post(HOSPITAL_PERSON_API_BASE_URL+"/createJuniorDoctor", hospitalPersonnel)
    }

    createConsultant(hospitalPersonnel) {
        return axios.post(HOSPITAL_PERSON_API_BASE_URL+"/createConsultant", hospitalPersonnel)
    }
}

export default new HospitalPersonnelService()