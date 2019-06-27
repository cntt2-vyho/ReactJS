import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if (this.props.alertShow === false) {
            return null;
        }
        else {
            return (
                <AlertContainer>
                    <Alert type="info" timeout={1000} onDismiss={() => this.handleDismiss()} >Hello, world</Alert>
                </AlertContainer>
            );
        }

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);