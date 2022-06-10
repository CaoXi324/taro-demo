import { CHANGE_LANGUAGE } from "../constants";

const INITIAL_STATE = {
    language: '中文'
}

export default function languageSelector(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload 
            }
        default:
            return state
    }
}