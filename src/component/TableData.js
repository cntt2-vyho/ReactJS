import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingDataUser  = () =>  this.props.dataUserProps.map((value,key)  => (
        <TableDataRow editFunClick={(user) => this.props.editFun(value)} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.permission} 
        changeEditUSerStatus = {() => this.props.changeEditUSerStatus()}/>
      ))


      

    render() {

        return (
            <div className="col">
                .<table className="table table-striped table-inverse table-hover">
                    <thead>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>PHONE</th>
                            <th>ROLES</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>


                       {this.mappingDataUser()}

                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;