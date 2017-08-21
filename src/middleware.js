export default store => {
    const { dispatch } = store;

    return next => action => {
        ['_PENDING', '_FULFILLED', '_REJECTED'].forEach((item, key) => {
            if (action.type.endsWith(item)) {
                dispatch({
                    type: `@@loadingAll/${!key ? 'STARTED' : 'FINISHED'}`,
                    payload: action.type.replace(item, ''),
                });
            }
        });

        next(action);
    };
};