import "./css/front.css";


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


class Item
{
 constructor()
 {
   //selection du div parent//
  //selection of parent div//

   this.newItemBox = document.querySelector(`.panel`);

   //creation d'un nouveaux div pour acceuillir les items//
  //creation of a new div to accommodate items//

   this.divItem = document.createElement('div');

   //ajout du div au div parent//
  //add div to parent div//

   this.newItemBox.appendChild(this.divItem);
   this.divItem.className = 'divItem';

   //recuperation de l'input et ajout de l'item//
  //retrieving the input and adding the item//

   this.item = document.createElement('span');
   this.divItem.append(this.item);
   this.item.className = 'title';
   this.item.innerHTML = document.querySelector(".name").value;

   //creation et ajout d'un div pour les bouton//
  //creation and addition of a div for the buttons//

   this.divButton = document.createElement('div');
   this.divButton.className = 'divButton';
   this.divItem.appendChild(this.divButton);

   //creation et ajout du bouton check//
  //creation and addition of the check button//

   this.checkButton = document.createElement('span');
   this.checkButton.id ='check';
   this.checkButton.className = 'button'
   this.checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
   this.checkButton.style.color = 'green';
   this.divButton.append(this.checkButton);

   //creation et ajout du bouton edit//
  //creation and addition of the edit button//

   this.editButton = document.createElement('span');
   this.editButton.id ='edit';
   this.editButton.className = 'button'
   this.editButton.innerHTML = '<i class="far fa-edit"></i>';
   this.editButton.style.color = 'blue';
   this.divButton.append(this.editButton);

   //creation et ajout du bouton delete//
  //creation and addition of the delete button//

   this.deleteButton = document.createElement('span');
   this.deleteButton.id ='delete';
   this.deleteButton.className = 'button'
   this.deleteButton.innerHTML = '<i class="far fa-times-circle"></i>';
   this.deleteButton.style.color = 'red';
   this.divButton.append(this.deleteButton);
 }
}

//cree un event listener sur mon bouton//
//create an event listener on my button//

let button = document.getElementById('addButton');
button.addEventListener("click", function (){
 let item = new Item();
});









