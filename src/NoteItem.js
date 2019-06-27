import React, { Component } from 'react'
import { connect } from 'react-redux';
import{ NoteList} from './NoteList';


class NoteItem extends Component {
    twoAction =  () => {
        this.props.changeEditStatus();
        //ham lay noi dung
        // console.log(this.props.note);
        this.props.getEditData(this.props.note);

    }
    render() {
        return (
            <div className="col"  style={{paddingBottom: '10px'}}>
                <div id="noteList" role="tablist" aria-multiselectable="true" >
                    <div className="card"   style={{backgroundColor:'#ffe6f3'}}>
                        <div className="card-header" role="tab" id="note1-content">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="note1" style={{textTransform:'uppercase', color: '#000'}}>
                                    {this.props.title}
                                </a>
                                <div className="btn-group float-right">
                                    <button className="btn btn-outline-info" onClick={() => this.twoAction()}  >Edit</button>
                                    <button className="btn btn-outline-secondary">Delete</button>
                                </div>
                            </h5>
                        </div>
                        <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1-content">
                            <div className="card-body">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
          dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        getEditData: (editObject) => {
            dispatch({type:"GET_EDIT_DATA", editObject})
          }
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem) ;