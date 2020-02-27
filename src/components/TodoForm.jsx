import React from 'react';
const TodoForm = (props) => {
     function ajouterTache(event) {
         event.preventDefault(); // Permet de ne pas recharger la page onSubmit
         if (inputText.current.value.trim().length > 0){
             props.nouvelleTache({intitule: inputText.current.value, faite: false}); // Permet d'utiliser cet event dans l'élément du dessus (cad App)
             inputText.current.value = '';   // Efface le champ input
         }
     }
 
     const inputText = React.createRef();    
 
     return (
         <form className="d-flex flex-row mx-lg-5" onSubmit={ajouterTache}>
             <input ref={inputText} type="text" placeholder="ex: Nourrir le chat ..." className=" form-control flex-fill mr-2" />
             <button type="submit" className="btn btn-dark">Ajouter</button>
         </form>
     )
 }

 export default TodoForm;