export function subscriptionRequest(item) {
    return {
        type: '@subs/SUBSCRIPTION_REQUEST',
        payload: { item }
    }
};

export function subscriptionSuccess(data) {
    return {
        type: '@subs/SUBSCRIPTION_REQUEST',
        payload: { data }
    }
};

export function subscriptionFailure() {
    return {
        type: '@subs/SUBSCRIPTION_REQUEST',
    }
};