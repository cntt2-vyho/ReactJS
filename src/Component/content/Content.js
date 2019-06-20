import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

    }


    thongbao =() => {
      alert('Cach xu ly tuong tac trong React JS !')
    }

    thongbao2 = () => {
      alert('Thong bao so 2 !')
    }

    thongbao3 = (x) => {
      alert(x)
    };

    render() {
        return (
            <section className="col4">
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 " + this.props.position1}>
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={this.props.anh} alt />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>{this.props.trichdan}</p>

                <div className="row">
        <div className="btn btn-group">
          <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
          <div className="btn btn-warning" onClick={() => this.thongbao2()}>Remove</div>
          <div className="btn btn-info" onClick={() => this.thongbao3("ha ha")}>Here</div>
          <div className="btn btn-warning" onClick={() => this.thongbao3.bind(this, "ahihi")}>There</div>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        );
    }
}

export default Content;