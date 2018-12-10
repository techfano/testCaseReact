import React from 'react';
import Fetch from '../api/fetch.js';
import cx from 'classnames';

export default class Manage extends React.Component {
  constructor(){
    super()
    this.state = {
      manageList: [],
      manageSelected: {
        values: []
      },
      editForm: false
    }
    this.getManageList();
  }
  
  setManageList = (data) => {
    this.setState({
      manageList: data
    })
  }
  
  setManageSelected = (manage) => {
    manage.active = true;
    this.setState({
      manageSelected: manage
    })
  }

  callbackManageList = (data) => {
    this.setManageList(data);
    this.setManageSelected(data[0]);
  }

  getManageList = () => {
    new Fetch().call(this.callbackManageList, '/manage');
  }

  changeManage = (index) => {
    const data = this.state.manageList;
    this.setManageSelected(data[index]);
  }

  isActiveManage = (option) => {
    const newManageList = this.state.manageList.map(item => {
      if (item.name === option.name) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });

    this.setManageList(newManageList)
  }

  toggleEdit = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }

  changeName = (event) =>{
    const manage = this.state.manageSelected;
    manage.name = event.target.value;
    this.setState({
      manageSelected: manage
    })
  }

  changeDescription = (event) =>{
    const manage = this.state.manageSelected;
    manage.description = event.target.value;
    this.setState({
      manageSelected: manage
    })
  }

  changeType = (event) =>{
    const manage = this.state.manageSelected;
    manage.type = event.target.value;
    this.setState({
      manageSelected: manage
    })
  }
  
  changeSensivity = (event) =>{
    const manage = this.state.manageSelected;
    manage.sensivity = event.target.checked;
    this.setState({
      manageSelected: manage
    })
  }

  processButtons(){
    if(this.state.editForm){
      return (<button className="green rounded"
        onClick={this.toggleEdit}>
        <span className="icon create_white">
        </span>
          Save
        </button>)
    }else{
      return (<button className="green rounded"
        onClick={this.toggleEdit}>
        <span className="icon create_white">
          </span>
          Edit This
        </button>)
    }
  }

  processName(){
    if(this.state.editForm) {
      return (<div>
        <label>Key Name</label>
        <input type="text"
        value={this.state.manageSelected.name}
        onChange={this.changeName} />
      </div>)
    }else{
      return (<h1>
        {this.state.manageSelected.name}
      </h1>)
    }
  }

  processDescription() {
    if (this.state.editForm) {
      return (<div>
          <label>Description</label>
          <input type="text"
          value={this.state.manageSelected.description}
          onChange={this.changeDescription} />
        </div>)
    } else {
      return (<div>
          <h2>
          Description
          </h2>
          <p>
            {this.state.manageSelected.description}
          </p>
        </div>)
    }
  }
  
  processType() {
    if (this.state.editForm) {
      return (<div>
          <label className="margin-right-10">Type</label>
          <select value={this.state.manageSelected.type}
            onChange={this.changeType}>
            <option value="null">Null</option>
            <option value="integer">Integer</option>
            <option value="other">Other</option>
          </select>
        </div>)
    } else {
      return (<div>
        <h2>
          Type
        </h2>
        <p>
          {this.state.manageSelected.type}
        </p>
        </div>)
    }
  }

  processSensivity() {
    if (this.state.editForm) {
      return (<div className="row margin-top-20">
        <div className="one column">
          <input type="checkbox" 
            checked={this.state.manageSelected.sensivity} 
            onChange={this.changeSensivity} />
        </div>
        <div className="eleven columns">
            <label>Is this personal data?</label>
        </div>
        </div>)
    } else {
      const message = this.state.manageSelected.sensivity ? "This is personal data, and cannot be distributed in raw form" : 
      "This is not personal data, and can be distributed in raw form";
      return (<div>
        <h2>
          Sensivity
        </h2>
        <p>
          {message}
        </p>
        </div>)
    }
  }

  render() {
    return (
      <div className="container">
        <h1>
          Manage Data
        </h1>
        <div className="row">
          <div className="three columns">
            <nav>
              {this.state.manageList.map((item, index) => {
                  return (
                    <a href="#"
                      key={index}
                      onClick={() => {
                        this.changeManage(index);
                        this.isActiveManage(item);
                      }}
                      className={cx({
                        'selected': item.active,
                        'option': true
                      })}>
                      {item.name}
                    </a>
                  )
                })
              }
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
              </div>
              <div className="three columns">
                {this.processButtons()}
              </div>
            </div>
            <div className="row">
              <div className="nine columns">
                {this.processName()}
              </div>
              <div className="three columns text-right">
                
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                {this.processDescription()}
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                {this.processType()}
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                {this.processSensivity()}
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
                {this.state.manageSelected.values.map(item => {
                  return (
                    <tr>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.description}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}