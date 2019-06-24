import React, { Component } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './Adduser';

import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm: false,
            data: DataUser,
            text: "",
            editUserStatus:false,
            userEditObject: {}
        }
    }

    getUserInfoApp = (info) => {
        this.state.data.forEach((value, key) => {
            if(value.id === info.id) {
                value.name = info.name;
                value.tel = info.tel;
                value.permission = info.permission;
            }
        })
    }
    changeEditUSerStatus = () => {
        this.setState({
            editUserStatus: !this.state.editUserStatus
        })
    }

    getTextSearch = (dl) => {
        this.setState({
            text: dl
        });

    }

    editUser= (user) => {
        console.log(user);
        this.setState({
            userEditObject:user
        });
    }

    getNewUserData = (name,tel,permission) => {
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = permission;

        var items = this.state.data;
        
        items.push(item);

        this.setState({
            data:items
        });
        
        
        console.log( this.state.data);
    }

    doiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    render() {
        var ketQua = [];
        this.state.data.forEach((item) => {
            if (item.name.indexOf(this.state.text) !== -1) {
                ketQua.push(item);
            }
        });
        //console.log(ketQua);
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <SearchForm
                                getUserInfoApp = {(info) => this.getUserInfoApp(info)}
                                checkConnectProps={(dl) =>this.getTextSearch(dl) }
                                ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} 
                                editUserStatus = {this.state.editUserStatus}
                                changeEditUSerStatus = {() => {this.changeEditUSerStatus()}}
                                userEditObject = {this.state.userEditObject} />
                            <TableData editFun = {(user) => this.editUser(user)} dataUserProps={ketQua}
                            changeEditUSerStatus = {() => this.changeEditUSerStatus()} />
                            <AddUser add = {(name,tel,permission) => {this.getNewUserData(name,tel,permission)}} hienThiForm={this.state.hienThiForm} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;