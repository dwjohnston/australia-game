export function createEmptyStudent() {
    return {
        id: "",
        name: "",
        priceUsd: "",
    }
}

export function isUpdateLoading(state) {
    return state.loadingFlags.studentUpdate;
}

export function selectAllStudents(state) {
    return Object.values(state.students)
}

export function selectStudentByStudentId(state, id) {
    return state.students[id];
}

export function selectErrors(state) {
    return state.errors.errors;
}

export function selectCurrencyRate(state) {
    return state.currencyRate.rate;
}