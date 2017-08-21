'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    var dispatch = store.dispatch;


    return function (next) {
        return function (action) {
            ['_PENDING', '_FULFILLED', '_REJECTED'].forEach(function (item, key) {
                if (action.type.endsWith(item)) {
                    dispatch({
                        type: '@@loadingAll/' + (!key ? 'STARTED' : 'FINISHED'),
                        payload: action.type.replace(item, '')
                    });
                }
            });

            next(action);
        };
    };
};