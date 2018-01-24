import {SET_PERSON,SET_LOADING_STATE} from './mutationTypes'

export default {
    [SET_PERSON](state,{id,person}){
        state.people = state.people || []
        state.people[id] = person
    },
    [SET_LOADING_STATE](state,{isLoading}){
        state.loading = isLoading
    }
}
