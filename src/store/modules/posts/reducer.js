import produce from "immer"

const INITIAL_STATE = {
    allposts: null
}

export default function Post(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "@post/POST_REQUEST": 
        return produce(state, draft => {
            draft.allposts = action.payload
        })
        default:
        return state
    }
};