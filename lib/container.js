'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    children: _react.PropTypes.any
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loading);