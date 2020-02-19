import React, {Component} from 'react';
import classNames from 'classnames';
import './Demo.css';

class Demo extends Component{
    constructor(props){
        super();
        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick(){
        console.log(this.props.item);
    }
    render(){
        const { item, onClick } = this.props;
        /*let className = 'Demo';
        if(item.isDone){
            className += ' Demo-done';
        }*/

        return(
            <div onClick={onClick} className={classNames('Demo', {'Demo-done' : item.isDone})}>  
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
export default Demo;