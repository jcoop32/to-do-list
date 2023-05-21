function addToList(){
    if (typeof document != 'undefined'){
        const userInput = document.getElementById('userInput').value;
        if (userInput.length > 0){
            //creating label element
            let label = document.createElement('label');
            //setting layout to column with bootstrap
            label.className = 'col-12';

            //creating checkbox element
            let checkboxItem = document.createElement('input');
            //setting type attribute to checkbox
            checkboxItem.setAttribute('type', 'checkbox');
            //setting class name to strikethrough when clicked/changed
            checkboxItem.className = "strikethrough";
            
            //creating span element
            let spanText = document.createElement('span');
            //setting innerHTML to userInput aka task wanting to add
            spanText.innerHTML = userInput;

            //declaring ul
            let unorderedList = document.getElementById('uList');
            //appending each element in ul and label
            unorderedList.append(label);
            label.append(checkboxItem);
            label.append(spanText);
        }
        else if (userInput.length === 0){
            alert("must enter something");
        }
    }
    //clearing submit box after user enters task
    userInput.value = '';
}
//event listner when the submit button is clicked
document.getElementById("submit").addEventListener('click', addToList);