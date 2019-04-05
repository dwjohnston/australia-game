import axios from "axios";

const BASE_URL = '/api';
const URI_STUDENTS = '/students';

const defaultOptions = {

}

export const makeApiCall = async function (uri, method = "GET", options = defaultOptions) {
    try {
        const response = await axios({
            ...options,
            method: method,
            url: BASE_URL + uri,
        });
        return response.data;
    } catch (err) {
        //We will handle this in the middleware
        throw err;
    }
}
export async function fetchAllStudents() {
    return makeApiCall(URI_STUDENTS);
}

export async function postStudent(student) {
    return makeApiCall(URI_STUDENTS, "POST", {
        data: student
    });
}

export async function patchStudent(student) {
    return makeApiCall(`${URI_STUDENTS}/${student.id}`, "PATCH", {
        data: student
    });
}

export async function deleteStudent(student) {
    return makeApiCall(`${URI_STUDENTS}/${student.id}`, "DELETE");
}