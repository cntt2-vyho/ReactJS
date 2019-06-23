import React, { Component } from 'react';

class Adduser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        this.setState({
            [name]: value
        });

    }

    checkTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col" style={{ color: 'while', marginTop: '22px' }}>
                    <form>
                        <div className="card text-white bg-primary mb-3 mt-2">
                            <div className="card-header" style={{ textAlign: 'center' }}>New</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={(event) => { this.isChange(event) }} name="name" aria-describedby="helpId" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={(event) => { this.isChange(event) }} name="tel" aria-describedby="helpId" placeholder="Phone" />
                                </div>
                                <hr />
                                <div className="form-group select-option">
                                    <select className="custom-select select-option" onChange={(event) => { this.isChange(event) }} name="permission" required>
                                        <option className="select-option" value>Choose roles</option>
                                        <option className="select-option" value={1}>Admin</option>
                                        <option className="select-option" value={2}>Modrator</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary btn-new" style={{outline: 'none'}}
                                        onClick={(name, tel, permission) => { this.props.add(this.state.name, this.state.tel, this.state.permission) }} value="Add" />
                                </div>
                            </div>
                        </div>
                    </form>

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