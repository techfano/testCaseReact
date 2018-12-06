import React from 'react';

export default class Request extends React.Component {

  

  render() {

    return (
      <div className="container">
        <h1>
          Request
        </h1>
        <div className="tabs">
          <div className="option selected">
            ALL
          </div>
          <div className="option">
            PENDING
          </div>
          <div className="option">
            APPROVED
          </div>
          <div className="option">
            DENIED
          </div>
        </div> 
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
            <tr>
              <td>
                2017/09/21
              </td>
              <td>
                Data science algo
              </td>
              <td className="green-text text-bold center">
                Approved
              </td>
            </tr>
            <tr>
              <td>
                2017/08/13
              </td>
              <td>
                ID key for user
              </td>
              <td className="red-text text-bold center">
                Denied
              </td>
            </tr>
            <tr>
              <td>
                2017/08/13
              </td>
              <td>
                ID key for user
              </td>
              <td className="yellow-text text-bold center">
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}