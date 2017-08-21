# Redux Global Loader

[![Build Status](https://travis-ci.org/guilouro/redux-global-loading.svg?branch=master)](https://travis-ci.org/guilouro/redux-global-loading)
[![Coverage Status](https://coveralls.io/repos/github/guilouro/redux-global-loading/badge.svg?branch=master)](https://coveralls.io/github/guilouro/redux-global-loading?branch=master)

**Obs**: [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware/) is required

That's a redux middleware with [redux-promise-middleware's](https://github.com/pburtchaell/redux-promise-middleware/) integration that show the Loading while there is one or more than one pending promises in current page. Then when all promise is completed, the loading is hide.


## Installation

### Install with npm

```sh
$ npm install --save redux-global-loading
```

### Import the middleware and include it after `promiseMiddleware()` in your `applyMiddleware`

```jsx
import { globalLoadingMiddleware }  from 'redux-global-loading';

composeStoreWithMiddleware = applyMiddleware(
    ...
    promiseMiddleware(),
    globalLoadingMiddleware,
    ...
)(createStore);
```

### Import the reducer `loadingAll` and include it in the `combineReducers`

```jsx
import { combineReducers } from 'redux';
import { loadingAll } from 'redux-global-loading';

...
combineReducers({
    ...
    loadingAll,
    ...
});
...
```

## Usage

```jsx
import { Loading }  from 'redux-global-loading';

...
render() {
    return (
        <Loading>
            ...
            <!-- Your loading component here -->
            ...
        </Loading>
    );
}
...
```

## Contributing

If you want to contribute with this component:
[Contributing Documentation](https://github.com/guilouro/redux-global-loading/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/guilouro/redux-global-loading/blob/master/LICENSE.md)
