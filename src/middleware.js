export default store => {
    const { dispatch } = store;

    return next => action => {
        ['_PENDING', '_FULFILLED'].forEach((item, key) => {
            if (action.type.endsWith(item)) {
                dispatch({
                    type: `@@loadingAll/${key ? 'FINISHED' : 'STARTED'}`,
                    payload: action.type.replace(item, ''),
                });
            }
        });

        next(action);
    };
};