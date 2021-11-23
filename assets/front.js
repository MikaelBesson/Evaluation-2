import "./css/front.css";
import "./css/responsive.css";
import {Item} from "./js/Item";



addDivBox();

/**
 * fonction pour faire la box a la connection sur la page
 * function to make the box at the connection on the page
 */

function addDivBox()
{
 //creation de la box et du titre//
 //creation of the box and the title//

 let newBox = document.createElement("div");
 newBox.className = "panel";
 let title = document .createElement("h1");
 title.innerHTML = "To Do List :";
 title.style.textDecoration = "underline";
 newBox.append(title);

 //div pour la zone de test et le bouton de validation//
 //div for the test area and the validation button//

 let boxInput = document.createElement('div');
 boxInput.id = 'inputBox';

 //zone de texte pour l'ajout dans la liste//
 //text box for adding to the list//

 let toDoInput = document.createElement('input');
 toDoInput.type = 'text';
 toDoInput.className = 'name';
 toDoInput.name = 'name';
 toDoInput.placeholder = 'Ajoutez a la liste ...'

 //ajout du bouton de validation//
 //added validation button//

 let button = document.createElement('button');
 button.id = 'addButton';
 button.type = 'button';
 button.innerHTML = 'Ajoutez';

 //ajout du contenu dans la box input//
 //adding content in the input box//

 boxInput.append(toDoInput);
 boxInput.appendChild(button);

 //ajout de la box input dans la newbox//
 //addition of the input box in the newbox//

 newBox.appendChild(boxInput);

//ajout de la new box complete au chargement de la page//
 //addition of the new box complete when loading the page//

 document.body.append(newBox);
}

//cree un event listener sur mon bouton//
//create an event listener on my button//

let button = document.getElementById('addButton');
button.addEventListener("click", function (){
    let item = new Item();
});










