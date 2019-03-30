import React from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {
    let applyClasses= classes.red;
    return (
        <div>
        <p>How are you?</p>
        <button className={applyClasses} onClick={props.clicked}>
          Show Information
        </button>
        </div>
    );
}

export default cockpit;