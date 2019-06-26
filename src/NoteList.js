import React, { Component } from 'react'

export default class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1-content">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#note1" aria-expanded="true" aria-controls="note1">
                                    Note 1 - 12/3/1999
          </a>
                            </h5>
                        </div>
                        <div id="note1" className="collapse in" role="tabpanel" aria-labelledby="note1-content">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores cumque sunt qui ipsa quae blanditiis
                                quisquam error eum sit, modi inventore ea nobis facere distinctio corrupti eius optio tempore!
        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note2-content">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#note2" aria-expanded="true" aria-controls="note2">
                                    HTML to JSX
          </a>
                            </h5>
                        </div>
                        <div id="note2" className="collapse in" role="tabpanel" aria-labelledby="note2-content">
                            <div className="card-body">
                                - Sức mạnh khủng khiếp mà Facebook mang đến trong React, đó chính là mô hình DOM, làm tăng khả năng
                                trình diễn các đối tượng trên nền web một cách hiệu quả &amp; tốc độ mượt hơn bất kì Java Script Framework
                                nào trước đây.
          <br />- Mục đích mà Facebook nhắm đến trong React là ""Learn Once, Write Anywhere"" - Có nghĩa là sau khi
                                hoàn tất khóa học React JS, ngoài việc bạn thiết kế được layout web, bạn còn sẽ có nền tảng vững chắc để
                                tiếp cận React Native (Mobile App) mà không cần phải mất nhiều thời gian.
        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
