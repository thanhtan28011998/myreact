import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
//import traffic from './traffic';

class App extends Component {
  constructor(){
    super();
    this.demo = [
      {title:'Mouse', isDone: true}, 
      {title:'Cat'}, 
      {title:'Dog', isDone: true}, 
      {title:'Bird'}, 
      {title:'Chicken', isDone: true}, 
      {title:'Snack'}, 
      {title:'Fish'},
      {title:'Human'}
    ];
  }
  onItemClicked(item){
    return() => {
      const isDone = item.isDone;
      const {demo} = this.state;
      const index = demo.indexOf(item);
      this.setState({
        demo: [
        ...demo.slice(0, index),
        {
          ...item,
          isDone: !isDone
        },
        ...demo.slice(index + 1)
      ]
    });
      //console.log(item);
    };
    //console.log('ItemClicked', item);
  }
  render(){
    //if(this.demo.length > 0){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {
              this.demo.length > 0 &&
              this.demo.map((item, index) => <Demo key={index} item={item} onClick={this.onItemClicked(item)}></Demo>)
            }
            {
              this.demo.length === 0 &&
              "Nothing here"
            }
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
      );
    /*}else{
      return(
        <div className="App">Nothing here</div>
      );
    }*/
    
  }
  
}

export default App;
