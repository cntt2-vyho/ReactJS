import React, {Component} from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps cua NoiDung '+ nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate cua NoiDung '); 
        return true;
      }
      componentWillUpdate(nextProps, nextState) {
        console.log('componentWillMount cua NoiDung ') ;
      }
      
      componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate cua NoiDung ') ;
      }




    render() {
        console.log('Render cua NoiDung.js');
        return (
            <div>
                <h3>{this.props.ten} </h3>
            </div>
        );
    }
}
export default NoiDung;