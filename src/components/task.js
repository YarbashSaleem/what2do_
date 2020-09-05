import React from 'react';
const Task = (props)=> {
    return(
    <div className='task'>
        <div>
            <p className={props.strike?'strike':null}>{props.newTaskTitle}</p>
        </div>
        <div>
            <button onClick={props.onDone}>Done</button>
            <button onClick={props.onView}>Edit</button>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    </div>
    )}
export default Task;