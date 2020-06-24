import produce from "immer"

const INITIAL_STATE = {
    allposts: [],
}

export default function posts(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "@post/POST_SUCCESS": 
            return produce(state, draft => {
                draft.allposts = action.payload
            })
        default:
        return state
    }
};