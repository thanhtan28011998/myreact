import React, {Component} from 'react';
import classNames from 'classnames';
import './traffic.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class traffic extends Component{
    constructor(){
        super();
        this.state = {
            currentColor : RED
        };
        console.log(this.currentColor);

        setInterval(() => {
            this.setState ({currentColor : this.getNextColor(this.state.currentColor)});
        }, 2000);
    }
    getNextColor(color){
        switch(color){
            case RED:
                return YELLOW;
            case YELLOW:
                return GREEN;
            default:
                return RED;
        }
    }
    render(){
        const {currentColor} = this.state;
        return(
            <div className="traffic">
                <div className={classNames('buld', 'red', {active: currentColor === RED})}></div>
                <div className={classNames('buld', 'yellow', {active: currentColor === YELLOW})}></div>
                <div className={classNames('buld', 'green', {active: currentColor === GREEN})}></div>
            </div>
        );
    }
}
export default traffic;