import axios from 'axios'
import {SET_PERSON,SET_LOADING_STATE} from './mutationTypes'

const API_URL = 'https://swapi.co/api/'

export async function getPersonById({commit},id) {
    const response = await axios.get(`${API_URL}people/${id}`)
    const person = response.data
    commit(SET_PERSON,{id,person})
}

export function setLoadingState({commit},isLoading){
    commit(SET_LOADING_STATE,{isLoading})
}
