import React, { Component } from 'react';

class Adduser extends Component {

    checkTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col" style={{ color: 'while',marginTop: '22px' }}>
                <div className="card text-white bg-primary mb-3 mt-2">
                    <div className="card-header" style={{textAlign: 'center'}}>New</div>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
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
                                New
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
                <div>
                    {this.checkTrangThai()}
                </div>
                

        );
    }
}

export default Adduser;