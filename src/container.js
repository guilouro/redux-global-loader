import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ loadingAll }) => ({ loadingAll });
const Loading = (props) => (
    !Object.values(props.loadingAll)
        .every(item => !item) ? props.children : false
);

Loading.propTypes = {
    children: PropTypes.any,
};

export default connect(mapStateToProps)(Loading);