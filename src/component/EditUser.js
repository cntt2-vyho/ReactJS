import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12" style={{ color: 'while', marginTop: '22px' }}>
                    <form method="post">
                        <div className="card text-white mb-3 mt-2" style={{ backgroundColor: '#000' }} >
                            <div className="card-header" style={{ textAlign: 'center' }}>Edit</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" defaultValue={this.props.userEditObject.name} className="form-control" name="name" aria-describedby="helpId" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" defaultValue={this.props.userEditObject.tel} className="form-control" name="tel" aria-describedby="helpId" placeholder="Phone" />
                                </div>
                                <hr />
                                <div className="form-group select-option">
                                    <select className="custom-select select-option" name="permission" defaultValue={this.props.userEditObject.permission} required>
                                        <option className="select-option" value>Choose roles</option>
                                        <option className="select-option" value={1}>Admin</option>
                                        <option className="select-option" value={2}>Moderator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary btn-new" style={{ outline: 'none' }}
                                        value="Save" onClick={() => this.props.editUserStatus()} />
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