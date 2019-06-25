import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    useEditStatusInStore = () => {
        var {dispatch} = this.props;
        dispatch({type:"CHANGE_EDIT_STATUS"})
    }
    render() {
        return (
            <div>
                <h2>Day la component News</h2>
                <button onClick = {() => this.useEditStatusInStore()} > Click nao </button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      editStatus : state.editStatus
    }
  }

export default connect(mapStateToProps)(News)