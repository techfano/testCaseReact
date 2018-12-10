import React from 'react';
import Tabs from '../component/tabs';
import Fetch from '../api/fetch';

export default class Request extends React.Component {

  constructor(){
    super()
    this.state = {
      request: []
    }
  }

  setRequest = (data) => {
    this.setState({
      request: data
    })
  }

  callback = (data) => {
    this.setRequest(data);
  }

  getAll = () =>{
    new Fetch().call(this.callback, '/request');
  }

  getPending = () => {
    new Fetch().call(this.callback, '/request?status=Pending');
  }

  getApproved = () => {
    new Fetch().call(this.callback, '/request?status=Approved');
  }

  getDenied = () => {
    new Fetch().call(this.callback, '/request?status=Denied');
  }

  render() {

    return (
      <div className="container">
        <h1>
          Request
        </h1>
        <Tabs options={[{
            name: 'ALL',
            active: true,
            click: this.getAll
          },{
            name: 'PENDING',
            click: this.getPending
          },{
            name: 'APPROVED',
            click: this.getApproved
          },{
            name: 'DENIED',
            click: this.getDenied
          }]}>
        </Tabs> 
        <div className="row">
          <div className="twelve columns">
            <div className="green-color padding-10">
              <h4 className="margin-clear">
                PENDING REQUEST
              </h4>
            </div>
          </div>
        </div>
        <table className="expanded">
          <thead>
            <tr>
              <th className="left">
                DATE
              </th>
              <th className="left">
                REASON
              </th>
              <th className="center">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.request.map(row => {
                return (
                <tr>
                  <td>
                    {row.date}
                  </td>
                  <td>
                    {row.reason}
                  </td>
                  <td>
                    {row.status}
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}