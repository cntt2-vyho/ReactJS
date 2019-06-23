import React, { Component } from 'react';

class SearchForm extends Component {

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
            <div className="col-9">
                <div className="form-group">
                    <div className="btn-group vy-nut1 col-9">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Search something" style={{ width: '433px' }} />
                        <div className="btn btn-info"> Search </div>

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