import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {css} from 'react-emotion';
import axios from 'axios';
import dashmonLogo from './images/dashmonLogo.png';
import dashmonText from './images/dashmonText.png';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: {}
    };
  }

  componentDidMount(){
    axios.get('/info')
      .then(res => {
        this.setState({content: res.data});
      })
  }

  render(){
    let {content} = this.state;

    return(
      <div className={`container`}>
        <img id={`dashmonText`} src={dashmonText}/>
        <div>
          <img id={`dashmonLogo`} src={dashmonLogo}/>
          <span>Sample App</span>
        </div>
        <div>
          {`Content: ${JSON.stringify(content)}`}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);