import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json';

class News extends Component {
    render() {
        console.log(data);
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
                                                    <img src="https://image2.tin247.com/pictures/2015/11/12/coc1447320876.jpg" className="img-fluid"/>
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
                            <NewsItem image="https://media.moitruongvadothi.vn/2019/06/21/9852/1561081761-1.jpg" title="Mùa hè 2019 xuất hiện trên Google Doodle hôm nay"
                                quote="Năm 2019 được dự báo là năm nóng nhất lịch sử, mùa hè 2019 vì thế cũng được cho là khắc nghiệt nhất so với các năm trước."
                                content="Newscientist cho biết, chỉ 1 tháng đầu năm mà 2019 đã xác lập 35 kỷ lục về nắng nóng và 2 kỷ lục về lạnh giá. Đơn cử, khu vực hứng chịu mức nhiệt nóng khủng khiếp nhất trong lịch sử phần lớn diễn ra ở Australia: Nhiệt độ cao kỷ lục tại Port Augusta (Australia) được ghi nhận là 49,5 độ C. Trong khi đó tại Moline (bang Illinois, Mỹ) xuống đến âm 36,1 độ C.">  </NewsItem>
                            <NewsItem image="https://media.moitruongvadothi.vn/2019/06/21/9852/1561081760-2.jpg" title="Năm 2018, khí quyển hứng hàng chục tấn CO2."
                                quote="Trong bối cảnh hiện nay, El Nino có thể đang bị tác động mạnh mẽ từ quá trình biến đổi khí hậu nhân tạo (cụ thể là từ các hoạt động sản xuất, giao thông, sinh hoạt của con người)."
                                content="Các nhà khoa học khí hậu đang theo dõi chặt chẽ sự thay đổi khí hậu do con người gây ra ảnh hưởng đến El Nino và nghiên cứu xác nhận rằng các khí nhà kính do con người thải ra, như CO2, đã tác động mạnh mẽ đến sự kiện El Nino, phá hủy các rạn san hô, tạo ra hạn hán và cháy rừng tồi tệ hơn, Theweathernetwork trích dẫn nghiên cứu của các nhà khoa học."> </NewsItem>
                            <NewsItem image="https://media.moitruongvadothi.vn/2019/06/21/9804/1561082215-tin-tuc-24h-moi-nhat-nong-nhat-hom-nay-ngay-2162019-12.jpg" title="Kỷ niệm 94 năm Ngày Báo chí cách mạng Việt Nam"
                                quote="Hôm nay là một ngày đặc biệt đối với những người làm báo - Ngày Báo chí cách mạng Việt Nam 21/6. Chủ tịch Hồ Chí Minh đã khẳng định vai trò của người làm báo đối với đất nước và dân tộc."
                                content="Trong suốt 94 năm qua, dưới sự lãnh đạo của Đảng, báo chí cách mạng Việt Nam luôn là lực lượng nòng cốt, giữ vai trò quan trọng trên mặt trận tư tưởng, văn hóa, đóng góp to lớn vào sự nghiệp cách mạng của Đảng, xây dựng và bảo vệ Tổ quốc; là cầu nối giữa Đảng, Nhà nước và nhân dân, tham gia giám sát, phản biện.">  </NewsItem>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default News;