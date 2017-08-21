import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import loadingAll from '../../src/reducer';

export const mockStore = (mock) => {
    const reducers = {
        loadingAll,
    };

    Object.keys(mock).forEach(key => {
        reducers[key] = (state, action) => (mock[key]);
    });

    return createStore(
        combineReducers(reducers),
    );
};

export const mountConnected = (component, store) => (
    mount(
        <Provider store={store}>
            {component}
        </Provider>
    )
);
