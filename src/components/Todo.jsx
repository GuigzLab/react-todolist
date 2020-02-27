import React from 'react';
const Todo = (props) => {
    console.log(props)
     return (
         <li className="list-group-item pl-5">
             <input type="checkbox" id={`t${props.index}`} className="form-check-input" checked={props.tache.faite} onChange={() => props.onCheck(props.tache)}/>
             <label htmlFor={`t${props.index}`} className="form-check-label">{props.tache.intitule}</label>
             <i className="fas fa-trash float-right mt-1 delete" onClick={() => props.removeTask(props.tache)}></i>
         </li>
     );
 }

 export default Todo;