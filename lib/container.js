'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
    var loadingAll = _ref.loadingAll;
    return { loadingAll: loadingAll };
};
var Loading = function Loading(props) {
    return !Object.values(props.loadingAll).every(function (item) {
        return !item;
    }) ? props.children : false;
};

Loading.propTypes = {
    children: _propTypes2.default.any
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loading);