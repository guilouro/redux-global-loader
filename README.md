# Redux Global Loader

[![Build Status](https://travis-ci.org/guilouro/redux-global-loader.svg?branch=master)](https://travis-ci.org/guilouro/redux-global-loader)
[![Coverage Status](https://coveralls.io/repos/github/guilouro/redux-global-loader/badge.svg?branch=master)](https://coveralls.io/github/guilouro/redux-global-loader?branch=master)

**Obs**: [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware/) is required

A redux middleware with [redux-promise-middleware's](https://github.com/pburtchaell/redux-promise-middleware/) integration that shows the Loading while there is one or more than one pending promises in the current page. The loading state will be hidden as soon as all Promises gets completed.


## Installation

#### Install with npm

```sh
$ npm install --save redux-global-loader
```

#### Import the middleware and include it after `promiseMiddleware()` in your `applyMiddleware`

```jsx
import { globalLoaderMiddleware }  from 'redux-global-loader';

composeStoreWithMiddleware = applyMiddleware(
    ...
    promiseMiddleware(),
    globalLoaderMiddleware,
    ...
)(createStore);
```

#### Import the reducer `loadingAll` and include it in the `combineReducers`

```jsx
import { combineReducers } from 'redux';
import { loadingAll } from 'redux-global-loader';

...
combineReducers({
    ...
    loadingAll,
    ...
});
...
```

### Usage

```jsx
import { Loading }  from 'redux-global-loader';

...
render() {
    return (
        <Loading>
            ...
            // Your loading component here
            ...
        </Loading>
    );
}
...
```

## Contributing

If you want to contribute with this component:
[Contributing Documentation](https://github.com/guilouro/redux-global-loader/blob/master/CONTRIBUTING.md).

