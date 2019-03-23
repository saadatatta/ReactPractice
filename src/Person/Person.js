import React from 'react';

const person = (props) => {
    return ( 
        <div>
            <i onClick={props.click}>This is {props.name}.</i>
            <i>{props.children}</i> 
            <input type="text" 
                onChange={props.changed}
                value={props.name}></input>
        </div>
    )
}

export default person;