import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
                .<table className="table table-striped table-inverse table-hover">
                    <thead>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>PHONE</th>
                            <th>ROLES</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Hồ Ngô Mỹ Vy</td>
                            <td>6545645623</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn btn-warning sua">
                                    <i className="fa fa-edit    "> Sửa </i>
                                </div>
                                <div className="btn btn-danger xoa">
                                    <i className="fa fa-delete    "> Xóa </i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Hồ</td>
                            <td>6545645623</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn btn-warning sua">
                                    <i className="fa fa-edit    "> Sửa </i>
                                </div>
                                <div className="btn btn-danger xoa">
                                    <i className="fa fa-delete    "> Xóa </i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hồ Ngô</td>
                            <td>6545645623</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn btn-warning sua">
                                    <i className="fa fa-edit    "> Sửa </i>
                                </div>
                                <div className="btn btn-danger xoa">
                                    <i className="fa fa-delete   "> Xóa </i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hồ Ngô Mỹ</td>
                            <td>6545645623</td>
                            <td>Moderator</td>
                            <td>
                                <div className="btn btn-warning sua">
                                    <i className="fa fa-edit    "> Sửa </i>
                                </div>
                                <div className="btn btn-danger xoa">
                                    <i className="fa fa-delete   "> Xóa </i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;