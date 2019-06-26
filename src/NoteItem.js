import React, { Component } from 'react'

class NoteItem extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1-content">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="note1">
                                    {this.props.title}
                                </a>
                                <div className="btn-group float-right">
                                    <button className="btn btn-outline-info">Sua</button>
                                    <button className="btn btn-outline-secondary">Xoa</button>
                                </div>
                            </h5>
                        </div>
                        <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1-content">
                            <div className="card-body">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NoteItem;