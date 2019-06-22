import React, { Component } from 'react';

class Adduser extends Component {
    render() {
        return (
            <div className="col-3" style={{ color: 'while' }}>
                .<div className>
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor />
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Tên user" />
                            </div>
                            <div className="form-group">
                                <label htmlFor />
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Điện thoại" />
                            </div>
                            <hr />
                            <div className="form-group select-option">
                                <select className="custom-select select-option" required>
                                    <option className="select-option" value>Chọn quyền mặc định</option>
                                    <option className="select-option" value={1}>Admin</option>
                                    <option className="select-option" value={2}>Modrator</option>
                                    <option className="select-option" value={3}>Nomal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-block btn-primary btn-new">
                                    Thêm mới
          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Adduser;