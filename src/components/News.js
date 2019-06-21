import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json';

class News extends Component {
    render() {


        // var so = [1,3,4,5,6,9];
        // var so2 = so.map((value, key) => value*3 +" va chi so la: " +key);
        // console.log(so2);








        return (
            <div>
                <div>
                    <header className="masthead news">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-6 my-auto">
                                    <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                                        <h1 className="mb-5">News Page</h1>
                                        <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 my-auto">
                                    <div className="device-container hinhcuavy">
                                        <div className="device-mockup iphone6_plus portrait white">
                                            <div className="device">
                                                <div className="screen">
                                                    {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                    <img src="https://image2.tin247.com/pictures/2015/11/12/coc1447320876.jpg" className="img-fluid" />
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
                    <div className="container">
                        <div className="row">
                            {
                                data.map((value, key) => {
                                    return  (
                                    <NewsItem key={key}
                                    newsId={value.id}
                                         image={value.image} title={value.name}
                                        quote={value.quote}>  
                                        </NewsItem>
                                        )}
                                )
                            }
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default News;