import React from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { saveToLocalStorage, loadFromLocalStorage } from './StorageService';

const App = (props) => {
    const STORAGE_KEY = props.storageKey;
    const data = loadFromLocalStorage(STORAGE_KEY)

    const [taches, setTaches] = React.useState(data);

    function ajouterTache(nouvelleTache) {
        const stateTasks = [...taches, nouvelleTache];
        setTaches(stateTasks);
        saveToLocalStorage(STORAGE_KEY, stateTasks);
    }

    function onCheck(tacheCliquee) {
        setTaches([...taches]);
        tacheCliquee.faite = !tacheCliquee.faite;
        saveToLocalStorage(STORAGE_KEY, taches);
    }

    function removeTask(tache) {
        const tachesRestantes = taches.filter(t => t !== tache)
        setTaches([...tachesRestantes])
        saveToLocalStorage(STORAGE_KEY, tachesRestantes)
    }

    // if (!localStorage.getItem(STORAGE_KEY)){
    //     saveToLocalStorage(STORAGE_KEY, taches);
    // }

    const restantes = taches.filter(t => t.faite === false).length;

    return (
        <div id="todolist" className="container col-lg-6 py-3 bg-white rounded shadow my-5">
            <p className="text-center">Il reste {restantes}/{taches.length} taches à faire</p>

            <TodoForm nouvelleTache={ajouterTache} />
            <TodoList taches={taches} onCheck={onCheck} removeTask={removeTask} idTask={STORAGE_KEY} />
            <button className="btn btn-danger mx-auto d-block" onClick={() => props.removeTodo(STORAGE_KEY)}>Supprimer la liste</button>
        </div>
    );
}

export default App;
