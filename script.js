function addToList(){
    if (typeof document != 'undefined'){
        const userInput = document.getElementById('userInput').value;
        if (userInput.length > 0){

            let label = document.createElement('label');
            label.className = 'col-12';

            let checkboxItem = document.createElement('input');
            checkboxItem.setAttribute('type', 'checkbox');
            checkboxItem.className = "strikethrough";
            
            let spanText = document.createElement('span');
            spanText.innerHTML = userInput;

            let unorderedList = document.getElementById('uList');
            unorderedList.append(label);
            label.append(checkboxItem);
            label.append(spanText);
        }
        else if (userInput.length === 0){
            alert("must enter something");
        }
    }
    userInput.value = '';
}
document.getElementById("submit").addEventListener('click', addToList);