'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    var dispatch = store.dispatch;


    return function (next) {
        return function (action) {
            ['_PENDING', '_FULFILLED'].forEach(function (item, key) {
                if (action.type.endsWith(item)) {
                    dispatch({
                        type: '@@loadingAll/' + (key ? 'FINISHED' : 'STARTED'),
                        payload: action.type.replace(item, '')
                    });
                }
            });

            next(action);
        };
    };
};