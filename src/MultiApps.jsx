import React, { useState } from 'react';
import App from './App'
import { removeFromLocalStorage, getContent } from './StorageService';

const monthNames = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUN", "JUL", "AOU", "SEP", "OCT", "NOV", "DEC"];

const d = new Date();
const y = d.getFullYear();
const day = d.getDate();
const m = monthNames[d.getMonth()];

function MultiApps(props) {

     let keys = Object.keys(localStorage).filter(e => {
          if (getContent(e).length > 2) {
               return true
          } else {
               removeFromLocalStorage(e)
               return false
          }
     })

     const [appList, setAppList] = useState(keys)

     function ajouter() {
          appList.push(Date.now())
          setAppList([...appList])
     }

     function removeTodo(key) {
          setAppList(appList.filter(a => a != key))
          removeFromLocalStorage(key)
     }

     return (
          <div>
               <div className="d-inline text-white my-0">
                    <div className="date">
                         <div className="day"><strong>{day}</strong></div>
                         <div className="month-year">
                              <strong>{m}</strong>{y}
                         </div>
                    </div>
               </div>
               <h1 className="font-weight-bold text-white text-uppercase text-center my-4 mt-1">Todolist</h1>

               {appList.map(key => <App storageKey={key} key={key} removeTodo={removeTodo} />)}
               <button onClick={ajouter} className="btn btn-light mx-auto d-block">Ajouter une liste</button>
          </div>
     );
}

export default MultiApps;