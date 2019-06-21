import React, { Component } from 'react';
import data from './data.json';

class Details extends Component {
    render() {
        console.log(this.props.match.params.id);



        return (
            <div>
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
                    <div className="container">


                        {data.map((value, key) => {
                            if (value.id == this.props.match.params.id) {
                                return (
                                    <div className="jumbotron jumbotron-fluid">
                                        <div className="container">
                                            <img src={value.image} alt="abc" style={{ width: "50%" }} className="img-fluid" />
                                            <h2 className="lead">{value.name}</h2>
                                            <hr className="my-2" />
                                            <p>{value.content}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}



                        <hr />
                        <h4 className="container col-lg-12">RELATED NEWS</h4>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="/details"><img src="https://www.bacsithuy.org/wp-content/uploads/2018/12/de-so-huu-1-chu-meo-thuan-chung-ton-bao-nhieu-tien-220x220.jpg" alt="abc" style={{ width: '100%' }} /></a>
                                        <blockquote className="blockquote">
                                            <p style={{ textDecoration: 'none' }}>Mèo tai cụp Scottish Fold có kích thước thuộc cỡ trung
                                              bình chứ không to vĩ đại như giống
                                              mèo Maine Coon, chúng nặng trung bình từ 2 – 4kg ở con cái và 3 – 6kg ở con đực.
                                              Nhìn
                  tổng quan chúng cũng có một thân hình mập mạp ...</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="/details"><img src="https://www.bacsithuy.org/wp-content/uploads/2018/12/de-so-huu-1-chu-meo-thuan-chung-ton-bao-nhieu-tien-220x220.jpg" style={{ width: "100%" }} alt="abc" /></a>
                                        <blockquote className="blockquote">
                                            <p style={{ textDecoration: 'none' }}>Mèo tai cụp Scottish Fold có kích thước thuộc cỡ trung
                                              bình chứ không to vĩ đại như giống
                                              mèo Maine Coon, chúng nặng trung bình từ 2 – 4kg ở con cái và 3 – 6kg ở con đực.
                                              Nhìn
                  tổng quan chúng cũng có một thân hình mập mạp ...</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="/details"><img src="https://www.bacsithuy.org/wp-content/uploads/2018/12/de-so-huu-1-chu-meo-thuan-chung-ton-bao-nhieu-tien-220x220.jpg" style={{ width: "100%" }} alt="abc" /></a>
                                        <blockquote className="blockquote">
                                            <p style={{ textDecoration: 'none' }}>Mèo tai cụp Scottish Fold có kích thước thuộc cỡ trung
                                              bình chứ không to vĩ đại như giống
                                              mèo Maine Coon, chúng nặng trung bình từ 2 – 4kg ở con cái và 3 – 6kg ở con đực.
                                              Nhìn
                  tổng quan chúng cũng có một thân hình mập mạp ...</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* end news */}
            </div>

            </div >
        );
    }
}

export default Details;