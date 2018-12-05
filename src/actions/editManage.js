import React from 'react';

export default class Manage extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>
          Manage Data
        </h1>
        <div className="row">
          <div className="three columns">
            <nav>
              <a className="selected">
                Option1
              </a>
              <a>
                Option1
              </a>
              <a>
                Option1
              </a>
            </nav>
            <button className="rounded margin-top-10">
              <span className="icon add_black">
              </span>
              Add Key
            </button>
          </div>
          <div className="nine columns">
            <div className="row">
              <div className="nine columns">
                <h2>
                  User ID
              </h2>
              </div>
              <div className="three columns text-right">
                <button className="green rounded">
                  <span className="icon create_white">
                  </span>
                  Edit This
              </button>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <h2>
                  Description
                </h2>
                <p>
                  Contains
                </p>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <h2>
                  Type
                </h2>
                <p>
                  Contains
                </p>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <h2>
                  Sensivity
                </h2>
                <p>
                  Contains
                </p>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <div className="green-color padding-10">
                    <h4 className="margin-clear">
                      POSSIBLE VALUES
                    </h4>
                </div>
              </div>
            </div>
            <table className="expanded">
              <thead>
                <tr>
                  <th className="left">
                    VALUE
                </th>
                  <th className="left">
                    DESCRIPTION
                </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    null
                </td>
                  <td>
                    Value when user is not found
                </td>
                </tr>
                <tr>
                  <td>
                    (integer)
                </td>
                  <td>
                    ID key for user
                </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}