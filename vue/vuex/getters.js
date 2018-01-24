export const getPersonById = (state) => (id) => {
    return state.people[id]
}

export const loading = (state) => state.loading
