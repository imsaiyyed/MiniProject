import React, { Component } from 'react';

class Table extends Component {
    state = {  }
    render() { 
        let dataJsx=null;
        dataJsx=this.props.data.map((item)=>{
            return (<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.username}</td>
                <td>
                    <button onClick={this.props.edit} name={item.id} className="w3-button w3-small w3-round w3-purple">Edit</button>
                    <button onClick={this.props.delete} name={item.id} className="w3-button w3-small w3-round w3-purple">Delete</button>
                </td>
            </tr>);
        });
        
       
        return (  
            <div className="w3-container">
            <h2>Colored Table Heading</h2>
          
            <table className="w3-table-all">
              <thead>
                <tr className="w3-red">
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Username</th>
                    <th>Opration</th>
                </tr>
              </thead>
              <tbody>
                {dataJsx}
              </tbody>
            </table>
          </div>
            );
    }
}
 
export default Table;