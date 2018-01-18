import axios from 'axios'

const API_URL = 'https://swapi.co/api/'

export async function getPersonById({commit},id) {
    const response = await axios.get(`${API_URL}people/${id}`)
    const person = response.data
    commit('SET_PERSON',{id,person})
}
