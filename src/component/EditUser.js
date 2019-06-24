import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission 
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value});
    }


    saveBtn = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getUserInfo(info);
        this.props.editUserStatus();
    }


    render() {
        return (
            <div className="row">
                <div className="col-12" style={{ color: 'while', marginTop: '22px' }}>
                    <form method="post">
                        <div className="card text-white mb-3 mt-2" style={{ backgroundColor: '#000' }} >
                            <div className="card-header" style={{ textAlign: 'center' }}>Edit</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" onChange = {(event) => this.isChange(event)}  defaultValue={this.props.userEditObject.name} className="form-control" name="name" aria-describedby="helpId" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} className="form-control" name="tel" aria-describedby="helpId" placeholder="Phone" />
                                </div>
                                <hr />
                                <div className="form-group select-option">
                                    <select className="custom-select select-option" onChange = {(event) => this.isChange(event)}  name="permission" defaultValue={this.props.userEditObject.permission} required>
                                        <option className="select-option" value>Choose roles</option>
                                        <option className="select-option" value={1}>Admin</option>
                                        <option className="select-option" value={2}>Moderator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-primary btn-new" style={{ outline: 'none' }}
                                        value="Save" onClick={() => this.saveBtn()} />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default EditUser;