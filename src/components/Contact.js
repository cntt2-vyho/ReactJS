import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ isRedirect: true });

  }
  
  isFileChange  = (event) => {
    const tenanh = event.target.files[0].name;
    this.setState({
        fImage : tenanh
    });
}

  isChange = (event) => {
    const ten = event.target.name;
    const giatri = event.target.value;

    this.setState({
      [ten]: giatri
    });
  }
  getValue  = () => {
    var noiDung = "";
    noiDung += "Ten nhan duoc la : " + this.state.fName;
    noiDung += " / Email nhan duoc la : " + this.state.fEmail;
    noiDung += " / Phone nhan duoc la : " + this.state.fPhone;
    noiDung += " / Mess nhan duoc la : " + this.state.fMess;
    noiDung += " / ngay nhan duoc la : " + this.state.fDate;
    noiDung += " / ngay nhan duoc la : " + this.state.fImage;
    return noiDung;
}

  render() {
    if (this.state.isRedirect === true) {
      console.log(this.getValue());
      return <Redirect to="/home" />
    };
    return (
      <div>
        <div>
          <header className="masthead news">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-6 my-auto">
                  <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                    <h1 className="mb-5">Contact Page</h1>
                    <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                  </div>
                </div>
                <div className="col-lg-6 my-auto">
                  <div className="device-container hinhcuavy">
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                          <img src="https://image2.tin247.com/pictures/2015/11/12/coc1447320876.jpg" alt="abc" className="img-fluid" />
                        </div>
                        <div className="button">
                          {/* You can hook the "home button" to some JavaScript events or just remove it */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* begin news */}
          <section className="page-section" id="contact">
            <div className="container">
              {/* Contact Section Heading */}
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
              {/* Icon Divider */}
              <div className="divider-custom">
                <div className="divider-custom-line" />
                <div className="divider-custom-icon">
                  <i className="fas fa-star" />
                </div>
                <div className="divider-custom-line" />
              </div>
              {/* Contact Section Form */}
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea onChange={(event) => this.isChange(event)} className="form-control" name="fMess" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>


                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Date</label>
                        <select className="form-control" onChange={(event) => this.isChange(event)} name="fDate">
                          <option value="monday">Monday</option>
                          <option value="tuesday">Tuesday</option>
                          <option value="wedneday">Wednesday</option>
                          <option value="thursday">Thursday</option>
                          <option value="friday">Friday</option>
                          <option value="saturday">Saturday</option>
                          <option value="sunday">Sunday</option>
                        </select>
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />


                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Image</label>
                        <input type="file" name="fImage"  className="form-control-file" onChange={(event) => this.isFileChange(event)} />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <br />





                    <div id="success" />
                    <div className="form-group">
                      <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default Contact;