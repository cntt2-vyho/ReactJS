import React, { Component } from 'react';

class News extends Component {
    render() {
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
                                                    <img src="https://image2.tin247.com/pictures/2015/11/12/coc1447320876.jpg" className="img-fluid" alt />
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
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="details.html"> <img src="https://icdn.dantri.com.vn/thumb_w/220/2016/1-1456290652201.jpg" width="100%" /></a>
                                        <blockquote className="blockquote">
                                            <p style={{ textDecoration: 'none' }}>Giống mèo Anh lông dài (hay ALD), giống mèo có nguồn gốc từ Anh quốc, là hậu duệ của mèo
                                              Anh lông ngắn và mèo Ba Tư. Có lẽ vì thế mèo Anh lông dài đã được thừa hưởng rất nhiều
                                              ưu điểm từ các cụ tổ của mình như có một bộ lông dài bóng , mượt của mèo Ba Tư cùng thân
                                              hình chắc nịch, đầy đặn của mèo Anh lông ngắn. Điểm thu hút nhất có lẽ nằm ở cái đầu
                                              tròn vo, tai ngắn, chân ngắn cùng đôi mắt to tròn, long lanh. Mèo Anh lông dài có nhiều
                                              màu khác nhau như xanh xám, nâu vàng, trắng, nâu socola, đăc biệt các lớp lông có nhiều
                                              cấp độ màu sáng khác nhau, từ nhạt tới đậm, đan xen giữa lông dài và ngắn, kết hợp với
                                              sự phản chiếu của ánh nắng mặt trời khiến cho màu lông trở nên óng ánh, lấp lánh trông
                                              rất đẹp mắt. Chúng có kích cỡ thuộc dạng bình thường, cao khoảng từ 25cm đến 38cm và
                trọng lượng trung bình từ 3.2 đến 4.5 kg.</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="details.html"><img src="https://www.bacsithuy.org/wp-content/uploads/2018/12/de-so-huu-1-chu-meo-thuan-chung-ton-bao-nhieu-tien-220x220.jpg" width="100%" /></a>
                                        <blockquote className="blockquote">
                                            <p style={{ textDecoration: 'none' }}>Mèo tai cụp Scottish Fold có kích thước thuộc cỡ trung bình chứ không to vĩ đại như giống
                                              mèo Maine Coon, chúng nặng trung bình từ 2 – 4kg ở con cái và 3 – 6kg ở con đực. Nhìn
                                              tổng quan chúng cũng có một thân hình mập mạp như những giống mèo Tây khác, với một cái
                                              đầu tròn kết hợp đôi tai gãy cụp đặc trưng thì nhìn chúng không khác gì một con cú vọ. Ở
                                              phía trên Ngân có nói mèo tai cụp Scottish chia thành dòng tai gãy và tai thẳng, trong
                                              đó mỗi dòng lại chia tiếp thành lông ngắn và lông dài. Tuy nhiên dòng Scottish Fold lại
                cũng được chia tiếp thành 4 cấp độ tai cụp khác nhau nữa cơ. Cụ thể như sau</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default News;