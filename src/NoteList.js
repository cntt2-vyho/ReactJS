import React, { Component } from 'react';
import { noteData } from './firebaseConnect';
import NoteItem from './NoteItem';

export default class NoteList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataFirebase:[]
        }
    }

    componentWillMount() {
        noteData.on('value', (notes) => {

            var arrData = [];

            notes.forEach(element => {
                arrData.push({
                    id: element.key,
                    title: element.val().title,
                    content: element.val().content
                })
            })

            this.setState({
                dataFirebase: arrData
            });

        })
    }

    getData = () => {
        if(this.state.dataFirebase) {
            return this.state.dataFirebase.map((value,key) => {
                return (
                    <NoteItem key={value.key} i={key} title={value.title} content={value.content} />
                )
            })
        }
       




    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                    
                </div>
            </div>
        )
    }
}
