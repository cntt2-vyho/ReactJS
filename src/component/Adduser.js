import React, { Component } from 'react';

class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua : false
        }
    }

    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua:!this.state.trangThaiChinhSua
        });
    }
    hienThiNut = () => {
        if(this.state.trangThaiChinhSua === true) {
             return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Cancel</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>New</div>;
        }
    }
    hienThiForm = () => {
        if(this.state.trangThaiChinhSua === true) {
            return (
                <div>
                    <div className="card text-white bg-primary mb-3 mt-2">
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
            )
        }
    }
    render() {
        return (

            

            <div className="col-3" style={{ color: 'while' }}>
                {this.hienThiNut()};
                {this.hienThiForm()}
                
            </div>

        );
    }
}

export default Adduser;