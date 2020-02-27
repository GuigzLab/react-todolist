import React from 'react';
import Todo from './Todo';
const TodoList = (props) => {
     const taches = props.taches;

     return (
         <ul className="list-group mx-lg-5 my-4">
            {taches.map((tache, index) => <Todo key={index} index={`${props.idTask}${index}`} tache={tache} onCheck={props.onCheck} removeTask={props.removeTask} />)}
         </ul>
     )
 }

 export default TodoList;