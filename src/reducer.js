export default (state = {}, action) => {
    switch (action.type) {
        case '@@loadingAll/STARTED':
            return {
                ...state,
                [action.payload]: true,
            };

        case '@@loadingAll/FINISHED':
            return {
                ...state,
                [action.payload]: false,
            };

        default:
            return state;
    }
};