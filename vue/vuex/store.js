import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'https://swapi.co/api/'

export function createStore(){
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            async getPersonById({commit},id) {
                const response = await axios.get(`${API_URL}people/${id}`)
                const person = response.data
                commit('setPerson',{id,person})
            }
        },
        mutations: {
            setPerson(state,{id,person}){
                state.persons = state.persons || []
                state.persons[id] = person
            }
        }
    })
}