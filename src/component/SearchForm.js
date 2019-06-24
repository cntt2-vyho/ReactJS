import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {

    //this.props.checkConnectProps
    constructor(props) {
        super(props);
        this.state = {
            tempValue:"" ,
            userObj :{}
        }
    }
    
    
    getUserInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserInfoApp(info);
        
    }
    
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser editUserStatus = {() =>this.props.changeEditUSerStatus()}  
            userEditObject = {this.props.userEditObject}
            getUserInfo = {(info) => this.getUserInfo(info)} />
        }
    }

    

    isChange = (event) => {
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true ) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()} >Cancel</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} >New</div>
        }
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group vy-nut1 col-9">
                        <input type="text" className="form-control"  placeholder="Search name" onChange={(event) => {
                            this.isChange(event) }} style={{ width: '650px' ,outline: 'none'}} />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}  > Search </div>

                    </div>
                    <div className="btn-group1 vy-nut2 col-3">
                        {this.hienThiNut()}
                        
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default SearchForm;