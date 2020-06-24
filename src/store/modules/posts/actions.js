export function PostRequest(form, navigation) {
    return {
        type: '@post/POST_REQUEST',
        payload: { form },
        payload2: { navigation }
    }
};

export function PostSuccess(form) {
    return {
        type: '@post/POST_SUCCESS',
        payload: { form }
    }
};