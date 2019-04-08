export function createEmptyStudent() {
    return {
        id: "",
        name: "",
        priceUsd: "",
    }
}

export function selectAllStudents(state) {
    return Object.values(state.students)
}

export function selectStudentByStudentId(state, id) {
    return state.students[id];
}