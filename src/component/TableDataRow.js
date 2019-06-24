import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (parseInt(this.props.permission) === 1) { return "Admin"; }
        else if (parseInt(this.props.permission) === 2) { return "Moderator"; }
        else { return "UNKNOWN"; }
    }

    editClick = () => {
        this.props.editFunClick();
        
        this.props.changeEditUSerStatus();
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>

                <td>
                    <div className="btn btn-warning sua" onClick={() => this.editClick()} >
                        <i className="fa fa-edit"> Sửa </i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-delete"> Xóa </i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;