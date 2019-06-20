import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: 0
    }

  }



  editClick = () => {
    this.setState({ trangThai: 1 });
  }

  saveClick = () => {
    this.setState({ trangThai: 0 });
  }

  renderButton = () => { // la rang a// dung viet theo kieu arrow func á// da rua de e thu lai 
    return (
    <div className="row">
            <div className="btn btn-group">
            <div className="btn btn-info" onClick={this.thongbao}> Edit </div>
            <div className="btn btn-warning"onClick={this.thongbao2}> Remove </div>
            </div>
    </div>
    );
}
renderForm  = () => {
    return (
    <div classname="row">
            <div className="form-group">
            <input type="text" name="ten" className="form-control" />
            <div className="btn btn-block btn-danger">Save</div>
            </div>
    </div>
    );
}

 displayCheck  = () => {
    if(this.state.trangThai===0)
    {
        return this.renderButton();
    }
    else
        return this.renderForm();

 }

  
  render() {
    return (
      <section className="col4">
        <div className="container">
          <div className="row align-items-center">
            <div className={"col-lg-6 "}>
              <div className="p-5">
                <img className="img-fluid rounded-circle" src={this.props.anh} alt />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>{this.props.trichdan}</p>

                {this.displayCheck()}

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;