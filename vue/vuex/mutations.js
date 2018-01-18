import {SET_PERSON} from './mutationTypes'

export default {
    [SET_PERSON](state,{id,person}){
        state.persons = state.persons || []
        state.persons[id] = person
    }
}
