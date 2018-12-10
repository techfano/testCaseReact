import React, {Component} from 'react';
import cx from 'classnames';

export default class Tabs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options
    }
    this.initTab();
  }

  initTab = () => {
    this.state.options.map(item => {
      if(item.active && item.click) item.click(); 
    })
  }

  isActive = (option) => {
    const newOptions = this.state.options.map(item => {
      if (item.name === option.name){
        item.active = true;
      }else{
        item.active = false;
      }
      return item;
    })

    this.setState({
      options: newOptions
    })
  }

  render(){ 

    return(
      <div className="tabs">
        {
          this.state.options.map((option, index) => {
            return <div key={index} 
              onClick={() => {
                this.isActive(option);
                if(option.click) option.click();
              }}
              className={cx({
                'selected': option.active,
                'option': true
              })}>
              {option.name}
            </div>
          })
        }
      </div>
    );
  }
}

