import React, { Component } from 'react';
import data from './data.json';
import NewsRelated from './NewsRelated.js';

class Details extends Component {
    render() {


        var dem = 1;

        return (
            <div>
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-6 my-auto">
                                <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                                    <h1 className="mb-5">News Details Page</h1>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                {/* begin news */}


                {data.map((value, key) => {
                    if (value.id === parseInt(this.props.match.params.id)) {
                        return (
                            <div className="jumbotron jumbotron-fluid" key={key}>
                                <div className="container">
                                    <img src={value.image} alt="abc" style={{ width: "50%" }} className="img-fluid" />
                                    <h2 className="lead">{value.name}</h2>
                                    <hr className="my-2" />
                                    <p>{value.content}</p>
                                </div>
                            </div>
                        )
                    }
                    else {return null; }
                })}



                <hr />
                <div className="container">
                    <h4 className="card-title">News Related</h4>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-deck">
                                {
                                    
                                    data.map((value, key) => {
                                        if(value.id !== parseInt(this.props.match.params.id)  ) {
                                            if (dem <= 4) {
                                                dem++;
                                                return (
                                                    <NewsRelated key={key}
                                                        newsId={value.id}
                                                        image={value.image} 
                                                        name={value.name}
                                                        quote={value.quote}
                                                        content={value.content}>
                                                    </NewsRelated>
    
                                                )
                                            }
                                            else {
                                                return true;
                                            }
                                        }
                                        else {
                                            return true;
                                        }
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;