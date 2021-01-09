import React from 'react';


const ToDo = (props) => {
    return (
        <>
            <div className="toDo">
                <i class="fa fa-times" aria-hidden="true" onClick={() =>{
                    props.onSelect(props.id);
                }}></i>
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default ToDo;