

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
        this.divButton();
        document.querySelector(".name").value = '';
    }

    //creation et ajout d'un div pour les bouton//
    //creation and addition of a div for the buttons//

    divButton()
    {
        this.divButton = document.createElement('div');
        this.divButton.className = 'divButton';
        this.divItem.appendChild(this.divButton);
        this.createCheckButton();
        this.createEditButton();
        this.createDeleteButton();
    }

    //creation et ajout du bouton check//
    //creation and addition of the check button//

    createCheckButton()
    {
        this.checkButton = document.createElement('span');
        this.checkButton.id ='check';
        this.checkButton.className = 'button';
        this.checkButton.innerHTML = '<i class="far fa-check-circle"></i>';
        this.checkButton.style.color = 'green';
        this.divButton.append(this.checkButton);

        //event pour surligner l'element de la liste//
        //event to highlight the item in the list//

        this.checkButton.addEventListener("click", ()=>{
            this.item.style.textDecoration = 'line-through';
            this.item.style.textDecorationColor = 'red';
        })
    }

    //creation et ajout du bouton edit//
    //creation and addition of the edit button//

    createEditButton()
    {
        this.editButton = document.createElement('span');
        this.editButton.id ='edit';
        this.editButton.className = 'button';
        this.editButton.innerHTML = '<i class="far fa-edit"></i>';
        this.editButton.style.color = 'blue';
        this.divButton.append(this.editButton);

        //event pour modifier l'element de la liste//
        //event to modify the item in the list//

        this.editButton.addEventListener("click", ()=>{
            this.editItem = document.createElement('input');
            this.editItem.name = 'edit';
            this.editItem.className = 'edit';
            this.editItem.type = 'text';
            this.item.remove();
            this.divItem.append(this.editItem);
            this.editItem.value = this.item.innerHTML;
            this.item.innerHTML = document.querySelector(".edit").value;
            this.createValidButton();
        })
    }

    //creation et ajout du bouton delete//
    //creation and addition of the delete button//

    createDeleteButton()
    {
        this.deleteButton = document.createElement('span');
        this.deleteButton.id ='delete';
        this.deleteButton.className = 'button';
        this.deleteButton.innerHTML = '<i class="far fa-times-circle"></i>';
        this.deleteButton.style.color = 'red';
        this.divButton.append(this.deleteButton);

        //event pour suprimer l'element de la liste//
        //event to remove the item from the list//

        this.deleteButton.addEventListener("click",()=>{
            this.divItem.remove();
        })
    }

    //creation d'un bouton pour valider la moddification d'un element//
    //creation of a button to validate the modification of an element//

    createValidButton(){
        this.validButton = document.createElement('span');
        this.validButton.id = 'valid';
        this.validButton.className = 'button';
        this.validButton.innerHTML = '<i class="fas fa-check"></i>';
        this.validButton.style.color = 'green';
        this.divItem.append(this.validButton);

        //event pour valider la moddification de l'element//
        //event to validate the modification of the element//

        this.validButton.addEventListener("click", ()=>{
            this.item = document.createElement('span');
            this.divItem.append(this.item);
            this.item.className = 'title';
            this.item.innerHTML = document.querySelector(".edit").value;
            this.validButton.remove();
            this.editItem.remove();
        })
    }
}

export {Item};